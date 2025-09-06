"use client";

import React from "react";
import { notFound } from "next/navigation";
import GrammarLayout from "@/components/navigation/GrammarLayout";
import TableOfContents from "@/components/navigation/TableOfContents";
import GrammarNavigation from "@/components/navigation/GrammarNavigation";
import GrammarStatusBanner from "@/components/navigation/GrammarStatusBanner";
import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";
import {
  getGrammarItemByKey,
  getGrammarItemByDatabaseKey,
  grammarCategories,
} from "@/lib/static/grammars/grammar-categories";
import { isGrammarTopicAvailable } from "@/lib/utils/filter-available-grammar";
import {
  getDatabaseKey,
  topicExistsInDatabase,
  getCategoryKeyFromDatabaseKey,
} from "@/lib/utils/grammar-key-mapping";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  BookOpen,
  Target,
  Users,
  Lightbulb,
  FileText,
  CheckSquare,
  Volume2,
  AlertTriangle,
  TrendingUp,
  Globe,
  Database,
  GraduationCap,
  Settings,
  BarChart3,
  Rocket,
} from "lucide-react";

interface GrammarPageProps {
  params: Promise<{
    grammars: string[];
  }>;
}

const GrammarPage: React.FC<GrammarPageProps> = ({ params }) => {
  // Convert URL path back to database key format
  // URL: simple-present -> Simple_Present
  const resolvedParams = React.use(params);
  const urlParam = resolvedParams.grammars?.[0];

  // Function to convert URL format to database key format
  const convertUrlToKey = (url: string): string | null => {
    return getDatabaseKey(url);
  };

  const grammarKey = urlParam ? convertUrlToKey(urlParam) : null;

  console.log("🔍 Debug Grammar Page:");
  console.log("  URL Param:", urlParam);
  console.log("  Grammar Key:", grammarKey);

  // Check if the topic is available in the database
  if (urlParam && !grammarKey) {
    console.log("❌ Grammar key not found, redirecting to 404");
    notFound();
  }

  if (!grammarKey) {
    return (
      <GrammarLayout>
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Grammar Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Master English grammar with our comprehensive collection
            </p>

            {/* Welcome Section */}
            <div className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Choose a Grammar Topic
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Explore our comprehensive grammar collection organized by categories. 
                  Use the navigation panel to discover topics tailored for your learning journey.
                </p>
              </div>
            </div>

            {/* Category Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grammarCategories.slice(0, 6).map((category) => (
                <div
                  key={category.id}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        <span className="text-sm text-blue-700 font-medium">
                          {category.items.length} topics
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grammar Navigation for Homepage */}
        <GrammarNavigation />
      </GrammarLayout>
    );
  }

  // Find the grammar topic in the database
  const grammarData = grammarKey
    ? tenseDatabase[grammarKey as keyof typeof tenseDatabase]
    : null;

  // Get the grammar info using the more flexible function
  const grammarInfo = grammarKey
    ? getGrammarItemByDatabaseKey(grammarKey)
    : null;

  console.log("  Grammar Data exists:", !!grammarData);
  console.log(
    "  Grammar Data keys:",
    grammarData ? Object.keys(grammarData).slice(0, 5) : "None"
  );
  console.log("  Grammar Info exists:", !!grammarInfo);

  if (!grammarData || !grammarInfo) {
    console.log("❌ Data or info not found, redirecting to 404");
    notFound();
  }

  // Type guard to safely access properties
  const getProperty = (obj: any, prop: string) => {
    const result =
      obj && typeof obj === "object" && prop in obj ? obj[prop] : undefined;
    if (prop === "definition" && result) {
      console.log(
        "📋 Definition found:",
        typeof result,
        Object.keys(result || {}).slice(0, 3)
      );
    }
    return result;
  };

  // Safe rendering function to avoid [object Object]
  const safeRender = (value: any): string => {
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
      return value.map((item) => safeRender(item)).join(", ");
    }
    if (typeof value === "object") {
      // Special handling for journal/research article objects
      if (value.title && value.authors && value.journal && value.year) {
        const authors = Array.isArray(value.authors)
          ? value.authors.join(", ")
          : String(value.authors);
        const doi = value.doi ? ` - DOI: ${value.doi}` : "";
        const findings = value.keyFindings
          ? ` - Key Findings: ${value.keyFindings}`
          : "";
        return `${value.title} by ${authors} (${value.year}) in ${value.journal}${doi}${findings}`;
      }

      // Special handling for citation/reference objects
      if (value.title && value.author && (value.year || value.publisher)) {
        const chapters =
          value.relevantChapters && Array.isArray(value.relevantChapters)
            ? ` - Chapters: ${value.relevantChapters.join(", ")}`
            : "";
        const isbn = value.isbn ? ` (ISBN: ${value.isbn})` : "";
        return `${value.title} by ${value.author} (${value.year || "N/A"}) - ${
          value.publisher || "Unknown Publisher"
        }${chapters}${isbn}`;
      }

      // Special handling for web resource objects
      if (value.name && value.url && value.description) {
        const accessDate = value.accessDate
          ? ` (Accessed: ${value.accessDate})`
          : "";
        return `${value.name} - ${value.description} - URL: ${value.url}${accessDate}`;
      }

      // Special handling for book/resource objects
      if (value.title && value.author && (value.focus || value.level)) {
        const focus = value.focus ? ` - Focus: ${value.focus}` : "";
        const level = value.level ? ` - Level: ${value.level}` : "";
        return `${value.title} by ${value.author}${focus}${level}`;
      }

      // Generic object fallback - format key-value pairs nicely
      const objectEntries = Object.entries(value);
      if (objectEntries.length <= 5) {
        return objectEntries
          .map(([key, val]) => {
            const formattedKey = key
              .replace(/([A-Z])/g, " $1")
              .replace(/_/g, " ")
              .toLowerCase();
            return `${formattedKey}: ${safeRender(val)}`;
          })
          .join(" | ");
      }

      // Special handling for language error correction objects
      if (
        value.language &&
        value.error &&
        value.correction &&
        value.explanation
      ) {
        return `Language: ${value.language} | Error: ${value.error} | Correction: ${value.correction} | Explanation: ${value.explanation}`;
      }

      // Special handling for pattern objects with structure like: { pattern: "...", examples: [...], level: "..." }
      if (value.pattern && value.examples && value.level) {
        const examples = Array.isArray(value.examples)
          ? value.examples.join(", ")
          : String(value.examples);
        return `${value.pattern} (Level: ${value.level}) - Examples: ${examples}`;
      }

      // Special handling for objects with description and examples
      if (value.description && value.examples) {
        const examples = Array.isArray(value.examples)
          ? value.examples.join(", ")
          : String(value.examples);
        return `${value.description} - Examples: ${examples}`;
      }

      // Special handling for objects with rule and examples
      if (value.rule && value.examples) {
        const examples = Array.isArray(value.examples)
          ? value.examples.join(", ")
          : String(value.examples);
        return `${value.rule} - Examples: ${examples}`;
      }

      // For simple key-value objects, format them nicely
      const entries = Object.entries(value);
      if (entries.length <= 3) {
        return entries
          .map(([key, val]) => `${key}: ${safeRender(val)}`)
          .join(" | ");
      }

      // If object is too complex, format it nicely instead of JSON
      return `Complex object with ${entries.length} properties: ${entries
        .map(([key]) => key)
        .join(", ")}`;
    }
    return String(value);
  };

  // Special function to render comprehensive verb categories with organized layout
  const renderVerbCategories = (content: string) => {
    // Check if this is verb categories content or content with many words
    const isVerbContent =
      content.toLowerCase().includes("verb") ||
      content.toLowerCase().includes("comprehensive") ||
      content.toLowerCase().includes("categories") ||
      content.toLowerCase().includes("actions") ||
      content.toLowerCase().includes("movements") ||
      content.toLowerCase().includes("oneself"); // Key indicator for reflexive verbs

    // Check if content has many words (more than 15 words total)
    const wordCount = content.split(/\s+/).length;
    const hasManyWords = wordCount > 15;

    // Check if it has the pattern of main category + subcategories
    const hasSubcategories =
      content.includes(":") &&
      content.split("\n").some((line) => line.includes(":"));

    // More liberal detection - if it has multiple categories or many words with colons
    const categoryCount = (content.match(/:/g) || []).length;
    const hasMultipleCategories = categoryCount >= 2;

    if (
      !isVerbContent &&
      !hasManyWords &&
      !hasSubcategories &&
      !hasMultipleCategories
    ) {
      return null;
    }

    // Enhanced parsing for main categories and subcategories
    const lines = content
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);
    const parsedContent = [];
    let currentMainCategory = "Main Category";
    let currentSubcategory = null;
    let currentItems = [];

    for (const line of lines) {
      if (line.includes(":")) {
        // Save previous subcategory if exists
        if (currentSubcategory && currentItems.length > 0) {
          parsedContent.push({
            mainCategory: currentMainCategory,
            subcategory: currentSubcategory,
            items: [...currentItems],
          });
          currentItems = [];
        }

        // This line defines a new category/subcategory
        const categoryName = line.replace(":", "").trim();

        // If this looks like a main category (typically the first one or standalone)
        if (parsedContent.length === 0 && !currentSubcategory) {
          currentMainCategory = categoryName;
          currentSubcategory = null;
        } else {
          currentSubcategory = categoryName;
        }
      } else if (line && !line.includes(":")) {
        currentItems.push(line);
      }
    }

    // Add the last subcategory
    if (currentSubcategory && currentItems.length > 0) {
      parsedContent.push({
        mainCategory: currentMainCategory,
        subcategory: currentSubcategory,
        items: [...currentItems],
      });
    } else if (!currentSubcategory && currentItems.length > 0) {
      // If no subcategories were found, treat the main category as a subcategory
      parsedContent.push({
        mainCategory: currentMainCategory,
        subcategory: currentMainCategory,
        items: [...currentItems],
      });
    }

    // If no proper structure found, fall back to simple category pattern
    if (parsedContent.length === 0) {
      const categoryPattern = /^([^:]+):\s*\n?((?:\s*[^\n:]+\n?)*)/gm;
      const matches = [...content.matchAll(categoryPattern)];

      if (matches.length === 0 && (hasManyWords || hasMultipleCategories)) {
        // Treat as a simple word list
        const words = content
          .split(/[,\n]/)
          .map((w) => w.trim())
          .filter((w) => w && w.length > 1);
        if (words.length > 5) {
          parsedContent.push({
            mainCategory: "Word Collection",
            subcategory: "Terms",
            items: words,
          });
        }
      } else {
        matches.forEach((match) => {
          const items = match[2]
            .trim()
            .split(/\n/)
            .map((item) => item.trim())
            .filter((item) => item);
          if (items.length > 0) {
            parsedContent.push({
              mainCategory: currentMainCategory,
              subcategory: match[1].trim(),
              items: items,
            });
          }
        });
      }
    }

    if (parsedContent.length === 0) {
      return null;
    }

    // Group by main category
    const groupedContent = parsedContent.reduce((acc, item) => {
      const mainCat = item.mainCategory || "General";
      if (!acc[mainCat]) {
        acc[mainCat] = [];
      }
      acc[mainCat].push(item);
      return acc;
    }, {} as Record<string, typeof parsedContent>);

    return (
      <div className="space-y-8">
        <div className="space-y-10">
          {Object.entries(groupedContent).map(
            ([mainCategory, subcategories], mainIndex) => (
              <div key={mainIndex} className="space-y-6">
                {/* Main Category Header */}
                {Object.keys(groupedContent).length > 1 && (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 capitalize">
                      {mainCategory}
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mx-auto"></div>
                  </div>
                )}

                {/* Subcategories Grid */}
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                  {subcategories.map((subcat, subcatIndex) => {
                    // Clean up items
                    const cleanItems = subcat.items
                      .map((item) =>
                        item
                          .replace(/^[•\-*]\s*/, "")
                          .replace(/^\d+\.\s*/, "")
                          .trim()
                      )
                      .filter((item) => item.length > 0);

                    // Split items into chunks for better display
                    const chunkedItems = [];
                    const itemsPerRow = 3; // 3 items per row for better readability
                    for (let i = 0; i < cleanItems.length; i += itemsPerRow) {
                      chunkedItems.push(cleanItems.slice(i, i + itemsPerRow));
                    }

                    return (
                      <div
                        key={subcatIndex}
                        className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex items-start gap-4 mb-6">
                          <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-full flex-shrink-0 shadow-md">
                            <span className="text-white text-xl">
                              {isVerbContent ? "🎯" : "📝"}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs uppercase tracking-wide text-violet-600 font-semibold bg-violet-100 px-3 py-1 rounded-full">
                                {isVerbContent ? "Verb Group" : "Word Group"}
                              </span>
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {cleanItems.length}{" "}
                                {isVerbContent ? "verbs" : "words"}
                              </span>
                            </div>
                            <h4 className="text-xl font-bold text-violet-800 leading-tight capitalize">
                              {subcat.subcategory}
                            </h4>
                            <div className="w-full h-0.5 bg-gradient-to-r from-violet-300 to-purple-300 rounded-full mt-2"></div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {chunkedItems.map((chunk, chunkIndex) => (
                            <div
                              key={chunkIndex}
                              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                            >
                              {chunk.map((item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  className="group flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-violet-100/50 hover:bg-white hover:border-violet-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                                >
                                  <div className="flex items-center gap-2">
                                    <div className="relative">
                                      <span className="w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></span>
                                      <span className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></span>
                                    </div>
                                  </div>
                                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200 text-sm flex-1">
                                    {item}
                                  </span>
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-violet-400 text-xs">
                                      ✨
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>

                        {/* Subcategory summary */}
                        <div className="mt-6 pt-4 border-t border-violet-200/50">
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                              <span>
                                Total: <strong>{cleanItems.length}</strong>{" "}
                                {isVerbContent ? "verbs" : "items"}
                              </span>
                            </span>
                            <span className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span>
                                Group: <strong>{subcat.subcategory}</strong>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  // Special function to handle long word lists or vocabulary-heavy content
  const renderWordList = (content: string) => {
    // Check if content is a long list of words (more than 15 words, no clear categories)
    const words = content
      .split(/[,\n\s]+/)
      .map((w) => w.trim())
      .filter((w) => w && w.length > 1);
    const hasCategories =
      content.includes(":") && content.split(":").length > 2;

    if (words.length < 15 || hasCategories) {
      return null;
    }

    // Clean up words
    const cleanWords = words
      .map((word) =>
        word
          .replace(/^[•\-*]\s*/, "")
          .replace(/^\d+\.\s*/, "")
          .replace(/[.,;!?]$/, "")
          .trim()
      )
      .filter((word) => word.length > 0 && word.length < 30); // Filter out very long strings

    if (cleanWords.length < 10) {
      return null;
    }

    // Split into chunks
    const chunkedWords = [];
    for (let i = 0; i < cleanWords.length; i += 8) {
      chunkedWords.push(cleanWords.slice(i, i + 8));
    }

    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            📚 Vocabulary Collection
          </h2>
          <p className="text-gray-600 mt-2">
            Organized for easy reading and learning
          </p>
          <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-emerald-100 rounded-full">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="text-sm font-medium text-emerald-700">
              {cleanWords.length} words
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200 shadow-lg">
          <div className="space-y-4">
            {chunkedWords.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3"
              >
                {chunk.map((word, wordIndex) => (
                  <div
                    key={wordIndex}
                    className="group flex items-center justify-center p-3 bg-white/70 backdrop-blur-sm rounded-lg border border-emerald-100/50 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200 text-sm text-center">
                      {word}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-emerald-200/50 text-center">
            <div className="inline-flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <span>
                  Total: <strong>{cleanWords.length}</strong> words
                </span>
              </span>
              <span className="w-px h-4 bg-gray-300"></span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                <span>
                  Organized in <strong>{chunkedWords.length}</strong> rows
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Special function to render categorical word lists beautifully
  const renderCategoricalList = (content: string) => {
    // Check if content contains categories with lists (like "introduction:", "assertion:")
    const categoryPattern = /^([^:]+):\s*\n((?:\s*[^\n]+\n?)+)/gm;
    const matches = [...content.matchAll(categoryPattern)];

    if (matches.length > 0) {
      return (
        <div className="space-y-6">
          {matches.map((match, categoryIndex) => {
            const categoryTitle = match[1].trim();
            const items = match[2]
              .trim()
              .split("\n")
              .map((item) => item.trim())
              .filter((item) => item);

            return (
              <div
                key={categoryIndex}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full flex-shrink-0 shadow-md">
                    <span className="text-white text-xl">📝</span>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded-full">
                        Category
                      </span>
                      <h3 className="text-xl font-bold text-blue-800 mt-2 leading-tight capitalize">
                        {categoryTitle}
                      </h3>
                      <div className="w-full h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full mt-2"></div>
                    </div>

                    <div className="grid gap-3">
                      {items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="group flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-blue-100/50 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></span>
                              <span className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></span>
                            </div>
                            <div className="w-px h-6 bg-gradient-to-b from-blue-300 to-transparent"></div>
                          </div>
                          <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200 flex-1">
                            {item}
                          </span>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-blue-400 text-sm">✨</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    // Check if content is a simple list (lines starting with common list indicators)
    const lines = content
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);
    const isSimpleList =
      lines.length > 1 &&
      lines.every(
        (line) =>
          line.startsWith("•") ||
          line.startsWith("-") ||
          line.startsWith("*") ||
          /^\d+\./.test(line) ||
          (!line.includes(":") && line.length < 100) // Short phrases without colons
      );

    if (isSimpleList) {
      return (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-full flex-shrink-0 shadow-md">
              <span className="text-white text-xl">📋</span>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wide text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">
                  List Items
                </span>
                <h3 className="text-lg font-bold text-green-800 mt-2">
                  Terms & Expressions
                </h3>
                <div className="w-full h-0.5 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full mt-2"></div>
              </div>

              <div className="grid gap-3">
                {lines.map((item, itemIndex) => {
                  // Clean up list indicators
                  const cleanItem = item
                    .replace(/^[•\-*]\s*/, "")
                    .replace(/^\d+\.\s*/, "");
                  return (
                    <div
                      key={itemIndex}
                      className="group flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-green-100/50 hover:bg-white hover:border-green-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></span>
                          <span className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></span>
                        </div>
                        <div className="w-px h-6 bg-gradient-to-b from-green-300 to-transparent"></div>
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200 flex-1">
                        {cleanItem}
                      </span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-green-400 text-sm">✨</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null; // Return null if not a categorical list
  };

  // Special render function for pattern objects to display them as structured content
  const renderPatternObject = (obj: any) => {
    if (typeof obj !== "object" || !obj) return safeRender(obj);

    // Handle journal/research article objects
    if (obj.title && obj.authors && obj.journal && obj.year) {
      return (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
              <span className="text-green-600 text-xl">📄</span>
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <span className="text-xs uppercase tracking-wide text-green-600 font-semibold">
                  Research Article
                </span>
                <h4 className="text-lg font-bold text-green-800 mt-1 leading-tight">
                  {obj.title}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-gray-600 font-medium">Authors:</span>
                  <span className="text-gray-800">
                    {Array.isArray(obj.authors)
                      ? obj.authors.join(", ")
                      : obj.authors}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-gray-600 font-medium">Year:</span>
                  <span className="text-gray-800 font-semibold">
                    {obj.year}
                  </span>
                </div>
              </div>

              <div className="bg-white/60 rounded-lg p-3 border border-green-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-green-600">📚</span>
                  <span className="text-sm font-medium text-gray-700">
                    Published in:
                  </span>
                </div>
                <p className="text-gray-800 italic font-medium">
                  {obj.journal}
                </p>
              </div>

              {obj.doi && (
                <div className="bg-white/60 rounded-lg p-3 border border-green-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-600">🔗</span>
                    <span className="text-sm font-medium text-gray-700">
                      DOI:
                    </span>
                  </div>
                  <code className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded break-all">
                    {obj.doi}
                  </code>
                </div>
              )}

              {obj.keyFindings && (
                <div className="bg-white/60 rounded-lg p-3 border border-green-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-600">🔍</span>
                    <span className="text-sm font-medium text-gray-700">
                      Key Findings:
                    </span>
                  </div>
                  <p className="text-gray-800 leading-relaxed">
                    {obj.keyFindings}
                  </p>
                </div>
              )}

              {obj.pages && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-600">📖</span>
                  <span>
                    Pages:{" "}
                    <span className="font-medium text-gray-800">
                      {obj.pages}
                    </span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Handle citation/reference objects
    if (obj.title && obj.author && (obj.year || obj.publisher)) {
      return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
              <span className="text-blue-600 text-xl">📚</span>
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
                  Citation
                </span>
                <h4 className="text-lg font-bold text-blue-800 mt-1 leading-tight">
                  {obj.title}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-gray-600 font-medium">Author:</span>
                  <span className="text-gray-800 font-semibold">
                    {obj.author}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-gray-600 font-medium">Year:</span>
                  <span className="text-gray-800 font-semibold">
                    {obj.year || "N/A"}
                  </span>
                </div>
              </div>

              {obj.publisher && (
                <div className="bg-white/60 rounded-lg p-3 border border-blue-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600">🏢</span>
                    <span className="text-sm font-medium text-gray-700">
                      Publisher:
                    </span>
                  </div>
                  <p className="text-gray-800 font-medium">{obj.publisher}</p>
                </div>
              )}

              {obj.relevantChapters && Array.isArray(obj.relevantChapters) && (
                <div className="bg-white/60 rounded-lg p-3 border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-600">📖</span>
                    <span className="text-sm font-medium text-gray-700">
                      Relevant Chapters:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {obj.relevantChapters.map(
                      (chapter: string, idx: number) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {chapter}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {obj.isbn && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">🔢</span>
                  <span>
                    ISBN:{" "}
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {obj.isbn}
                    </code>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Handle web resource objects (name, url, description, accessDate)
    if (obj.name && obj.url && obj.description) {
      return (
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
              <span className="text-purple-600 text-xl">🌐</span>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wide text-purple-600 font-semibold">
                  Web Resource
                </span>
                <h4 className="text-lg font-bold text-purple-800 mt-1 leading-tight">
                  {obj.name}
                </h4>
              </div>

              <div className="bg-white/60 rounded-lg p-4 border border-purple-100">
                <p className="text-gray-700 leading-relaxed">
                  {obj.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={obj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm"
                >
                  <span>🔗</span>
                  <span>Visit Resource</span>
                </a>

                {obj.accessDate && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 px-3 py-2 bg-white/60 rounded-lg border border-purple-100">
                    <span className="text-purple-600">�</span>
                    <span>
                      Accessed:{" "}
                      <span className="font-medium">{obj.accessDate}</span>
                    </span>
                  </div>
                )}
              </div>

              {obj.type && (
                <div className="flex items-center gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                    {obj.type}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Handle book/resource objects (title, author, focus, level)
    if (obj.title && obj.author && (obj.focus || obj.level)) {
      return (
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="bg-indigo-100 p-3 rounded-full flex-shrink-0">
              <span className="text-indigo-600 text-xl">📖</span>
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <span className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">
                  Book Resource
                </span>
                <h4 className="text-lg font-bold text-indigo-800 mt-1 leading-tight">
                  {obj.title}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span className="text-gray-600 font-medium">Author:</span>
                  <span className="text-gray-800 font-semibold">
                    {obj.author}
                  </span>
                </div>

                {obj.level && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    <span className="text-gray-600 font-medium">Level:</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                      {obj.level}
                    </span>
                  </div>
                )}
              </div>

              {obj.focus && (
                <div className="bg-white/60 rounded-lg p-3 border border-indigo-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-indigo-600">🎯</span>
                    <span className="text-sm font-medium text-gray-700">
                      Focus Area:
                    </span>
                  </div>
                  <p className="text-gray-800 font-medium">{obj.focus}</p>
                </div>
              )}

              {obj.description && (
                <div className="bg-white/60 rounded-lg p-3 border border-indigo-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-indigo-600">📝</span>
                    <span className="text-sm font-medium text-gray-700">
                      Description:
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Generic object handler - for ANY object that doesn't match specific patterns
    if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
      const entries = Object.entries(obj);
      if (entries.length > 0) {
        return (
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
                <span className="text-gray-600 text-xl">📄</span>
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <span className="text-xs uppercase tracking-wide text-gray-600 font-semibold">
                    Data Object
                  </span>
                  <h4 className="text-lg font-bold text-gray-800 mt-1">
                    Information
                  </h4>
                </div>

                <div className="grid gap-3">
                  {entries.map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-white/60 rounded-lg p-3 border border-gray-100"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-700 mb-1 capitalize">
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/_/g, " ")
                              .toLowerCase()}
                          </div>
                          <div className="text-gray-800">
                            {Array.isArray(value) ? (
                              <div className="flex flex-wrap gap-1">
                                {value.map((v, idx) => (
                                  <span
                                    key={idx}
                                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                  >
                                    {typeof v === "object"
                                      ? renderUniversalData(v)
                                      : String(v)}
                                  </span>
                                ))}
                              </div>
                            ) : typeof value === "object" ? (
                              renderUniversalData(value)
                            ) : (
                              <span className="font-medium">
                                {String(value)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    // Handle language error correction objects
    if (obj.language && obj.error && obj.correction && obj.explanation) {
      return (
        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border border-red-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
              <span className="text-red-600 text-xl">⚠️</span>
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <span className="text-xs uppercase tracking-wide text-red-600 font-semibold">
                  Language Error
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {obj.language}
                  </span>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="bg-red-100/50 rounded-lg p-3 border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-sm font-medium text-red-700">
                      Incorrect:
                    </span>
                  </div>
                  <p className="text-red-800 line-through font-medium">
                    {obj.error}
                  </p>
                </div>

                <div className="bg-green-100/50 rounded-lg p-3 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-sm font-medium text-green-700">
                      Correct:
                    </span>
                  </div>
                  <p className="text-green-800 font-semibold">
                    {obj.correction}
                  </p>
                </div>

                <div className="bg-white/60 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-600">💡</span>
                    <span className="text-sm font-medium text-gray-700">
                      Explanation:
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {obj.explanation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (obj.pattern && obj.examples && obj.level) {
      return (
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
              <span className="text-yellow-600 text-xl">🔧</span>
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <span className="text-xs uppercase tracking-wide text-yellow-600 font-semibold">
                  Grammar Pattern
                </span>
                <h4 className="text-lg font-bold text-yellow-800 mt-1 leading-tight">
                  {obj.pattern}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-medium text-sm">
                  Level:
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  {obj.level}
                </span>
              </div>

              <div className="bg-white/60 rounded-lg p-4 border border-yellow-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-600">📝</span>
                  <span className="text-sm font-medium text-gray-700">
                    Examples:
                  </span>
                </div>
                <div className="space-y-2">
                  {Array.isArray(obj.examples) ? (
                    obj.examples.map((example: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 leading-relaxed">
                          {example}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">
                        {obj.examples}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (obj.description && obj.examples) {
      return (
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
              <span className="text-teal-600 text-xl">📚</span>
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <span className="text-xs uppercase tracking-wide text-teal-600 font-semibold">
                  Description
                </span>
                <h4 className="text-lg font-bold text-teal-800 mt-1 leading-tight">
                  {obj.description}
                </h4>
              </div>

              <div className="bg-white/60 rounded-lg p-4 border border-teal-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-teal-600">📝</span>
                  <span className="text-sm font-medium text-gray-700">
                    Examples:
                  </span>
                </div>
                <div className="space-y-2">
                  {Array.isArray(obj.examples) ? (
                    obj.examples.map((example: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 leading-relaxed">
                          {example}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">
                        {obj.examples}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (obj.rule && obj.examples) {
      return (
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
              <span className="text-orange-600 text-xl">⚖️</span>
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <span className="text-xs uppercase tracking-wide text-orange-600 font-semibold">
                  Grammar Rule
                </span>
                <h4 className="text-lg font-bold text-orange-800 mt-1 leading-tight">
                  {obj.rule}
                </h4>
              </div>

              <div className="bg-white/60 rounded-lg p-4 border border-orange-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-orange-600">📝</span>
                  <span className="text-sm font-medium text-gray-700">
                    Examples:
                  </span>
                </div>
                <div className="space-y-2">
                  {Array.isArray(obj.examples) ? (
                    obj.examples.map((example: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 leading-relaxed">
                          {example}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">
                        {obj.examples}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Fall back to safeRender for other objects
    return <span className="text-gray-700">{safeRender(obj)}</span>;
  };

  // Special render function for arrays that might contain structured objects
  const renderDataArray = (data: any[]) => {
    if (!Array.isArray(data)) return safeRender(data);

    return (
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index}>
            {typeof item === "string" ? (
              <p className="text-gray-700">{item}</p>
            ) : typeof item === "object" && item !== null ? (
              renderPatternObject(item)
            ) : (
              <p className="text-gray-700">{safeRender(item)}</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Universal render function for any type of data
  const renderUniversalData = (data: any) => {
    if (data === null || data === undefined) {
      return <span className="text-gray-500 italic">No data available</span>;
    }

    if (typeof data === "string") {
      return <span className="text-gray-700">{data}</span>;
    }

    if (typeof data === "number" || typeof data === "boolean") {
      return <span className="text-gray-700">{String(data)}</span>;
    }

    if (Array.isArray(data)) {
      if (data.length === 0) {
        return <span className="text-gray-500 italic">No items available</span>;
      }
      return renderDataArray(data);
    }

    if (typeof data === "object") {
      return renderPatternObject(data);
    }

    return <span className="text-gray-700">{safeRender(data)}</span>;
  };

  const formatTitle = (key: string) => {
    return key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const [day, month, year] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  // Create sections for Table of Contents based on available data
  const sections = [
    ...(getProperty(grammarData, "definition")
      ? [
          {
            id: "definition",
            title: "Definition",
            icon: <BookOpen className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "theory")
      ? [
          {
            id: "theory",
            title: "Theory & Overview",
            icon: <BookOpen className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "formation")
      ? [
          {
            id: "formation",
            title: "Formation",
            icon: <FileText className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "forms")
      ? [
          {
            id: "forms",
            title: "Forms",
            icon: <CheckSquare className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "spellingRules")
      ? [
          {
            id: "spelling-rules",
            title: "Spelling Rules",
            icon: <FileText className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "usage")
      ? [
          {
            id: "usage",
            title: "Usage",
            icon: <Users className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "advancedUsagePatterns")
      ? [
          {
            id: "advanced-usage",
            title: "Advanced Usage Patterns",
            icon: <TrendingUp className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "culturalAndContextualUsage")
      ? [
          {
            id: "cultural-usage",
            title: "Cultural & Contextual Usage",
            icon: <Globe className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "examples")
      ? [
          {
            id: "examples",
            title: "Examples",
            icon: <Lightbulb className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "extendedExamples")
      ? [
          {
            id: "extended-examples",
            title: "Extended Examples",
            icon: <Lightbulb className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "commonMistakes")
      ? [
          {
            id: "common-mistakes",
            title: "Common Mistakes",
            icon: <AlertTriangle className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "pronunciationGuide")
      ? [
          {
            id: "pronunciation",
            title: "Pronunciation Guide",
            icon: <Volume2 className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "keyPoints")
      ? [
          {
            id: "key-points",
            title: "Key Points",
            icon: <Target className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "practiceExerciseTypes")
      ? [
          {
            id: "practice-exercises",
            title: "Practice Exercise Types",
            icon: <GraduationCap className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "learningTips")
      ? [
          {
            id: "learning-tips",
            title: "Learning Tips",
            icon: <Lightbulb className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "learningProgression")
      ? [
          {
            id: "learning-progression",
            title: "Learning Progression",
            icon: <TrendingUp className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "cefrLevelBreakdown")
      ? [
          {
            id: "cefr-levels",
            title: "CEFR Level Breakdown",
            icon: <BarChart3 className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "comprehensiveErrorAnalysis")
      ? [
          {
            id: "error-analysis",
            title: "Comprehensive Error Analysis",
            icon: <AlertTriangle className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "notes")
      ? [
          {
            id: "notes",
            title: "Important Notes",
            icon: <FileText className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "citations") ||
    getProperty(grammarData, "references") ||
    (getProperty(grammarData, "definition") &&
      getProperty(getProperty(grammarData, "definition"), "references"))
      ? [
          {
            id: "references",
            title: getProperty(grammarData, "citations")
              ? "Citations"
              : "References",
            icon: <FileText className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "progressiveDifficulty")
      ? [
          {
            id: "progressive-difficulty",
            title: "Progressive Difficulty Exercises",
            icon: <TrendingUp className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "pedagogicalSequencing")
      ? [
          {
            id: "pedagogical-sequencing",
            title: "Pedagogical Sequencing",
            icon: <GraduationCap className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "crossLinguisticAnalysis")
      ? [
          {
            id: "cross-linguistic",
            title: "Cross-Linguistic Analysis",
            icon: <Globe className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "corpusBasedUsage")
      ? [
          {
            id: "corpus-usage",
            title: "Corpus-Based Usage Data",
            icon: <Database className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "digitalLearningIntegration")
      ? [
          {
            id: "digital-learning",
            title: "Digital Learning Integration",
            icon: <Settings className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "researchBasedInsights")
      ? [
          {
            id: "research-insights",
            title: "Research-Based Insights",
            icon: <Database className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "assessmentFramework")
      ? [
          {
            id: "assessment-framework",
            title: "Assessment Framework",
            icon: <BarChart3 className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "futureDirections")
      ? [
          {
            id: "future-directions",
            title: "Future Directions",
            icon: <Rocket className="h-4 w-4" />,
          },
        ]
      : []),
  ];

  return (
    <GrammarLayout>
      <style jsx global>{`
        section[id] {
          scroll-margin-top: 120px;
        }
      `}</style>
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Table of Contents - Mobile */}
        <div className="lg:hidden mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {sections.slice(0, 6).map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {section.icon}
                  <span className="truncate">{section.title}</span>
                </a>
              ))}
            </div>
            {sections.length > 6 && (
              <div className="mt-3 pt-3 border-t border-gray-200 text-center">
                <span className="text-xs text-gray-500">
                  +{sections.length - 6} more sections below
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="mb-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full">
                <span>{grammarInfo.category.icon}</span>
                <span>{grammarInfo.category.title}</span>
              </span>
              <span className="text-gray-300">/</span>
              <span className="text-blue-600 font-medium">{grammarInfo.item.title}</span>
            </div>

            {/* Title and Description */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                {formatTitle(grammarKey)}
              </h1>

              {grammarInfo.item.description && (
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {grammarInfo.item.description}
                </p>
              )}
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {getProperty(grammarData, "created") && (
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Created: {formatDate(getProperty(grammarData, "created"))}</span>
                </div>
              )}
              {getProperty(grammarData, "updated") && (
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Updated: {formatDate(getProperty(grammarData, "updated"))}</span>
                </div>
              )}
              <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
                <Target className="h-3 w-3" />
                {grammarInfo.category.title}
              </Badge>
            </div>

            {/* Data Overview */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Content Overview
                </h3>
                <div className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  {
                    [
                      "theory", "forms", "usage", "examples", "commonMistakes", 
                      "spellingRules", "pronunciationGuide", "learningTips"
                    ].filter((key) => getProperty(grammarData, key)).length
                  } / 8 core sections
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { key: "theory", label: "� Theory", color: "bg-blue-100 text-blue-800" },
                  { key: "forms", label: "� Forms", color: "bg-green-100 text-green-800" },
                  { key: "usage", label: "🎯 Usage", color: "bg-purple-100 text-purple-800" },
                  { key: "examples", label: "💡 Examples", color: "bg-yellow-100 text-yellow-800" },
                  { key: "commonMistakes", label: "❌ Common Mistakes", color: "bg-red-100 text-red-800" },
                  { key: "spellingRules", label: "✏️ Spelling", color: "bg-orange-100 text-orange-800" },
                  { key: "pronunciationGuide", label: "�️ Pronunciation", color: "bg-pink-100 text-pink-800" },
                  { key: "learningTips", label: "� Learning Tips", color: "bg-cyan-100 text-cyan-800" },
                ].map(({ key, label, color }) => (
                  <div
                    key={key}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      getProperty(grammarData, key)
                        ? color + " border border-current border-opacity-20"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <span className="mr-1">{getProperty(grammarData, key) ? "✅" : "⚪"}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Definition */}
            {(getProperty(grammarData, "definition") ||
              getProperty(grammarData, "modalVerbsDefinition") ||
              getProperty(grammarData, "articlesDefinition") ||
              getProperty(grammarData, "causativeFormDefinition") ||
              getProperty(grammarData, "infinitivesDefinition") ||
              getProperty(grammarData, "passiveVoiceDefinition") ||
              getProperty(grammarData, "inversionDefinition") ||
              getProperty(
                grammarData,
                "tenseShiftInReportedSpeechDefinition"
              ) ||
              getProperty(grammarData, "subjectVerbAgreementDefinition") ||
              getProperty(grammarData, "possessivesDefinition") ||
              getProperty(grammarData, "conjunctionDefinition") ||
              getProperty(grammarData, "comparisonsDefinition") ||
              getProperty(grammarData, "futureInThePastDefinition") ||
              getProperty(grammarData, "equalityComparisonDefinition") ||
              getProperty(grammarData, "quantifiersDefinition") ||
              getProperty(grammarData, "prepositionDefinition") ||
              getProperty(grammarData, "repeatedComparativeDefinition") ||
              getProperty(grammarData, "reflexivePronounsDefinition") ||
              getProperty(grammarData, "reportedQuestionsDefinition") ||
              getProperty(grammarData, "extendedDefinition") ||
              getProperty(grammarData, "academicDefinition")) && (
              <section id="definition" className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Definition</h2>
                </div>
                <div className="space-y-6">
                  {/* Get the definition data */}
                  {(() => {
                    const definition =
                      getProperty(grammarData, "definition") ||
                      getProperty(grammarData, "modalVerbsDefinition") ||
                      getProperty(grammarData, "articlesDefinition") ||
                      getProperty(grammarData, "causativeFormDefinition") ||
                      getProperty(grammarData, "infinitivesDefinition") ||
                      getProperty(grammarData, "passiveVoiceDefinition") ||
                      getProperty(grammarData, "inversionDefinition") ||
                      getProperty(
                        grammarData,
                        "tenseShiftInReportedSpeechDefinition"
                      ) ||
                      getProperty(
                        grammarData,
                        "subjectVerbAgreementDefinition"
                      ) ||
                      getProperty(grammarData, "possessivesDefinition") ||
                      getProperty(grammarData, "conjunctionDefinition") ||
                      getProperty(grammarData, "comparisonsDefinition") ||
                      getProperty(grammarData, "futureInThePastDefinition") ||
                      getProperty(
                        grammarData,
                        "equalityComparisonDefinition"
                      ) ||
                      getProperty(grammarData, "quantifiersDefinition") ||
                      getProperty(grammarData, "prepositionDefinition") ||
                      getProperty(
                        grammarData,
                        "repeatedComparativeDefinition"
                      ) ||
                      getProperty(grammarData, "reflexivePronounsDefinition") ||
                      getProperty(grammarData, "reportedQuestionsDefinition") ||
                      getProperty(grammarData, "extendedDefinition") ||
                      getProperty(grammarData, "academicDefinition");

                    console.log("Definition data:", definition);

                    if (!definition) return null;

                    /* Check if definition is a string or object */
                    if (typeof definition === "string") {
                      return (
                        <p className="text-gray-700 leading-relaxed">
                          {definition}
                        </p>
                      );
                    }

                    return (
                      <>
                        {/* Handle concept-based definition structure */}
                        {getProperty(definition, "concept") && (
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-blue-400 shadow-sm">
                            <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                              Concept
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {getProperty(definition, "concept")}
                            </p>
                          </div>
                        )}

                        {getProperty(definition, "importance") && (
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-emerald-400 shadow-sm">
                            <h3 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                              Importance
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {getProperty(definition, "importance")}
                            </p>
                          </div>
                        )}

                        {getProperty(definition, "corePrinciple") && (
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-purple-400 shadow-sm">
                            <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              Core Principle
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {getProperty(definition, "corePrinciple")}
                            </p>
                          </div>
                        )}

                        {getProperty(definition, "scope") && (
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-orange-400 shadow-sm">
                            <h3 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                              Scope
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {getProperty(definition, "scope")}
                            </p>
                          </div>
                        )}

                        {getProperty(definition, "linguisticBackground") && (
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-indigo-400 shadow-sm">
                            <h3 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                              Linguistic Background
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {getProperty(definition, "linguisticBackground")}
                            </p>
                          </div>
                        )}

                        {/* Handle standardized definition structure */}
                        {getProperty(definition, "simple") && (
                          <>
                            {/* Simple Definition */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-blue-400 shadow-sm">
                              <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                Simple Definition
                              </h3>
                              <p className="text-gray-700 leading-relaxed">
                                {getProperty(definition, "simple")}
                              </p>
                            </div>

                            {/* Extended Definition */}
                            {getProperty(definition, "extended") && (
                              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-emerald-400 shadow-sm">
                                <h3 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                  Extended Definition
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                  {getProperty(definition, "extended")}
                                </p>
                              </div>
                            )}

                            {/* Academic Definition */}
                            {getProperty(definition, "academic") && (
                              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-purple-400 shadow-sm">
                                <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                  Academic Definition
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                  {getProperty(definition, "academic")}
                                </p>
                              </div>
                            )}

                            {/* Linguistic Definition */}
                            {getProperty(definition, "linguistic") && (
                              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-orange-400 shadow-sm">
                                <h3 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                  Linguistic Definition
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                  {getProperty(definition, "linguistic")}
                                </p>
                              </div>
                            )}

                            {/* Comprehensive Definition */}
                            {getProperty(definition, "comprehensive") && (
                              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-red-400 shadow-sm">
                                <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                  Comprehensive Definition
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                  {getProperty(definition, "comprehensive")}
                                </p>
                              </div>
                            )}
                          </>
                        )}

                        {/* Handle custom definition structure (core_concept, grammatical_status, etc.) */}
                        {getProperty(definition, "core_concept") && (
                          <>
                            {/* Core Concept */}
                            <div className="p-4 bg-white rounded-lg border-l-4 border-blue-400">
                              <h3 className="font-semibold text-gray-800 mb-2">
                                Core Concept
                              </h3>
                              <p className="text-gray-700">
                                {getProperty(definition, "core_concept")}
                              </p>
                            </div>

                            {/* Grammatical Status */}
                            {getProperty(definition, "grammatical_status") && (
                              <div className="p-4 bg-white rounded-lg border-l-4 border-green-400">
                                <h3 className="font-semibold text-gray-800 mb-2">
                                  Grammatical Status
                                </h3>
                                <p className="text-gray-700">
                                  {getProperty(
                                    definition,
                                    "grammatical_status"
                                  )}
                                </p>
                              </div>
                            )}

                            {/* Linguistic Significance */}
                            {getProperty(
                              definition,
                              "linguistic_significance"
                            ) && (
                              <div className="p-4 bg-white rounded-lg border-l-4 border-purple-400">
                                <h3 className="font-semibold text-gray-800 mb-2">
                                  Linguistic Significance
                                </h3>
                                <p className="text-gray-700">
                                  {getProperty(
                                    definition,
                                    "linguistic_significance"
                                  )}
                                </p>
                              </div>
                            )}

                            {/* Detailed Explanation */}
                            {getProperty(
                              definition,
                              "detailed_explanation"
                            ) && (
                              <div className="p-4 bg-white rounded-lg border-l-4 border-orange-400">
                                <h3 className="font-semibold text-gray-800 mb-2">
                                  Detailed Explanation
                                </h3>
                                <p className="text-gray-700">
                                  {getProperty(
                                    definition,
                                    "detailed_explanation"
                                  )}
                                </p>
                              </div>
                            )}

                            {/* Formation Patterns */}
                            {getProperty(definition, "formation_patterns") &&
                              Array.isArray(
                                getProperty(definition, "formation_patterns")
                              ) && (
                                <div className="p-4 bg-white rounded-lg border-l-4 border-indigo-400">
                                  <h3 className="font-semibold text-gray-800 mb-2">
                                    Formation Patterns
                                  </h3>
                                  <ul className="text-gray-700 space-y-1">
                                    {(
                                      getProperty(
                                        definition,
                                        "formation_patterns"
                                      ) as string[]
                                    ).map((pattern, index) => (
                                      <li
                                        key={index}
                                        className="flex items-start gap-2"
                                      >
                                        <span className="text-indigo-600 font-bold">
                                          •
                                        </span>
                                        <span>{pattern}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                            {/* Usage Contexts */}
                            {getProperty(definition, "usage_contexts") &&
                              Array.isArray(
                                getProperty(definition, "usage_contexts")
                              ) && (
                                <div className="p-4 bg-white rounded-lg border-l-4 border-teal-400">
                                  <h3 className="font-semibold text-gray-800 mb-2">
                                    Usage Contexts
                                  </h3>
                                  <ul className="text-gray-700 space-y-1">
                                    {(
                                      getProperty(
                                        definition,
                                        "usage_contexts"
                                      ) as string[]
                                    ).map((context, index) => (
                                      <li
                                        key={index}
                                        className="flex items-start gap-2"
                                      >
                                        <span className="text-teal-600 font-bold">
                                          •
                                        </span>
                                        <span>{context}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                          </>
                        )}
                      </>
                    );
                  })()}
                </div>
              </section>
            )}

            {/* CEFR Levels */}
            {getProperty(grammarData, "cefrLevels") && (
              <section id="levels" className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">CEFR Levels</h2>
                </div>
                <div className="grid gap-6">
                  {Object.entries(
                    getProperty(grammarData, "cefrLevels") as Record<
                      string,
                      any
                    >
                  ).map(([level, data]) => (
                    <div
                      key={level}
                      className="bg-white/80 backdrop-blur-sm rounded-xl border border-emerald-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{level}</span>
                        </div>
                        <h3 className="font-semibold text-gray-800 text-lg">Level {level}</h3>
                      </div>
                      {typeof data === "object" && data !== null ? (
                        <div className="space-y-2">
                          {getProperty(data, "definition") && (
                            <p className="text-gray-700">
                              {getProperty(data, "definition")}
                            </p>
                          )}
                          {getProperty(data, "learningObjectives") &&
                            Array.isArray(
                              getProperty(data, "learningObjectives")
                            ) && (
                              <div>
                                <h4 className="font-medium text-gray-800 mb-1">
                                  Learning Objectives:
                                </h4>
                                <ul className="text-gray-700 space-y-1 ml-4">
                                  {(
                                    getProperty(
                                      data,
                                      "learningObjectives"
                                    ) as string[]
                                  ).map((objective, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start gap-2"
                                    >
                                      <span className="text-green-600 font-bold">
                                        •
                                      </span>
                                      <span>{objective}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          {getProperty(data, "keyConcepts") &&
                            typeof getProperty(data, "keyConcepts") ===
                              "object" && (
                              <div>
                                <h4 className="font-medium text-gray-800 mb-1">
                                  Key Concepts:
                                </h4>
                                <div className="grid gap-2 ml-4">
                                  {Object.entries(
                                    getProperty(data, "keyConcepts") as Record<
                                      string,
                                      any
                                    >
                                  ).map(([conceptKey, conceptData]) => (
                                    <div
                                      key={conceptKey}
                                      className="bg-gray-50 rounded p-2"
                                    >
                                      <h5 className="font-medium text-gray-700 capitalize mb-1">
                                        {conceptKey
                                          .replace(/([A-Z])/g, " $1")
                                          .toLowerCase()}
                                      </h5>
                                      {getProperty(conceptData, "concept") && (
                                        <p className="text-sm text-gray-600 mb-1">
                                          {getProperty(conceptData, "concept")}
                                        </p>
                                      )}
                                      {getProperty(conceptData, "patterns") &&
                                        Array.isArray(
                                          getProperty(conceptData, "patterns")
                                        ) && (
                                          <div className="text-sm">
                                            <span className="font-medium text-gray-600">
                                              Patterns:{" "}
                                            </span>
                                            <span className="text-gray-600">
                                              {(
                                                getProperty(
                                                  conceptData,
                                                  "patterns"
                                                ) as string[]
                                              ).join(", ")}
                                            </span>
                                          </div>
                                        )}
                                      {getProperty(conceptData, "examples") &&
                                        Array.isArray(
                                          getProperty(conceptData, "examples")
                                        ) && (
                                          <div className="text-sm">
                                            <span className="font-medium text-gray-600">
                                              Examples:{" "}
                                            </span>
                                            <span className="text-gray-600">
                                              {(
                                                getProperty(
                                                  conceptData,
                                                  "examples"
                                                ) as string[]
                                              )
                                                .slice(0, 3)
                                                .join(", ")}
                                            </span>
                                            {(
                                              getProperty(
                                                conceptData,
                                                "examples"
                                              ) as string[]
                                            ).length > 3 && (
                                              <span className="text-gray-500">
                                                ...
                                              </span>
                                            )}
                                          </div>
                                        )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                        </div>
                      ) : (
                        <p className="text-gray-700">{String(data)}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Vocabulary */}
            {(getProperty(grammarData, "abstract_nouns_vocab") ||
              getProperty(grammarData, "vocabulary") ||
              getProperty(grammarData, "vocab")) && (
              <section id="vocabulary" className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8 border border-purple-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Vocabulary</h2>
                </div>
                <div className="grid gap-6">
                  {(() => {
                    const vocabData =
                      getProperty(grammarData, "abstract_nouns_vocab") ||
                      getProperty(grammarData, "vocabulary") ||
                      getProperty(grammarData, "vocab");

                    if (Array.isArray(vocabData)) {
                      return (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {vocabData.map((item, index) => (
                            <div
                              key={index}
                              className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-purple-200 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                              {typeof item === "string" ? (
                                <p className="text-gray-700 font-medium">
                                  {item}
                                </p>
                              ) : (
                                <div className="space-y-3">
                                  {getProperty(item, "word") && (
                                    <p className="text-gray-800 font-bold text-lg">
                                      {getProperty(item, "word")}
                                    </p>
                                  )}
                                  {getProperty(item, "definition") && (
                                    <p className="text-gray-600 leading-relaxed">
                                      {getProperty(item, "definition")}
                                    </p>
                                  )}
                                  {getProperty(item, "example") && (
                                    <p className="text-gray-500 text-sm italic bg-gray-50 p-3 rounded-lg">
                                      "{getProperty(item, "example")}"
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      );
                    } else if (
                      typeof vocabData === "object" &&
                      vocabData !== null
                    ) {
                      return (
                        <div className="space-y-6">
                          {Object.entries(vocabData).map(
                            ([category, items]) => (
                              <div
                                key={category}
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200 shadow-sm"
                              >
                                <h3 className="font-semibold text-purple-800 mb-4 text-lg capitalize flex items-center gap-2">
                                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                  {category.replace(/([A-Z])/g, " $1").toLowerCase()}
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                                  {Array.isArray(items) ? (
                                    items.map((item, index) => (
                                      <span
                                        key={index}
                                        className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm"
                                      >
                                        {typeof item === "string"
                                          ? item
                                          : getProperty(item, "word") ||
                                            renderUniversalData(item)}
                                      </span>
                                    ))
                                  ) : (
                                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                                      {renderUniversalData(items)}
                                    </span>
                                  )}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      );
                    }

                    return (
                      <div className="text-gray-700">
                        {renderUniversalData(vocabData)}
                      </div>
                    );
                  })()}
                </div>
              </section>
            )}

            {/* Examples from Definition */}
            {getProperty(grammarData, "definition") &&
              getProperty(
                getProperty(grammarData, "definition"),
                "examples"
              ) && (
                <section id="examples" className="bg-yellow-50 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="h-6 w-6" />
                    Examples
                  </h2>
                  <div className="grid gap-4">
                    {Array.isArray(
                      getProperty(
                        getProperty(grammarData, "definition"),
                        "examples"
                      )
                    ) ? (
                      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {(
                          getProperty(
                            getProperty(grammarData, "definition"),
                            "examples"
                          ) as string[]
                        )
                          .slice(0, 50) // Show first 50 examples
                          .map((example, index) => (
                            <div
                              key={index}
                              className="bg-white p-2 rounded-lg border-l-4 border-yellow-400"
                            >
                              <p className="text-gray-700 font-medium text-sm">
                                {example}
                              </p>
                            </div>
                          ))}
                        {(
                          getProperty(
                            getProperty(grammarData, "definition"),
                            "examples"
                          ) as string[]
                        ).length > 50 && (
                          <div className="bg-gray-100 p-2 rounded-lg border-l-4 border-gray-400 flex items-center justify-center">
                            <p className="text-gray-500 text-sm">
                              +
                              {(
                                getProperty(
                                  getProperty(grammarData, "definition"),
                                  "examples"
                                ) as string[]
                              ).length - 50}{" "}
                              more examples
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                        <div className="text-gray-700">
                          {renderUniversalData(
                            getProperty(
                              getProperty(grammarData, "definition"),
                              "examples"
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}

            {/* A1, A2, B1, B2, C1, C2 Levels Individual Display */}
            {["A1", "A2", "B1", "B2", "C1", "C2"].map(
              (level) =>
                getProperty(grammarData, level) && (
                  <section
                    key={level}
                    id={`level-${level.toLowerCase()}`}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <GraduationCap className="h-6 w-6" />
                      {level} Level (
                      {level === "A1"
                        ? "Beginner"
                        : level === "A2"
                        ? "Elementary"
                        : level === "B1"
                        ? "Intermediate"
                        : level === "B2"
                        ? "Upper Intermediate"
                        : level === "C1"
                        ? "Advanced"
                        : "Proficiency"}
                      )
                    </h2>
                    <div className="space-y-4">
                      {(() => {
                        const levelData = getProperty(grammarData, level);
                        if (!levelData) return null;

                        return (
                          <>
                            {getProperty(levelData, "definition") && (
                              <div className="p-4 bg-white rounded-lg border-l-4 border-green-400">
                                <h3 className="font-semibold text-gray-800 mb-2">
                                  Definition
                                </h3>
                                <p className="text-gray-700">
                                  {getProperty(levelData, "definition")}
                                </p>
                              </div>
                            )}

                            {getProperty(levelData, "learningObjectives") &&
                              Array.isArray(
                                getProperty(levelData, "learningObjectives")
                              ) && (
                                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-400">
                                  <h3 className="font-semibold text-gray-800 mb-2">
                                    Learning Objectives
                                  </h3>
                                  <ul className="space-y-2">
                                    {(
                                      getProperty(
                                        levelData,
                                        "learningObjectives"
                                      ) as string[]
                                    ).map((objective, index) => (
                                      <li
                                        key={index}
                                        className="flex items-start gap-2"
                                      >
                                        <span className="text-blue-600 font-bold">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          {objective}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                            {getProperty(levelData, "keyConcepts") &&
                              typeof getProperty(levelData, "keyConcepts") ===
                                "object" && (
                                <div className="p-4 bg-white rounded-lg border-l-4 border-purple-400">
                                  <h3 className="font-semibold text-gray-800 mb-2">
                                    Key Concepts
                                  </h3>
                                  <div className="space-y-3">
                                    {Object.entries(
                                      getProperty(
                                        levelData,
                                        "keyConcepts"
                                      ) as Record<string, any>
                                    ).map(([conceptKey, conceptData]) => (
                                      <div
                                        key={conceptKey}
                                        className="bg-gray-50 rounded p-3"
                                      >
                                        <h4 className="font-medium text-gray-700 capitalize mb-2">
                                          {conceptKey
                                            .replace(/([A-Z])/g, " $1")
                                            .toLowerCase()}
                                        </h4>
                                        {getProperty(
                                          conceptData,
                                          "concept"
                                        ) && (
                                          <p className="text-gray-600 mb-2">
                                            {getProperty(
                                              conceptData,
                                              "concept"
                                            )}
                                          </p>
                                        )}
                                        {getProperty(conceptData, "patterns") &&
                                          Array.isArray(
                                            getProperty(conceptData, "patterns")
                                          ) && (
                                            <div className="mb-2">
                                              <span className="font-medium text-gray-600">
                                                Patterns:{" "}
                                              </span>
                                              <ul className="mt-1 space-y-1">
                                                {(
                                                  getProperty(
                                                    conceptData,
                                                    "patterns"
                                                  ) as string[]
                                                ).map((pattern, index) => (
                                                  <li
                                                    key={index}
                                                    className="text-sm text-gray-600 ml-4"
                                                  >
                                                    • {pattern}
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}
                                        {getProperty(conceptData, "examples") &&
                                          Array.isArray(
                                            getProperty(conceptData, "examples")
                                          ) && (
                                            <div className="mb-2">
                                              <span className="font-medium text-gray-600">
                                                Examples:{" "}
                                              </span>
                                              <ul className="mt-1 space-y-1">
                                                {(
                                                  getProperty(
                                                    conceptData,
                                                    "examples"
                                                  ) as string[]
                                                ).map((example, index) => (
                                                  <li
                                                    key={index}
                                                    className="text-sm text-gray-600 ml-4 italic"
                                                  >
                                                    • {example}
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}
                                        {getProperty(
                                          conceptData,
                                          "usageNotes"
                                        ) &&
                                          Array.isArray(
                                            getProperty(
                                              conceptData,
                                              "usageNotes"
                                            )
                                          ) && (
                                            <div>
                                              <span className="font-medium text-gray-600">
                                                Usage Notes:{" "}
                                              </span>
                                              <ul className="mt-1 space-y-1">
                                                {(
                                                  getProperty(
                                                    conceptData,
                                                    "usageNotes"
                                                  ) as string[]
                                                ).map((note, index) => (
                                                  <li
                                                    key={index}
                                                    className="text-sm text-gray-600 ml-4"
                                                  >
                                                    • {note}
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                            {getProperty(levelData, "practiceExercises") &&
                              Array.isArray(
                                getProperty(levelData, "practiceExercises")
                              ) && (
                                <div className="p-4 bg-white rounded-lg border-l-4 border-orange-400">
                                  <h3 className="font-semibold text-gray-800 mb-2">
                                    Practice Exercises
                                  </h3>
                                  <div className="grid gap-3">
                                    {(
                                      getProperty(
                                        levelData,
                                        "practiceExercises"
                                      ) as any[]
                                    ).map((exercise, index) => (
                                      <div
                                        key={index}
                                        className="bg-orange-50 rounded p-3"
                                      >
                                        {getProperty(exercise, "type") && (
                                          <h4 className="font-medium text-orange-800 mb-1">
                                            {getProperty(exercise, "type")}
                                          </h4>
                                        )}
                                        {getProperty(
                                          exercise,
                                          "instructions"
                                        ) && (
                                          <p className="text-gray-700 text-sm mb-2">
                                            {getProperty(
                                              exercise,
                                              "instructions"
                                            )}
                                          </p>
                                        )}
                                        {getProperty(exercise, "examples") &&
                                          Array.isArray(
                                            getProperty(exercise, "examples")
                                          ) && (
                                            <ul className="space-y-1">
                                              {(
                                                getProperty(
                                                  exercise,
                                                  "examples"
                                                ) as string[]
                                              ).map((example, idx) => (
                                                <li
                                                  key={idx}
                                                  className="text-sm text-gray-600"
                                                >
                                                  • {example}
                                                </li>
                                              ))}
                                            </ul>
                                          )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                          </>
                        );
                      })()}
                    </div>
                  </section>
                )
            )}

            {/* Theory Section */}
            {getProperty(grammarData, "theory") && (
              <section
                id="theory"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  Theory & Overview
                </h2>

                {/* General Theory */}
                {getProperty(
                  getProperty(grammarData, "theory"),
                  "generalTheory"
                ) && (
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">
                      General Theory
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {getProperty(
                        getProperty(grammarData, "theory"),
                        "generalTheory"
                      )}
                    </p>
                  </div>
                )}

                {/* Usage Overview */}
                {getProperty(
                  getProperty(grammarData, "theory"),
                  "usageOverview"
                ) && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Usage Overview
                    </h3>
                    <div className="grid gap-2">
                      {(
                        getProperty(
                          getProperty(grammarData, "theory"),
                          "usageOverview"
                        ) as string[]
                      ).map((usage: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <p className="text-gray-700">{usage}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Structure */}
                {getProperty(
                  getProperty(grammarData, "theory"),
                  "structure"
                ) && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Structure
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {Object.entries(
                        getProperty(
                          getProperty(grammarData, "theory"),
                          "structure"
                        ) || {}
                      ).map(([type, details]: [string, any]) => (
                        <div
                          key={type}
                          className="p-4 border border-gray-200 rounded-lg"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2 capitalize">
                            {type}
                          </h4>
                          {details.form && (
                            <div className="font-mono text-sm bg-gray-100 p-2 rounded mb-2">
                              {details.form}
                            </div>
                          )}
                          {details.description && (
                            <p className="text-sm text-gray-600 mb-2">
                              {details.description}
                            </p>
                          )}
                          {details.examples && (
                            <div className="text-sm">
                              <div className="font-medium text-gray-700 mb-1">
                                Examples:
                              </div>
                              {details.examples.map(
                                (example: string, idx: number) => (
                                  <div
                                    key={idx}
                                    className="text-gray-600 italic"
                                  >
                                    • {example}
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Formation/Structure */}
            {getProperty(grammarData, "formation") && (
              <section
                id="formation"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Formation
                </h2>
                <div className="space-y-4">
                  {Array.isArray(getProperty(grammarData, "formation")) ? (
                    (getProperty(grammarData, "formation") as any[]).map(
                      (item: any, index: number) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          {typeof item === "object" ? (
                            <div>
                              {item.type && (
                                <div className="font-semibold text-blue-700 mb-2">
                                  {item.type}
                                </div>
                              )}
                              {item.structure && (
                                <div className="font-mono text-sm bg-white p-2 rounded border">
                                  {item.structure}
                                </div>
                              )}
                              {item.example && (
                                <div className="text-gray-600 mt-2 italic">
                                  Example: {item.example}
                                </div>
                              )}
                              {/* Handle any other properties as universal data */}
                              {Object.entries(item)
                                .filter(
                                  ([key]) =>
                                    !["type", "structure", "example"].includes(
                                      key
                                    )
                                )
                                .map(([key, value]) => (
                                  <div key={key} className="mt-2">
                                    <span className="font-medium text-gray-700 capitalize">
                                      {key.replace(/([A-Z])/g, " $1")}:
                                    </span>
                                    <div className="ml-4">
                                      {renderUniversalData(value)}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          ) : (
                            <div>{renderUniversalData(item)}</div>
                          )}
                        </div>
                      )
                    )
                  ) : (
                    <p className="text-gray-700">
                      {getProperty(grammarData, "formation")}
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* Forms (Affirmative, Negative, Question) */}
            {getProperty(grammarData, "forms") && (
              <section
                id="forms"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Forms</h2>
                <div className="grid md:grid-cols-1 gap-4">
                  {Object.entries(getProperty(grammarData, "forms") || {}).map(
                    ([formType, formText]: [string, any]) => (
                      <div
                        key={formType}
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <h3 className="font-semibold text-blue-700 mb-2 capitalize">
                          {formType.replace(/([A-Z])/g, " $1")}
                        </h3>
                        <div className="font-mono text-sm bg-gray-100 p-3 rounded">
                          {formText}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

            {/* Spelling Rules */}
            {getProperty(grammarData, "spellingRules") && (
              <section
                id="spelling-rules"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Spelling Rules
                </h2>
                <div className="grid gap-4">
                  {Object.entries(
                    getProperty(grammarData, "spellingRules") || {}
                  ).map(([ruleName, ruleData]: [string, any]) => (
                    <div
                      key={ruleName}
                      className="p-4 border border-gray-200 rounded-lg"
                    >
                      <h3 className="font-semibold text-purple-700 mb-2">
                        {ruleName
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </h3>
                      {ruleData.rule && (
                        <p className="text-gray-700 mb-2">{ruleData.rule}</p>
                      )}
                      {ruleData.examples && (
                        <div className="mb-2">
                          <span className="font-medium text-gray-700">
                            Examples:{" "}
                          </span>
                          <span className="text-gray-600">
                            {ruleData.examples.join(", ")}
                          </span>
                        </div>
                      )}
                      {ruleData.exception && (
                        <div className="text-sm text-orange-600 bg-orange-50 p-2 rounded">
                          <span className="font-medium">Exception: </span>
                          {ruleData.exception}
                        </div>
                      )}
                      {ruleData.note && (
                        <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded mt-2">
                          <span className="font-medium">Note: </span>
                          {ruleData.note}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Usage */}
            {getProperty(grammarData, "usage") && (
              <section
                id="usage"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Usage
                </h2>
                <div className="space-y-4">
                  {Array.isArray(getProperty(grammarData, "usage")) ? (
                    (getProperty(grammarData, "usage") as any[]).map(
                      (usage: any, index: number) => (
                        <div
                          key={index}
                          className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400"
                        >
                          {typeof usage === "object" ? (
                            <div>
                              {usage.type && (
                                <div className="font-semibold text-green-700 mb-2">
                                  {usage.type}
                                </div>
                              )}
                              {usage.use && (
                                <div className="font-semibold text-green-700 mb-2">
                                  {usage.use}
                                </div>
                              )}
                              {usage.description && (
                                <div className="text-gray-600 mb-2">
                                  {usage.description}
                                </div>
                              )}
                              {usage.example && (
                                <div className="text-gray-700 italic">
                                  "{usage.example}"
                                </div>
                              )}
                              {usage.explanation && (
                                <div className="text-gray-600 text-sm mt-2">
                                  {usage.explanation}
                                </div>
                              )}
                              {/* Handle any other properties as universal data */}
                              {Object.entries(usage)
                                .filter(
                                  ([key]) =>
                                    ![
                                      "type",
                                      "use",
                                      "description",
                                      "example",
                                      "explanation",
                                    ].includes(key)
                                )
                                .map(([key, value]) => (
                                  <div key={key} className="mt-2">
                                    <span className="font-medium text-gray-700 capitalize">
                                      {key.replace(/([A-Z])/g, " $1")}:
                                    </span>
                                    <div className="ml-4">
                                      {renderUniversalData(value)}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          ) : (
                            <div>{renderUniversalData(usage)}</div>
                          )}
                        </div>
                      )
                    )
                  ) : (
                    <p className="text-gray-700">
                      {getProperty(grammarData, "usage")}
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* Advanced Usage Patterns */}
            {getProperty(grammarData, "advancedUsagePatterns") && (
              <section
                id="advanced-usage"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced Usage Patterns
                </h2>
                <div className="space-y-6">
                  {Object.entries(
                    getProperty(grammarData, "advancedUsagePatterns") || {}
                  ).map(([patternName, patternData]: [string, any]) => (
                    <div
                      key={patternName}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <h3 className="font-semibold text-indigo-700 mb-3">
                        {patternName
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </h3>
                      <div className="grid gap-4">
                        {Object.entries(patternData).map(
                          ([subPattern, details]: [string, any]) => (
                            <div
                              key={subPattern}
                              className="p-3 bg-indigo-50 rounded"
                            >
                              <h4 className="font-medium text-indigo-800 mb-2">
                                {subPattern.replace(/([A-Z])/g, " $1")}
                              </h4>
                              {details.structure && (
                                <div className="font-mono text-sm bg-white p-2 rounded mb-2">
                                  {details.structure}
                                </div>
                              )}
                              {details.usage && (
                                <p className="text-gray-700 mb-2">
                                  {details.usage}
                                </p>
                              )}
                              {details.examples && (
                                <div className="text-sm">
                                  <span className="font-medium">Examples:</span>
                                  <ul className="list-disc list-inside text-gray-600 mt-1">
                                    {details.examples.map(
                                      (example: string, idx: number) => (
                                        <li key={idx}>{example}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Cultural and Contextual Usage */}
            {getProperty(grammarData, "culturalAndContextualUsage") && (
              <section
                id="cultural-usage"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Cultural & Contextual Usage
                </h2>

                {getProperty(
                  getProperty(grammarData, "culturalAndContextualUsage"),
                  "crossCulturalDifferences"
                ) && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Cross-Cultural Differences
                    </h3>
                    <div className="space-y-2">
                      {(
                        getProperty(
                          getProperty(
                            grammarData,
                            "culturalAndContextualUsage"
                          ),
                          "crossCulturalDifferences"
                        ) as string[]
                      ).map((difference: string, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-400"
                        >
                          <p className="text-gray-700">{difference}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {getProperty(
                  getProperty(grammarData, "culturalAndContextualUsage"),
                  "registerVariations"
                ) && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Register Variations
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {Object.entries(
                        getProperty(
                          getProperty(
                            grammarData,
                            "culturalAndContextualUsage"
                          ),
                          "registerVariations"
                        ) || {}
                      ).map(([register, examples]: [string, any]) => (
                        <div
                          key={register}
                          className="p-4 border border-gray-200 rounded-lg"
                        >
                          <h4 className="font-semibold text-blue-700 mb-2 capitalize">
                            {register}
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {examples.map((example: string, idx: number) => (
                              <li key={idx} className="italic">
                                "{example}"
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Examples */}
            {getProperty(grammarData, "examples") &&
              Array.isArray(getProperty(grammarData, "examples")) && (
                <section
                  id="examples"
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Lightbulb className="h-6 w-6" />
                    Examples
                  </h2>
                  <div className="grid gap-4">
                    {(getProperty(grammarData, "examples") as any[]).map(
                      (example: any, index: number) => (
                        <div
                          key={index}
                          className="p-4 bg-yellow-50 rounded-lg border border-yellow-200"
                        >
                          {typeof example === "object" ? (
                            <div>
                              {example.sentence && (
                                <div className="font-medium text-gray-900 mb-2">
                                  "{example.sentence}"
                                </div>
                              )}
                              {example.explanation && (
                                <div className="text-sm text-gray-600">
                                  {example.explanation}
                                </div>
                              )}
                              {example.type && (
                                <Badge variant="outline" className="mt-2">
                                  {example.type}
                                </Badge>
                              )}
                            </div>
                          ) : (
                            <div className="font-medium text-gray-900">
                              "{example}"
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}

            {/* Extended Examples */}
            {getProperty(grammarData, "extendedExamples") && (
              <section
                id="extended-examples"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Extended Examples
                </h2>
                <div className="space-y-6">
                  {Object.entries(
                    getProperty(grammarData, "extendedExamples") || {}
                  ).map(([context, examples]: [string, any]) => (
                    <div
                      key={context}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <h3 className="font-semibold text-green-700 mb-3">
                        {context
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </h3>
                      <div className="grid gap-2">
                        {examples.map((example: string, index: number) => (
                          <div
                            key={index}
                            className="p-3 bg-green-50 rounded border-l-4 border-green-300"
                          >
                            <p className="text-gray-700 italic">"{example}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Common Mistakes */}
            {getProperty(grammarData, "commonMistakes") && (
              <section
                id="common-mistakes"
                className="bg-red-50 rounded-lg border border-red-200 p-6"
              >
                <h2 className="text-2xl font-bold text-red-800 mb-4">
                  Common Mistakes
                </h2>
                <div className="space-y-4">
                  {Array.isArray(getProperty(grammarData, "commonMistakes")) ? (
                    (getProperty(grammarData, "commonMistakes") as any[]).map(
                      (mistake: any, index: number) => (
                        <div
                          key={index}
                          className="p-4 bg-white rounded-lg border border-red-200"
                        >
                          {typeof mistake === "object" ? (
                            <div>
                              {mistake.mistake && (
                                <div className="font-semibold text-red-700 mb-2">
                                  {mistake.mistake}
                                </div>
                              )}
                              {mistake.wrong && (
                                <div className="text-red-600 mb-2">
                                  <span className="font-semibold">
                                    ❌ Wrong:{" "}
                                  </span>
                                  "{mistake.wrong}"
                                </div>
                              )}
                              {mistake.incorrect && (
                                <div className="text-red-600 mb-2">
                                  <span className="font-semibold">
                                    ❌ Incorrect:{" "}
                                  </span>
                                  "{mistake.incorrect}"
                                </div>
                              )}
                              {mistake.correct && (
                                <div className="text-green-600 mb-2">
                                  <span className="font-semibold">
                                    ✅ Correct:{" "}
                                  </span>
                                  "{mistake.correct}"
                                </div>
                              )}
                              {mistake.explanation && (
                                <div className="text-gray-600 text-sm">
                                  {mistake.explanation}
                                </div>
                              )}
                              {mistake.level && (
                                <Badge variant="outline" className="mt-2">
                                  {mistake.level}
                                </Badge>
                              )}
                              {mistake.frequency && (
                                <Badge variant="outline" className="mt-2 ml-2">
                                  {mistake.frequency}
                                </Badge>
                              )}
                            </div>
                          ) : (
                            <p className="text-gray-700">{mistake}</p>
                          )}
                        </div>
                      )
                    )
                  ) : (
                    <p className="text-gray-700">
                      {getProperty(grammarData, "commonMistakes")}
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* Pronunciation Guide */}
            {getProperty(grammarData, "pronunciationGuide") && (
              <section
                id="pronunciation"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Pronunciation Guide
                </h2>
                <div className="space-y-4">
                  {Object.entries(
                    getProperty(grammarData, "pronunciationGuide") || {}
                  ).map(([section, data]: [string, any]) => (
                    <div key={section}>
                      {section === "commonPronunciationMistakes" ? (
                        <div>
                          <h3 className="font-semibold text-orange-700 mb-3">
                            Common Pronunciation Mistakes
                          </h3>
                          <div className="space-y-2">
                            {data.map((mistake: string, index: number) => (
                              <div
                                key={index}
                                className="p-3 bg-orange-50 rounded border-l-4 border-orange-400"
                              >
                                <p className="text-gray-700">{mistake}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h3 className="font-semibold text-purple-700 mb-3">
                            {section
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </h3>
                          {data.after && (
                            <div className="mb-2">
                              <span className="font-medium">After: </span>
                              <span className="text-gray-600">
                                {data.after.join(", ")}
                              </span>
                            </div>
                          )}
                          {data.examples && (
                            <div>
                              <span className="font-medium">Examples: </span>
                              <span className="text-gray-600">
                                {data.examples.join(", ")}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Points or Rules */}
            {getProperty(grammarData, "keyPoints") && (
              <section
                id="key-points"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Key Points
                </h2>
                <div className="space-y-3">
                  {Array.isArray(getProperty(grammarData, "keyPoints")) ? (
                    (getProperty(grammarData, "keyPoints") as any[]).map(
                      (point: any, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <p className="text-gray-700">{point}</p>
                        </div>
                      )
                    )
                  ) : (
                    <p className="text-gray-700">
                      {getProperty(grammarData, "keyPoints")}
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* Practice Exercise Types */}
            {getProperty(grammarData, "practiceExerciseTypes") && (
              <section
                id="practice-exercises"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Practice Exercise Types
                </h2>
                <div className="grid gap-4">
                  {Object.entries(
                    getProperty(grammarData, "practiceExerciseTypes") || {}
                  ).map(([exerciseType, exerciseData]: [string, any]) => (
                    <div
                      key={exerciseType}
                      className="p-4 border border-gray-200 rounded-lg"
                    >
                      <h3 className="font-semibold text-blue-700 mb-2">
                        {exerciseType
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </h3>
                      {exerciseData.description && (
                        <p className="text-gray-700 mb-2">
                          {exerciseData.description}
                        </p>
                      )}
                      {exerciseData.example && (
                        <div className="text-sm text-gray-600 italic bg-gray-50 p-2 rounded">
                          <span className="font-medium">Example: </span>
                          {exerciseData.example}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Learning Tips */}
            {getProperty(grammarData, "learningTips") && (
              <section
                id="learning-tips"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="h-6 w-6" />
                  Learning Tips
                </h2>
                <div className="grid gap-3">
                  {(getProperty(grammarData, "learningTips") as string[]).map(
                    (tip: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400"
                      >
                        <div className="w-6 h-6 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          💡
                        </div>
                        <p className="text-gray-700">{tip}</p>
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

            {/* Learning Progression */}
            {getProperty(grammarData, "learningProgression") && (
              <section
                id="learning-progression"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Learning Progression
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(
                    getProperty(grammarData, "learningProgression") || {}
                  ).map(([level, skills]: [string, any]) => (
                    <div
                      key={level}
                      className="p-4 border border-gray-200 rounded-lg"
                    >
                      <h3 className="font-semibold text-green-700 mb-3 capitalize">
                        {level}
                      </h3>
                      <ul className="space-y-2">
                        {skills.map((skill: string, index: number) => (
                          <li
                            key={index}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <span className="text-green-600 mt-1">•</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CEFR Level Breakdown */}
            {getProperty(grammarData, "cefrLevelBreakdown") && (
              <section
                id="cefr-levels"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  CEFR Level Breakdown
                </h2>
                <div className="space-y-6">
                  {Object.entries(
                    getProperty(grammarData, "cefrLevelBreakdown") || {}
                  ).map(([level, levelData]: [string, any]) => (
                    <div
                      key={level}
                      className="border border-gray-300 rounded-lg p-4"
                    >
                      <h3 className="font-bold text-indigo-700 mb-4 text-lg">
                        {level}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(levelData).map(
                          ([category, items]: [string, any]) => (
                            <div
                              key={category}
                              className="p-3 bg-indigo-50 rounded"
                            >
                              <h4 className="font-semibold text-indigo-800 mb-2 capitalize">
                                {category.replace(/([A-Z])/g, " $1")}
                              </h4>
                              {Array.isArray(items) ? (
                                <ul className="text-sm text-gray-700 space-y-1">
                                  {items
                                    .slice(0, 5)
                                    .map((item: string, idx: number) => (
                                      <li
                                        key={idx}
                                        className="flex items-start gap-1"
                                      >
                                        <span className="text-indigo-600 mt-1 text-xs">
                                          ▪
                                        </span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  {items.length > 5 && (
                                    <li className="text-xs text-gray-500 italic">
                                      ...and {items.length - 5} more
                                    </li>
                                  )}
                                </ul>
                              ) : (
                                <p className="text-sm text-gray-700">{items}</p>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Comprehensive Error Analysis */}
            {getProperty(grammarData, "comprehensiveErrorAnalysis") && (
              <section
                id="error-analysis"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Comprehensive Error Analysis
                </h2>
                <div className="space-y-6">
                  {Object.entries(
                    getProperty(grammarData, "comprehensiveErrorAnalysis") || {}
                  ).map(([errorLevel, errors]: [string, any]) => (
                    <div
                      key={errorLevel}
                      className="border border-red-200 rounded-lg p-4 bg-red-50"
                    >
                      <h3 className="font-semibold text-red-800 mb-3">
                        {errorLevel
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </h3>
                      <div className="space-y-3">
                        {errors.map((error: any, index: number) => (
                          <div
                            key={index}
                            className="p-3 bg-white rounded border border-red-200"
                          >
                            {error.error && (
                              <div className="font-medium text-red-700 mb-2">
                                {error.error}
                              </div>
                            )}
                            {error.wrong && (
                              <div className="text-red-600 mb-1">
                                <span className="font-semibold">
                                  ❌ Wrong:{" "}
                                </span>
                                "{error.wrong}"
                              </div>
                            )}
                            {error.correct && (
                              <div className="text-green-600 mb-1">
                                <span className="font-semibold">
                                  ✅ Correct:{" "}
                                </span>
                                "{error.correct}"
                              </div>
                            )}
                            {error.explanation && (
                              <p className="text-gray-600 text-sm mt-2">
                                {error.explanation}
                              </p>
                            )}
                            <div className="flex gap-2 mt-2">
                              {error.level && (
                                <Badge variant="outline">{error.level}</Badge>
                              )}
                              {error.frequency && (
                                <Badge variant="outline">
                                  {error.frequency}
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Notes */}
            {getProperty(grammarData, "notes") && (
              <section
                id="notes"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Important Notes
                </h2>
                <div className="space-y-3">
                  {(getProperty(grammarData, "notes") as string[]).map(
                    (note: string, index: number) => (
                      <div
                        key={index}
                        className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400"
                      >
                        <p className="text-gray-700">{note}</p>
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

            {/* Citations */}
            {getProperty(grammarData, "citations") && (
              <section
                id="citations"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  References & Citations
                </h2>
                <div className="grid gap-4">
                  {(getProperty(grammarData, "citations") as any[]).map(
                    (citation: any, index: number) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        <h3 className="font-semibold text-blue-700 mb-2">
                          {citation.title}
                        </h3>
                        {citation.description && (
                          <p className="text-gray-700 mb-2">
                            {citation.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                          {citation.source && (
                            <Badge variant="outline">{citation.source}</Badge>
                          )}
                          {citation.type && (
                            <Badge variant="outline">{citation.type}</Badge>
                          )}
                        </div>
                        {citation.url && (
                          <a
                            href={citation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
                          >
                            Visit Resource →
                          </a>
                        )}
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

            {/* Progressive Difficulty */}
            {getProperty(grammarData, "progressiveDifficulty") && (
              <section
                id="progressive-difficulty"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Progressive Difficulty Exercises
                </h2>
                <div className="space-y-6">
                  {Object.entries(
                    getProperty(grammarData, "progressiveDifficulty") || {}
                  ).map(([level, exercises]: [string, any]) => (
                    <div
                      key={level}
                      className="border border-gray-300 rounded-lg p-4"
                    >
                      <h3 className="font-bold text-purple-700 mb-4 text-lg">
                        {level.replace(/_/g, " ").toUpperCase()}
                      </h3>
                      <div className="grid gap-3">
                        {exercises.map((exercise: string, index: number) => (
                          <div
                            key={index}
                            className="p-3 bg-purple-50 rounded border-l-4 border-purple-400"
                          >
                            <p className="text-gray-700">{exercise}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Pedagogical Sequencing */}
            {getProperty(grammarData, "pedagogicalSequencing") && (
              <section
                id="pedagogical-sequencing"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Pedagogical Sequencing
                </h2>

                {getProperty(
                  getProperty(grammarData, "pedagogicalSequencing"),
                  "teachingOrder"
                ) && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Teaching Order
                    </h3>
                    <div className="space-y-2">
                      {(
                        getProperty(
                          getProperty(grammarData, "pedagogicalSequencing"),
                          "teachingOrder"
                        ) as string[]
                      ).map((step: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400"
                        >
                          <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {getProperty(
                  getProperty(grammarData, "pedagogicalSequencing"),
                  "assessmentCriteria"
                ) && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Assessment Criteria by CEFR Level
                    </h3>
                    <div className="grid gap-4">
                      {Object.entries(
                        getProperty(
                          getProperty(grammarData, "pedagogicalSequencing"),
                          "assessmentCriteria"
                        ) || {}
                      ).map(([level, criteria]: [string, any]) => (
                        <div
                          key={level}
                          className="p-4 border border-gray-200 rounded-lg"
                        >
                          <h4 className="font-semibold text-indigo-700 mb-2">
                            {level}
                          </h4>
                          <ul className="space-y-1">
                            {criteria.map(
                              (criterion: string, index: number) => (
                                <li
                                  key={index}
                                  className="text-sm text-gray-700 flex items-start gap-2"
                                >
                                  <span className="text-indigo-600 mt-1">
                                    •
                                  </span>
                                  <span>{criterion}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Cross-Linguistic Analysis */}
            {getProperty(grammarData, "crossLinguisticAnalysis") && (
              <section
                id="cross-linguistic"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Cross-Linguistic Analysis
                </h2>

                {getProperty(
                  getProperty(grammarData, "crossLinguisticAnalysis"),
                  "commonL1Interferences"
                ) && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Common L1 Interferences
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.entries(
                        getProperty(
                          getProperty(grammarData, "crossLinguisticAnalysis"),
                          "commonL1Interferences"
                        ) || {}
                      ).map(([language, interferences]: [string, any]) => (
                        <div
                          key={language}
                          className="p-4 border border-gray-200 rounded-lg"
                        >
                          <h4 className="font-semibold text-red-700 mb-2">
                            {language} Speakers
                          </h4>
                          <ul className="space-y-1 text-sm">
                            {interferences.map(
                              (interference: string, index: number) => (
                                <li
                                  key={index}
                                  className="text-gray-700 flex items-start gap-1"
                                >
                                  <span className="text-red-600 mt-1 text-xs">
                                    ▸
                                  </span>
                                  <span>{interference}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {getProperty(
                  getProperty(grammarData, "crossLinguisticAnalysis"),
                  "contrastiveAnalysis"
                ) && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Contrastive Analysis
                    </h3>
                    <div className="space-y-2">
                      {(
                        getProperty(
                          getProperty(grammarData, "crossLinguisticAnalysis"),
                          "contrastiveAnalysis"
                        ) as string[]
                      ).map((analysis: string, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-orange-50 rounded border-l-4 border-orange-400"
                        >
                          <p className="text-gray-700">{analysis}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Corpus-Based Usage */}
            {getProperty(grammarData, "corpusBasedUsage") && (
              <section
                id="corpus-usage"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Corpus-Based Usage Data
                </h2>

                {getProperty(
                  getProperty(grammarData, "corpusBasedUsage"),
                  "frequencyData"
                ) && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Frequency Data
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {Object.entries(
                        getProperty(
                          getProperty(grammarData, "corpusBasedUsage"),
                          "frequencyData"
                        ) || {}
                      ).map(([dataType, data]: [string, any]) => (
                        <div
                          key={dataType}
                          className="p-4 border border-gray-200 rounded-lg"
                        >
                          <h4 className="font-semibold text-green-700 mb-2 capitalize">
                            {dataType.replace(/([A-Z])/g, " $1")}
                          </h4>
                          {Array.isArray(data) ? (
                            <ul className="space-y-1 text-sm">
                              {data
                                .slice(0, 5)
                                .map((item: any, index: number) => (
                                  <li key={index} className="text-gray-700">
                                    {renderUniversalData(item)}
                                  </li>
                                ))}
                              {data.length > 5 && (
                                <li className="text-xs text-gray-500 italic">
                                  ...and {data.length - 5} more
                                </li>
                              )}
                            </ul>
                          ) : typeof data === "object" ? (
                            <div className="text-sm space-y-1">
                              {Object.entries(data)
                                .slice(0, 3)
                                .map(([key, value]: [string, any]) => (
                                  <div key={key} className="text-gray-700">
                                    <span className="font-medium">{key}:</span>{" "}
                                    <div className="ml-2">
                                      {renderUniversalData(value)}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          ) : (
                            <div className="text-sm">
                              {renderUniversalData(data)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {getProperty(
                  getProperty(grammarData, "corpusBasedUsage"),
                  "authenticExamples"
                ) && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Authentic Examples from Corpus
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(
                        getProperty(
                          getProperty(grammarData, "corpusBasedUsage"),
                          "authenticExamples"
                        ) || {}
                      ).map(([corpusType, examples]: [string, any]) => (
                        <div
                          key={corpusType}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <h4 className="font-semibold text-blue-700 mb-2 capitalize">
                            {corpusType.replace(/([A-Z])/g, " $1")}
                          </h4>
                          <div className="space-y-2">
                            {examples.map((example: string, index: number) => (
                              <div
                                key={index}
                                className="p-2 bg-blue-50 rounded"
                              >
                                <p className="text-gray-700 italic text-sm">
                                  "{example}"
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Digital Learning Integration */}
            {getProperty(grammarData, "digitalLearningIntegration") && (
              <section
                id="digital-learning"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Digital Learning Integration
                </h2>

                {getProperty(
                  getProperty(grammarData, "digitalLearningIntegration"),
                  "technologySupport"
                ) && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Technology Support
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {(
                        getProperty(
                          getProperty(
                            grammarData,
                            "digitalLearningIntegration"
                          ),
                          "technologySupport"
                        ) as string[]
                      ).map((tech: string, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-cyan-50 rounded border-l-4 border-cyan-400"
                        >
                          <p className="text-gray-700 text-sm">{tech}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {getProperty(
                  getProperty(grammarData, "digitalLearningIntegration"),
                  "onlineResources"
                ) && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Online Resources
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {(
                        getProperty(
                          getProperty(
                            grammarData,
                            "digitalLearningIntegration"
                          ),
                          "onlineResources"
                        ) as string[]
                      ).map((resource: string, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-purple-50 rounded border-l-4 border-purple-400"
                        >
                          <p className="text-gray-700 text-sm">{resource}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Research-Based Insights */}
            {getProperty(grammarData, "researchBasedInsights") && (
              <section
                id="research-insights"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Research-Based Insights
                </h2>

                {getProperty(
                  getProperty(grammarData, "researchBasedInsights"),
                  "acquisitionStudies"
                ) && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Acquisition Studies
                    </h3>
                    <div className="space-y-3">
                      {(
                        getProperty(
                          getProperty(grammarData, "researchBasedInsights"),
                          "acquisitionStudies"
                        ) as string[]
                      ).map((study: string, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-emerald-50 rounded border-l-4 border-emerald-400"
                        >
                          <p className="text-gray-700 text-sm">{study}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {getProperty(
                  getProperty(grammarData, "researchBasedInsights"),
                  "errorAnalysisFindings"
                ) && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Error Analysis Findings
                    </h3>
                    <div className="space-y-3">
                      {(
                        getProperty(
                          getProperty(grammarData, "researchBasedInsights"),
                          "errorAnalysisFindings"
                        ) as string[]
                      ).map((finding: string, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-rose-50 rounded border-l-4 border-rose-400"
                        >
                          <p className="text-gray-700 text-sm">{finding}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {getProperty(
                  getProperty(grammarData, "researchBasedInsights"),
                  "pedagogicalRecommendations"
                ) && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Pedagogical Recommendations
                    </h3>
                    <div className="space-y-3">
                      {(
                        getProperty(
                          getProperty(grammarData, "researchBasedInsights"),
                          "pedagogicalRecommendations"
                        ) as string[]
                      ).map((recommendation: string, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-indigo-50 rounded border-l-4 border-indigo-400"
                        >
                          <p className="text-gray-700 text-sm">
                            {recommendation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Assessment Framework */}
            {getProperty(grammarData, "assessmentFramework") && (
              <section
                id="assessment-framework"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Assessment Framework
                </h2>

                {getProperty(
                  getProperty(grammarData, "assessmentFramework"),
                  "diagnosticTools"
                ) && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Diagnostic Tools
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {(
                        getProperty(
                          getProperty(grammarData, "assessmentFramework"),
                          "diagnosticTools"
                        ) as string[]
                      ).map((tool: string, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-amber-50 rounded border-l-4 border-amber-400"
                        >
                          <p className="text-gray-700 text-sm">{tool}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {getProperty(
                  getProperty(grammarData, "assessmentFramework"),
                  "rubricCriteria"
                ) && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Rubric Criteria
                    </h3>
                    <div className="grid gap-4">
                      {Object.entries(
                        getProperty(
                          getProperty(grammarData, "assessmentFramework"),
                          "rubricCriteria"
                        ) || {}
                      ).map(([criterion, description]: [string, any]) => (
                        <div
                          key={criterion}
                          className="p-4 border border-gray-200 rounded-lg"
                        >
                          <h4 className="font-semibold text-teal-700 mb-2 capitalize">
                            {criterion}
                          </h4>
                          <p className="text-gray-700 text-sm">{description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {getProperty(
                  getProperty(grammarData, "assessmentFramework"),
                  "progressionMarkers"
                ) && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Progression Markers
                    </h3>
                    <div className="space-y-2">
                      {(
                        getProperty(
                          getProperty(grammarData, "assessmentFramework"),
                          "progressionMarkers"
                        ) as string[]
                      ).map((marker: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-teal-50 rounded border-l-4 border-teal-400"
                        >
                          <div className="w-6 h-6 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 text-sm">{marker}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Future Directions */}
            {getProperty(grammarData, "futureDirections") && (
              <section
                id="future-directions"
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Future Directions
                </h2>

                {getProperty(
                  getProperty(grammarData, "futureDirections"),
                  "emergingTrends"
                ) && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Emerging Trends
                    </h3>
                    <div className="space-y-3">
                      {(
                        getProperty(
                          getProperty(grammarData, "futureDirections"),
                          "emergingTrends"
                        ) as string[]
                      ).map((trend: string, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-violet-50 rounded border-l-4 border-violet-400"
                        >
                          <p className="text-gray-700 text-sm">{trend}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {getProperty(
                  getProperty(grammarData, "futureDirections"),
                  "researchNeeds"
                ) && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Research Needs
                    </h3>
                    <div className="space-y-3">
                      {(
                        getProperty(
                          getProperty(grammarData, "futureDirections"),
                          "researchNeeds"
                        ) as string[]
                      ).map((need: string, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-pink-50 rounded border-l-4 border-pink-400"
                        >
                          <p className="text-gray-700 text-sm">{need}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Additional comprehensive sections for complete data display */}

            {/* Rules */}
            {getProperty(grammarData, "rules") && (
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Rules</h2>
                <div className="space-y-3">
                  {Array.isArray(getProperty(grammarData, "rules")) ? (
                    (getProperty(grammarData, "rules") as any[]).map(
                      (rule: any, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-slate-50 rounded border-l-4 border-slate-400"
                        >
                          <div>{renderUniversalData(rule)}</div>
                        </div>
                      )
                    )
                  ) : (
                    <div>
                      {renderUniversalData(getProperty(grammarData, "rules"))}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Patterns */}
            {getProperty(grammarData, "patterns") && (
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Patterns
                </h2>
                <div className="space-y-3">
                  {Array.isArray(getProperty(grammarData, "patterns")) ? (
                    (getProperty(grammarData, "patterns") as any[]).map(
                      (pattern: any, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-gray-50 rounded border border-gray-200"
                        >
                          <div className="font-mono text-sm text-gray-700">
                            {renderUniversalData(pattern)}
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    <div>
                      {renderUniversalData(
                        getProperty(grammarData, "patterns")
                      )}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Concepts */}
            {getProperty(grammarData, "concepts") && (
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Core Concepts
                </h2>
                <div className="space-y-3">
                  {Array.isArray(getProperty(grammarData, "concepts")) ? (
                    (getProperty(grammarData, "concepts") as any[]).map(
                      (concept: any, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-emerald-50 rounded border-l-4 border-emerald-400"
                        >
                          <div>{renderUniversalData(concept)}</div>
                        </div>
                      )
                    )
                  ) : (
                    <div>
                      {renderUniversalData(
                        getProperty(grammarData, "concepts")
                      )}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Functions */}
            {getProperty(grammarData, "functions") && (
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Functions
                </h2>
                <div className="space-y-3">
                  {Array.isArray(getProperty(grammarData, "functions")) ? (
                    (getProperty(grammarData, "functions") as string[]).map(
                      (func: string, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-blue-50 rounded border-l-4 border-blue-400"
                        >
                          <p className="text-gray-700">{func}</p>
                        </div>
                      )
                    )
                  ) : typeof getProperty(grammarData, "functions") ===
                    "object" ? (
                    <div className="grid gap-4">
                      {Object.entries(
                        getProperty(grammarData, "functions") || {}
                      ).map(([funcName, funcData]: [string, any]) => (
                        <div
                          key={funcName}
                          className="p-4 border border-gray-200 rounded-lg"
                        >
                          <h3 className="font-semibold text-blue-700 mb-2">
                            {funcName
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </h3>
                          <div>{renderUniversalData(funcData)}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      {renderUniversalData(
                        getProperty(grammarData, "functions")
                      )}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Mistakes */}
            {(getProperty(grammarData, "mistakes") ||
              getProperty(grammarData, "errors") ||
              getProperty(grammarData, "pitfalls")) && (
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Additional Mistakes & Errors
                </h2>

                {getProperty(grammarData, "mistakes") && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-red-700 mb-3">
                      Common Mistakes
                    </h3>
                    <div className="space-y-3">
                      {Array.isArray(getProperty(grammarData, "mistakes")) ? (
                        (getProperty(grammarData, "mistakes") as any[]).map(
                          (mistake: any, index: number) => (
                            <div
                              key={index}
                              className="p-3 bg-red-50 rounded border border-red-200"
                            >
                              {typeof mistake === "string" ? (
                                <div>{renderUniversalData(mistake)}</div>
                              ) : (
                                <div>
                                  {mistake.error && (
                                    <div className="font-medium text-red-700 mb-1">
                                      {mistake.error}
                                    </div>
                                  )}
                                  {mistake.correction && (
                                    <div className="text-green-600 text-sm">
                                      Correction: {mistake.correction}
                                    </div>
                                  )}
                                  {mistake.explanation && (
                                    <div className="text-gray-600 text-sm mt-1">
                                      {mistake.explanation}
                                    </div>
                                  )}
                                  {/* Handle any other properties */}
                                  {Object.entries(mistake)
                                    .filter(
                                      ([key]) =>
                                        ![
                                          "error",
                                          "correction",
                                          "explanation",
                                        ].includes(key)
                                    )
                                    .map(([key, value]) => (
                                      <div key={key} className="mt-2">
                                        <span className="font-medium text-gray-700 capitalize">
                                          {key.replace(/([A-Z])/g, " $1")}:
                                        </span>
                                        <div className="ml-4">
                                          {renderUniversalData(value)}
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              )}
                            </div>
                          )
                        )
                      ) : (
                        <div>
                          {renderUniversalData(
                            getProperty(grammarData, "mistakes")
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {getProperty(grammarData, "errors") && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-orange-700 mb-3">
                      Errors
                    </h3>
                    <div className="space-y-2">
                      {Array.isArray(getProperty(grammarData, "errors")) ? (
                        (getProperty(grammarData, "errors") as string[]).map(
                          (error: any, index: number) => (
                            <div
                              key={index}
                              className="p-3 bg-orange-50 rounded border-l-4 border-orange-400"
                            >
                              <div>{renderUniversalData(error)}</div>
                            </div>
                          )
                        )
                      ) : (
                        <div>
                          {renderUniversalData(
                            getProperty(grammarData, "errors")
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {getProperty(grammarData, "pitfalls") && (
                  <div>
                    <h3 className="font-semibold text-yellow-700 mb-3">
                      Pitfalls to Avoid
                    </h3>
                    <div className="space-y-2">
                      {Array.isArray(getProperty(grammarData, "pitfalls")) ? (
                        (getProperty(grammarData, "pitfalls") as string[]).map(
                          (pitfall: any, index: number) => (
                            <div
                              key={index}
                              className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-400"
                            >
                              <div>{renderUniversalData(pitfall)}</div>
                            </div>
                          )
                        )
                      ) : (
                        <div>
                          {renderUniversalData(
                            getProperty(grammarData, "pitfalls")
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Tips and Hints */}
            {(getProperty(grammarData, "tips") ||
              getProperty(grammarData, "hints") ||
              getProperty(grammarData, "reminders")) && (
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Tips & Reminders
                </h2>

                {getProperty(grammarData, "tips") && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-green-700 mb-3">Tips</h3>
                    <div className="space-y-2">
                      {Array.isArray(getProperty(grammarData, "tips")) ? (
                        (getProperty(grammarData, "tips") as any[]).map(
                          (tip: any, index: number) => (
                            <div
                              key={index}
                              className="p-3 bg-green-50 rounded border-l-4 border-green-400"
                            >
                              <div>{renderUniversalData(tip)}</div>
                            </div>
                          )
                        )
                      ) : (
                        <div>
                          {renderUniversalData(
                            getProperty(grammarData, "tips")
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {getProperty(grammarData, "hints") && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-blue-700 mb-3">Hints</h3>
                    <div className="space-y-2">
                      {Array.isArray(getProperty(grammarData, "hints")) ? (
                        (getProperty(grammarData, "hints") as any[]).map(
                          (hint: any, index: number) => (
                            <div
                              key={index}
                              className="p-3 bg-blue-50 rounded border-l-4 border-blue-400"
                            >
                              <div>{renderUniversalData(hint)}</div>
                            </div>
                          )
                        )
                      ) : (
                        <div>
                          {renderUniversalData(
                            getProperty(grammarData, "hints")
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {getProperty(grammarData, "reminders") && (
                  <div>
                    <h3 className="font-semibold text-purple-700 mb-3">
                      Reminders
                    </h3>
                    <div className="space-y-2">
                      {Array.isArray(getProperty(grammarData, "reminders")) ? (
                        (getProperty(grammarData, "reminders") as any[]).map(
                          (reminder: any, index: number) => (
                            <div
                              key={index}
                              className="p-3 bg-purple-50 rounded border-l-4 border-purple-400"
                            >
                              <div>{renderUniversalData(reminder)}</div>
                            </div>
                          )
                        )
                      ) : (
                        <div>
                          {renderUniversalData(
                            getProperty(grammarData, "reminders")
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Applications */}
            {getProperty(grammarData, "applications") && (
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Applications
                </h2>
                <div className="space-y-3">
                  {Array.isArray(getProperty(grammarData, "applications")) ? (
                    (getProperty(grammarData, "applications") as any[]).map(
                      (application: any, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-teal-50 rounded border-l-4 border-teal-400"
                        >
                          <div>{renderUniversalData(application)}</div>
                        </div>
                      )
                    )
                  ) : (
                    <div>
                      {renderUniversalData(
                        getProperty(grammarData, "applications")
                      )}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Exercises */}
            {getProperty(grammarData, "exercises") && (
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Exercises
                </h2>
                <div className="space-y-3">
                  {Array.isArray(getProperty(grammarData, "exercises")) ? (
                    (getProperty(grammarData, "exercises") as any[]).map(
                      (exercise: any, index: number) => (
                        <div
                          key={index}
                          className="p-4 bg-indigo-50 rounded border border-indigo-200"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              {renderUniversalData(exercise)}
                            </div>
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    <div>
                      {renderUniversalData(
                        getProperty(grammarData, "exercises")
                      )}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Memory Aids */}
            {getProperty(grammarData, "memoryAids") && (
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Memory Aids
                </h2>
                <div className="space-y-3">
                  {Array.isArray(getProperty(grammarData, "memoryAids")) ? (
                    (getProperty(grammarData, "memoryAids") as any[]).map(
                      (aid: any, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-pink-50 rounded border-l-4 border-pink-400"
                        >
                          <div>{renderUniversalData(aid)}</div>
                        </div>
                      )
                    )
                  ) : (
                    <div>
                      {renderUniversalData(
                        getProperty(grammarData, "memoryAids")
                      )}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* All Additional Data Fields - Comprehensive Display */}
            {Object.keys(grammarData)
              .filter(
                (key) =>
                  ![
                    "id",
                    "created",
                    "updated",
                    "definition",
                    "cefrLevels",
                    "abstract_nouns_vocab",
                    "vocabulary",
                    "vocab",
                    "theory",
                    "formation",
                    "forms",
                    "spellingRules",
                    "usage",
                    "advancedUsagePatterns",
                    "culturalAndContextualUsage",
                    "examples",
                    "extendedExamples",
                    "commonMistakes",
                    "pronunciationGuide",
                    "keyPoints",
                    "practiceExerciseTypes",
                    "learningTips",
                    "learningProgression",
                    "cefrLevelBreakdown",
                    "comprehensiveErrorAnalysis",
                    "notes",
                    "citations",
                    "progressiveDifficulty",
                    "pedagogicalSequencing",
                    "crossLinguisticAnalysis",
                    "corpusBasedUsage",
                    "digitalLearningIntegration",
                    "researchBasedInsights",
                    "assessmentFramework",
                    "futureDirections",
                    "rules",
                    "patterns",
                    "concepts",
                    "functions",
                    "mistakes",
                    "errors",
                    "pitfalls",
                    "tips",
                    "hints",
                    "reminders",
                    "applications",
                    "exercises",
                    "memoryAids",
                    "A1",
                    "A2",
                    "B1",
                    "B2",
                    "C1",
                    "C2",
                    "modalVerbsDefinition",
                    "articlesDefinition",
                    "causativeFormDefinition",
                    "infinitivesDefinition",
                    "passiveVoiceDefinition",
                    "inversionDefinition",
                    "tenseShiftInReportedSpeechDefinition",
                    "subjectVerbAgreementDefinition",
                    "possessivesDefinition",
                    "conjunctionDefinition",
                    "comparisonsDefinition",
                    "futureInThePastDefinition",
                    "equalityComparisonDefinition",
                    "quantifiersDefinition",
                    "prepositionDefinition",
                    "repeatedComparativeDefinition",
                    "reflexivePronounsDefinition",
                    "reportedQuestionsDefinition",
                    "extendedDefinition",
                    "academicDefinition",
                  ].includes(key)
              )
              .map((key) => {
                const data = getProperty(grammarData, key);
                if (!data) return null;

                return (
                  <section
                    key={key}
                    className="bg-white rounded-lg border border-gray-200 p-6"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FileText className="h-6 w-6" />
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </h2>
                    <div className="space-y-4">
                      {typeof data === "string" ? (
                        renderVerbCategories(data) ||
                        renderWordList(data) ||
                        renderCategoricalList(data) || (
                          <p className="text-gray-700">{data}</p>
                        )
                      ) : Array.isArray(data) ? (
                        <div className="grid gap-3">
                          {data.map((item, index) => (
                            <div
                              key={index}
                              className="p-3 bg-gray-50 rounded-lg"
                            >
                              {typeof item === "string" ? (
                                renderVerbCategories(item) ||
                                renderCategoricalList(item) || (
                                  <p className="text-gray-700">{item}</p>
                                )
                              ) : (
                                <div className="space-y-2">
                                  {Object.entries(item || {}).map(
                                    ([itemKey, itemValue]) => (
                                      <div key={itemKey}>
                                        <span className="font-medium text-gray-800 capitalize">
                                          {itemKey
                                            .replace(/([A-Z])/g, " $1")
                                            .toLowerCase()}
                                          :
                                        </span>
                                        <span className="text-gray-700 ml-2">
                                          {Array.isArray(itemValue)
                                            ? renderUniversalData(itemValue)
                                            : renderUniversalData(itemValue)}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : typeof data === "object" ? (
                        <div className="space-y-4">
                          {Object.entries(data || {}).map(
                            ([subKey, subValue]) => (
                              <div
                                key={subKey}
                                className="p-4 bg-gray-50 rounded-lg"
                              >
                                <h3 className="font-semibold text-gray-800 mb-2 capitalize">
                                  {subKey
                                    .replace(/([A-Z])/g, " $1")
                                    .toLowerCase()}
                                </h3>
                                {typeof subValue === "string" ? (
                                  renderVerbCategories(subValue) ||
                                  renderWordList(subValue) ||
                                  renderCategoricalList(subValue) || (
                                    <p className="text-gray-700">{subValue}</p>
                                  )
                                ) : Array.isArray(subValue) ? (
                                  <ul className="space-y-1">
                                    {subValue.map((item, index) => (
                                      <li
                                        key={index}
                                        className="flex items-start gap-2"
                                      >
                                        <span className="text-blue-600 font-bold">
                                          •
                                        </span>
                                        <span className="text-gray-700">
                                          {renderUniversalData(item)}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                ) : typeof subValue === "object" &&
                                  subValue !== null ? (
                                  <div className="space-y-2">
                                    {Object.entries(subValue).map(
                                      ([itemKey, itemValue]) => (
                                        <div key={itemKey}>
                                          <span className="font-medium text-gray-700 capitalize">
                                            {itemKey
                                              .replace(/([A-Z])/g, " $1")
                                              .toLowerCase()}
                                            :
                                          </span>
                                          <span className="text-gray-600 ml-2">
                                            {Array.isArray(itemValue)
                                              ? renderUniversalData(itemValue)
                                              : renderUniversalData(itemValue)}
                                          </span>
                                        </div>
                                      )
                                    )}
                                  </div>
                                ) : (
                                  <div className="text-gray-700">
                                    {renderUniversalData(subValue)}
                                  </div>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      ) : (
                        <div className="text-gray-700">
                          {renderUniversalData(data)}
                        </div>
                      )}
                    </div>
                  </section>
                );
              })}

            {/* References & Citations Section - At the End */}
            {(() => {
              // Get all reference-related data
              const definition =
                getProperty(grammarData, "definition") ||
                getProperty(grammarData, "modalVerbsDefinition") ||
                getProperty(grammarData, "articlesDefinition") ||
                getProperty(grammarData, "causativeFormDefinition") ||
                getProperty(grammarData, "infinitivesDefinition") ||
                getProperty(grammarData, "passiveVoiceDefinition") ||
                getProperty(grammarData, "inversionDefinition") ||
                getProperty(
                  grammarData,
                  "tenseShiftInReportedSpeechDefinition"
                ) ||
                getProperty(grammarData, "subjectVerbAgreementDefinition") ||
                getProperty(grammarData, "possessivesDefinition") ||
                getProperty(grammarData, "conjunctionDefinition") ||
                getProperty(grammarData, "comparisonsDefinition") ||
                getProperty(grammarData, "futureInThePastDefinition") ||
                getProperty(grammarData, "equalityComparisonDefinition") ||
                getProperty(grammarData, "quantifiersDefinition") ||
                getProperty(grammarData, "prepositionDefinition") ||
                getProperty(grammarData, "repeatedComparativeDefinition") ||
                getProperty(grammarData, "reflexivePronounsDefinition") ||
                getProperty(grammarData, "reportedQuestionsDefinition") ||
                getProperty(grammarData, "extendedDefinition") ||
                getProperty(grammarData, "academicDefinition");

              // Combine all possible reference sources
              const references =
                getProperty(definition, "references") ||
                getProperty(grammarData, "citations") ||
                getProperty(grammarData, "references");

              if (!references) return null;

              // Determine title based on available data
              const sectionTitle = getProperty(grammarData, "citations")
                ? "Citations"
                : "References";

              return (
                <section
                  id="references"
                  className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-6 border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <BookOpen className="h-6 w-6" />
                    {sectionTitle}
                  </h2>
                  <div className="space-y-6">
                    {/* Handle array of references */}
                    {Array.isArray(references) && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          📚 Academic {sectionTitle}
                        </h3>
                        <ol className="space-y-3">
                          {references.map((ref, index) => (
                            <li key={index} className="flex gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </span>
                              <div className="flex-1 text-gray-700">
                                {typeof ref === "string" ? (
                                  ref.includes("http") ? (
                                    <a
                                      href={ref}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                      {ref}
                                    </a>
                                  ) : (
                                    <span className="italic">{ref}</span>
                                  )
                                ) : (
                                  <div>{renderUniversalData(ref)}</div>
                                )}
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {/* Handle object with categorized references */}
                    {typeof references === "object" &&
                      !Array.isArray(references) && (
                        <div className="space-y-6">
                          {Object.entries(references).map(
                            ([category, items]) => (
                              <div key={category}>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                  {category === "books" && "📚"}
                                  {category === "websites" && "🌐"}
                                  {category === "researchPapers" && "📄"}
                                  {category === "articles" && "📰"}
                                  {category === "journals" && "📖"}
                                  {category === "onlineResources" && "💻"}
                                  <span className="capitalize">
                                    {category
                                      .replace(/([A-Z])/g, " $1")
                                      .toLowerCase()}
                                  </span>
                                </h3>
                                {Array.isArray(items) ? (
                                  <ol className="space-y-2 ml-6">
                                    {items.map((item, index) => (
                                      <li key={index} className="flex gap-3">
                                        <span className="flex-shrink-0 w-5 h-5 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xs font-bold">
                                          {index + 1}
                                        </span>
                                        <div className="flex-1 text-gray-700">
                                          {typeof item === "string" ? (
                                            item.includes("http") ? (
                                              <a
                                                href={item}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 underline break-all"
                                              >
                                                {item}
                                              </a>
                                            ) : (
                                              <span className="italic">
                                                {item}
                                              </span>
                                            )
                                          ) : (
                                            <div>
                                              {renderUniversalData(item)}
                                            </div>
                                          )}
                                        </div>
                                      </li>
                                    ))}
                                  </ol>
                                ) : (
                                  <div className="text-gray-700 ml-6 italic">
                                    {renderUniversalData(items)}
                                  </div>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      )}

                    {/* Handle string reference */}
                    {typeof references === "string" && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          📚 {sectionTitle}
                        </h3>
                        <p className="text-gray-700 italic">{references}</p>
                      </div>
                    )}

                    {/* Footer note */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 italic">
                        All {sectionTitle.toLowerCase()} are cited for
                        educational purposes. Please refer to original sources
                        for complete information.
                      </p>
                    </div>
                  </div>
                </section>
              );
            })()}
          </div>

          {/* Navigation to related topics */}
          {/* Related Topics */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Explore Related Topics
              </h3>
              <p className="text-gray-600">
                Continue your grammar journey with these related concepts
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {grammarInfo.category.items
                .filter((item) => item.key !== grammarKey)
                .slice(0, 8)
                .map((item) => (
                  <a
                    key={item.key}
                    href={`/grammar/${item.key
                      .toLowerCase()
                      .replace(/_/g, "-")}`}
                    className="group p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors">
                      {item.title.replace(/_/g, " ")}
                    </div>
                    <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </a>
                ))}
            </div>
          </div>
        </div>

        {/* Table of Contents Sidebar - Desktop */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 p-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                  >
                    <span className="text-blue-400 group-hover:text-blue-600 transition-colors">
                      {section.icon}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {section.title}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </GrammarLayout>
  );
};

export default GrammarPage;

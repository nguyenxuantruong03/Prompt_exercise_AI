"use client";

import React from "react";
import { RenderingUtils } from "./RenderingUtils";

interface VerbCategoriesRendererProps {
  content: string;
}

const VerbCategoriesRenderer: React.FC<VerbCategoriesRendererProps> = ({
  content,
}) => {
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

  const result = renderVerbCategories(content);
  return result;
};

export default VerbCategoriesRenderer;

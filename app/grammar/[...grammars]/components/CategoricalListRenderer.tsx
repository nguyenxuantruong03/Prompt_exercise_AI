"use client";

import React from "react";

interface CategoricalListRendererProps {
  content: string;
}

const CategoricalListRenderer: React.FC<CategoricalListRendererProps> = ({
  content,
}) => {
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

  const result = renderCategoricalList(content);
  return result;
};

export default CategoricalListRenderer;

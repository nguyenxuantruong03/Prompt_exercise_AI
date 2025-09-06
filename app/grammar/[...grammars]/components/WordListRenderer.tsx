"use client";

import React from "react";

interface WordListRendererProps {
  content: string;
}

const WordListRenderer: React.FC<WordListRendererProps> = ({ content }) => {
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

  const result = renderWordList(content);
  return result;
};

export default WordListRenderer;

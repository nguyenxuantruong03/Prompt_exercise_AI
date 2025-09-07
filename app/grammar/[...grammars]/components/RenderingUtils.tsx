import React from "react";

// Helper function to get nested property value safely
export const getProperty = (obj: any, path: string): any => {
  if (!obj || typeof obj !== "object") return null;
  return obj[path] || null;
};

export interface RenderingUtilsProps {
  data?: any;
}

// Special function to safely render any content with beautiful layouts
export const safeRender = (content: any): React.ReactNode => {
  // Handle null, undefined, or empty values
  if (
    content === null ||
    content === undefined ||
    content === "" ||
    (Array.isArray(content) && content.length === 0) ||
    (typeof content === "object" &&
      content !== null &&
      Object.keys(content).length === 0)
  ) {
    return null;
  }

  // Handle string content
  if (typeof content === "string") {
    const trimmedContent = content.trim();

    // Check if it's a long text that should be rendered as a paragraph
    if (trimmedContent.length > 100 && !trimmedContent.includes("\n")) {
      return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
              <span className="text-blue-600 text-xl">📝</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-blue-800 mb-3">
                Information
              </h3>
              <p className="text-gray-700 leading-relaxed">{trimmedContent}</p>
            </div>
          </div>
        </div>
      );
    }

    // Check if it contains multiple lines/paragraphs
    if (trimmedContent.includes("\n")) {
      const lines = trimmedContent
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line);

      // Check if it's a simple list
      const isSimpleList = lines.every(
        (line) =>
          line.startsWith("•") ||
          line.startsWith("-") ||
          line.startsWith("*") ||
          /^\d+\./.test(line)
      );

      if (isSimpleList) {
        return renderCategoricalList(trimmedContent);
      }

      // Check if it looks like vocabulary words
      const wordCount = trimmedContent
        .split(/[\s,\n]+/)
        .filter((w) => w.trim().length > 0).length;

      if (wordCount > 15) {
        const wordListResult = renderWordList(trimmedContent);
        if (wordListResult) return wordListResult;
      }

      // Render as structured paragraphs
      return (
        <div className="space-y-4">
          {lines.map((line, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-4 border border-gray-200 shadow-sm"
            >
              <p className="text-gray-700 leading-relaxed">{line}</p>
            </div>
          ))}
        </div>
      );
    }

    // Regular text content
    return (
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-4 border border-gray-200 shadow-sm">
        <p className="text-gray-700 leading-relaxed">{trimmedContent}</p>
      </div>
    );
  }

  // Handle arrays
  if (Array.isArray(content)) {
    if (content.length === 0) return null;

    // Check if all items are strings (simple list)
    if (content.every((item) => typeof item === "string")) {
      return (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
              <span className="text-green-600 text-xl">📋</span>
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-lg font-bold text-green-800">List Items</h3>
              <div className="grid gap-3">
                {content.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 p-3 bg-white/70 backdrop-blur-sm rounded-lg border border-green-100/50 hover:bg-white hover:border-green-300 hover:shadow-md transition-all duration-300"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-110 transition-transform duration-200"></span>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Handle array of objects
    return (
      <div className="space-y-4">
        {content.map((item, index) => (
          <div key={index}>{safeRender(item)}</div>
        ))}
      </div>
    );
  }

  // Handle objects
  if (typeof content === "object" && content !== null) {
    return renderUniversalData(content);
  }

  // Handle primitives (number, boolean)
  return (
    <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-4 border border-gray-200 shadow-sm">
      <span className="text-gray-700 font-medium">{String(content)}</span>
    </div>
  );
};

// Special function to render word lists beautifully
export const renderWordList = (content: string) => {
  // Extract words from content
  const words = content
    .split(/[\s,\n]+/)
    .map((w) => w.trim())
    .filter((w) => w && w.length > 1);
  const hasCategories = content.includes(":") && content.split(":").length > 2;

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
    .filter((word) => word.length > 0 && word.length < 30);

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
export const renderCategoricalList = (content: string) => {
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
        (!line.includes(":") && line.length < 100)
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
                const cleanItem = item
                  .replace(/^[•\-*]\s*/, "")
                  .replace(/^\d+\.\s*/, "");
                return (
                  <div
                    key={itemIndex}
                    className="group flex items-center gap-4 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-green-100/50 hover:bg-white hover:border-green-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></span>
                      <div className="w-px h-6 bg-gradient-to-b from-green-300 to-transparent"></div>
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200 flex-1">
                      {cleanItem}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

// Universal data renderer for objects
export const renderUniversalData = (obj: any): React.ReactNode => {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
    return null;
  }

  // Handle research/academic paper objects
  if (obj.title && obj.methodology && (obj.keyFindings || obj.conclusions)) {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start gap-4">
          <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
            <span className="text-amber-600 text-xl">🔬</span>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-wide text-amber-600 font-semibold">
                Research Paper
              </span>
              <h4 className="text-lg font-bold text-amber-800 mt-1 leading-tight">
                {obj.title}
              </h4>
            </div>

            {obj.methodology && (
              <div className="bg-white/60 rounded-lg p-4 border border-amber-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-600">🔍</span>
                  <span className="text-sm font-medium text-gray-700">
                    Methodology:
                  </span>
                </div>
                <p className="text-gray-800 leading-relaxed">
                  {obj.methodology}
                </p>
              </div>
            )}

            {obj.keyFindings && (
              <div className="bg-white/60 rounded-lg p-4 border border-amber-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-600">🔍</span>
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
                <span className="text-amber-600">📖</span>
                <span>
                  Pages:{" "}
                  <span className="font-medium text-gray-800">{obj.pages}</span>
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
                  {obj.relevantChapters.map((chapter: string, idx: number) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {chapter}
                    </span>
                  ))}
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

  // Handle web resource objects
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
              <p className="text-gray-700 leading-relaxed">{obj.description}</p>
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
                  <span className="text-purple-600">📅</span>
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

  // Handle book/resource objects
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

  // Generic object handler
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
                            <span className="font-medium">{String(value)}</span>
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

  return null;
};

export const renderVerbCategories = (content: string) => {
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

export const RenderingUtils: React.FC<RenderingUtilsProps> = ({ data }) => {
  return <div>{safeRender(data)}</div>;
};

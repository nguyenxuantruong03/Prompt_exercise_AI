import React from "react";
import { safeRender } from "./RenderingUtils";

// Special render function for pattern objects to display them as structured content
export const renderPatternObject = (obj: any): React.ReactNode => {
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
                <span className="text-gray-800 font-semibold">{obj.year}</span>
              </div>
            </div>

            <div className="bg-white/60 rounded-lg p-3 border border-green-100">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-600">📚</span>
                <span className="text-sm font-medium text-gray-700">
                  Published in:
                </span>
              </div>
              <p className="text-gray-800 italic font-medium">{obj.journal}</p>
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

  // Fall back to safeRender for other objects
  return <span className="text-gray-700">{safeRender(obj)}</span>;
};

// Special render function for arrays that might contain structured objects
export const renderDataArray = (data: any[]): React.ReactNode => {
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
export const renderUniversalData = (data: any): React.ReactNode => {
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

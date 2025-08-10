import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import {
  renderObjectContent,
  getGrammarIcon,
  GrammarContent,
} from "../export-utils";
import { Button } from "@/components/ui/button";
import { TenseData } from "../hint-tenses";

// Type definitions for the objects being rendered
interface ErrorObject {
  error: string;
  wrong: string;
  correct: string;
  explanation?: string;
  frequency?: string;
  level?: string;
}

interface StructuredObject {
  [key: string]: unknown;
}

type RenderableItem =
  | ErrorObject
  | StructuredObject
  | string
  | number
  | boolean
  | null;

interface CompactViewProps {
  selectedTense: { name: string; data: TenseData };
}

interface SectionState {
  [key: string]: boolean;
}

// Type guard functions
const isErrorObject = (obj: unknown): obj is ErrorObject => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "error" in obj &&
    "wrong" in obj &&
    "correct" in obj &&
    typeof (obj as ErrorObject).error === "string" &&
    typeof (obj as ErrorObject).wrong === "string" &&
    typeof (obj as ErrorObject).correct === "string"
  );
};

const isStructuredObject = (obj: unknown): obj is StructuredObject => {
  return typeof obj === "object" && obj !== null && !isErrorObject(obj);
};

const CompactView: React.FC<CompactViewProps> = ({ selectedTense }) => {
  const [showMore, setShowMore] = useState<SectionState>({});
  const [showNestedMore, setShowNestedMore] = useState<SectionState>({});

  const toggleShowMore = (key: string) => {
    setShowMore((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleShowNestedMore = (key: string) => {
    setShowNestedMore((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderObjectAsCard = (obj: RenderableItem, index: number) => {
    // Handle special case for error objects with specific structure
    if (isErrorObject(obj)) {
      return (
        <div
          key={index}
          className="p-3 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg border border-red-200 dark:border-red-700"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="font-semibold text-red-800 dark:text-red-300 text-sm">
                {obj.error}
              </span>
              {obj.level && (
                <span className="text-xs bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 px-2 py-1 rounded-full">
                  {obj.level}
                </span>
              )}
            </div>

            <div className="grid gap-2 text-sm">
              <div>
                <span className="font-medium text-red-700 dark:text-red-400">
                  Wrong:
                </span>
                <span className="ml-2 text-gray-700 dark:text-gray-300 italic">
                  &quot;{obj.wrong}&quot;
                </span>
              </div>
              <div>
                <span className="font-medium text-green-700 dark:text-green-400">
                  Correct:
                </span>
                <span className="ml-2 text-gray-700 dark:text-gray-300 font-medium">
                  &quot;{obj.correct}&quot;
                </span>
              </div>
              {obj.explanation && (
                <div>
                  <span className="font-medium text-blue-700 dark:text-blue-400">
                    Explanation:
                  </span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {obj.explanation}
                  </span>
                </div>
              )}
              {obj.frequency && (
                <div>
                  <span className="font-medium text-purple-700 dark:text-purple-400">
                    Frequency:
                  </span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {obj.frequency}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Handle other structured objects
    if (isStructuredObject(obj)) {
      return (
        <div
          key={index}
          className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700"
        >
          <div className="space-y-1">
            {Object.entries(obj).map(([key, value]) => (
              <div key={key} className="text-sm">
                <span className="font-medium text-blue-700 dark:text-blue-400">
                  {key.replace(/([A-Z])/g, " $1").trim()}:
                </span>{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  {typeof value === "string"
                    ? value.startsWith('"') && value.endsWith('"')
                      ? value.slice(1, -1)
                      : value
                    : String(value)}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Fallback for non-object items
    return (
      <div
        key={index}
        className="p-2 bg-gray-50 dark:bg-gray-700 rounded border-l-4 border-blue-400"
      >
        <div className="text-sm text-gray-700 dark:text-gray-300">
          {String(obj)}
        </div>
      </div>
    );
  };

  const renderArrayContent = (
    value: unknown[],
    key: string,
    showAllItems: boolean
  ) => {
    const displayLimit = showAllItems ? value.length : 2;
    const hasMore = value.length > 2;

    return (
      <div className="space-y-2">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {value.length} items
        </div>
        <div className="space-y-3">
          {value.slice(0, displayLimit).map((item: unknown, idx: number) => {
            // Try to parse JSON strings
            let parsedItem: RenderableItem = item as RenderableItem;
            if (
              typeof item === "string" &&
              (item.startsWith("{") || item.startsWith("["))
            ) {
              try {
                parsedItem = JSON.parse(item) as RenderableItem;
              } catch (e) {
                parsedItem = item;
              }
            }

            return renderObjectAsCard(parsedItem, idx);
          })}
        </div>
        {hasMore && (
          <Button
            variant="outline"
            onClick={() => toggleShowMore(key)}
            className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-2 hover:underline"
          >
            {showAllItems ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show less
              </>
            ) : (
              <>
                <span>...and {value.length - 2} more</span>
              </>
            )}
          </Button>
        )}
      </div>
    );
  };

  const renderObjectContent_improved = (
    value: StructuredObject,
    key: string,
    showAllProperties: boolean
  ) => {
    const entries = Object.entries(value);
    const displayLimit = showAllProperties ? entries.length : 3;
    const hasMore = entries.length > 3;

    return (
      <div className="space-y-2">
        <div className="grid gap-2">
          {entries.slice(0, displayLimit).map(([k, v]) => (
            <div
              key={k}
              className="p-2 bg-gray-50 dark:bg-gray-700 rounded border-l-4 border-purple-400"
            >
              <div className="font-medium text-purple-600 dark:text-purple-400 text-sm mb-1">
                {k.replace(/([A-Z])/g, " $1").trim()}
              </div>
              {Array.isArray(v) ? (
                <div className="text-sm">
                  <span className="text-blue-600 dark:text-blue-400">
                    [{v.length} items]
                  </span>
                  <div className="mt-1 space-y-2">
                    {(() => {
                      const nestedKey = `${key}-${k}`;
                      const showNestedAll = showNestedMore[nestedKey];
                      const nestedDisplayLimit = showNestedAll ? v.length : 2;

                      return (
                        <>
                          {v
                            .slice(0, nestedDisplayLimit)
                            .map((item: unknown, idx: number) => {
                              // Try to parse JSON strings in nested arrays too
                              let parsedItem: RenderableItem =
                                item as RenderableItem;
                              if (
                                typeof item === "string" &&
                                (item.startsWith("{") || item.startsWith("["))
                              ) {
                                try {
                                  parsedItem = JSON.parse(
                                    item
                                  ) as RenderableItem;
                                } catch (e) {
                                  parsedItem = item;
                                }
                              }

                              return (
                                <div key={idx} className="ml-2">
                                  {isStructuredObject(parsedItem) ||
                                  isErrorObject(parsedItem) ? (
                                    renderObjectAsCard(parsedItem, idx)
                                  ) : (
                                    <div className="text-gray-700 dark:text-gray-300 text-sm bg-gray-100 dark:bg-gray-600 p-2 rounded">
                                      • {String(parsedItem)}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          {v.length > 2 && (
                            <Button
                              variant="outline"
                              onClick={() => toggleShowNestedMore(nestedKey)}
                              className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline cursor-pointer ml-2 transition-colors"
                            >
                              {showNestedAll ? (
                                <>
                                  <ChevronUp className="w-3 h-3 inline mr-1" />
                                  Show less
                                </>
                              ) : (
                                `...and ${v.length - 2} more`
                              )}
                            </Button>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>
              ) : isStructuredObject(v) ? (
                <div className="text-sm">
                  <span className="text-purple-600 dark:text-purple-400">
                    {Object.keys(v).length} properties
                  </span>
                  <div className="mt-1 text-gray-700 dark:text-gray-300 ml-2">
                    {(() => {
                      const nestedKey = `${key}-${k}-obj`;
                      const showNestedAll = showNestedMore[nestedKey];
                      const objKeys = Object.keys(v);
                      const nestedDisplayLimit = showNestedAll
                        ? objKeys.length
                        : 3;

                      return (
                        <>
                          <div>
                            {objKeys.slice(0, nestedDisplayLimit).join(", ")}
                          </div>
                          {objKeys.length > 3 && (
                            <Button
                              variant="outline"
                              onClick={() => toggleShowNestedMore(nestedKey)}
                              className="text-xs text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 hover:underline cursor-pointer transition-colors"
                            >
                              {showNestedAll ? (
                                <>
                                  <ChevronUp className="w-3 h-3 inline mr-1" />
                                  Show less
                                </>
                              ) : (
                                `...and ${objKeys.length - 3} more`
                              )}
                            </Button>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>
              ) : (
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {String(v).length > 100
                    ? `${String(v).substring(0, 100)}...`
                    : String(v)}
                </div>
              )}
            </div>
          ))}
        </div>
        {hasMore && (
          <Button
            variant="outline"
            onClick={() => toggleShowMore(key)}
            className="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors mt-2 hover:underline"
          >
            {showAllProperties ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show less
              </>
            ) : (
              <>
                <span>...and {entries.length - 3} more</span>
              </>
            )}
          </Button>
        )}
      </div>
    );
  };

  const renderSimpleContent = (value: unknown, key: string) => {
    const content = renderObjectContent(value as GrammarContent);
    const isLong = content.length > 150;
    const showFull = showMore[`${key}-simple`];

    return (
      <div className="text-sm text-gray-700 dark:text-gray-300 p-2 bg-gray-50 dark:bg-gray-700 rounded">
        {isLong ? (
          <>
            <div>{showFull ? content : `${content.substring(0, 150)}...`}</div>
            <Button
              variant="outline"
              onClick={() => toggleShowMore(`${key}-simple`)}
              className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline cursor-pointer mt-1 transition-colors"
            >
              {showFull ? (
                <>
                  <ChevronUp className="w-3 h-3 inline mr-1" />
                  Show less
                </>
              ) : (
                "...see more"
              )}
            </Button>
          </>
        ) : (
          content
        )}
      </div>
    );
  };

  // Filter out unwanted keys like id, created, updated
  const filteredData = Object.entries(selectedTense.data || {}).filter(
    ([key]) => !["created", "updated", "id", "Id", "ID", "_id"].includes(key)
  );

  return (
    <div className="space-y-4">
      {filteredData.map(([key, value]) => {
        if (!value) return null;

        const title = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());
        const icon = getGrammarIcon(title);
        const shouldShowMore = showMore[key];

        return (
          <div
            key={key}
            className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">{icon}</span>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                  {title}
                </h4>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                  {Array.isArray(value)
                    ? `${value.length} items`
                    : isStructuredObject(value)
                    ? `${Object.keys(value).length} properties`
                    : "1 item"}
                </span>
              </div>
            </div>

            {/* Content - Always visible */}
            <div className="p-4 bg-white dark:bg-gray-800">
              {Array.isArray(value)
                ? renderArrayContent(value, key, shouldShowMore)
                : isStructuredObject(value)
                ? renderObjectContent_improved(value, key, shouldShowMore)
                : renderSimpleContent(value, key)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompactView;

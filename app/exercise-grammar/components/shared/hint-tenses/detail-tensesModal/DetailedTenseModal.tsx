import React, { useEffect, useMemo, useCallback, useState } from "react";
import Modal from "../../../../../../components/shared/modals/Modal";
import {
  renderTenseSections,
  findTenseData,
  type RenderProps,
  isImportantKey,
} from "../../../../../../components/shared/format/json_to_html/toggle-tenses";
import CompactView from "./compact";
import {
  Bookmark,
  ChevronDown,
  ChevronUp,
  FoldVertical,
  Key,
  UnfoldVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TenseData } from "../hint-tenses";

// Type-safe utility functions for accessing TenseData properties
const hasProperty = (obj: Record<string, unknown>, key: string): boolean => {
  return key in obj && obj[key] !== undefined && obj[key] !== null;
};

const getProperty = (obj: Record<string, unknown>, key: string): unknown => {
  if (hasProperty(obj, key)) {
    return obj[key];
  }
  return undefined;
};

// Type guard to check if a value is an array
const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value);
};

// Type guard to check if a value is an object
const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

interface TenseItem {
  key: string;
  name: string;
  displayName: string;
  category: "tenses" | "conditionals" | "grammar" | "special";
  order: number;
  cefrLevels: string[];
}

interface DetailedTenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTense: { name: string; data: TenseData } | null;
  modalViewMode: "detailed" | "compact" | "summary";
  setModalViewMode: (mode: "detailed" | "compact" | "summary") => void;
  fontSizeMode: "small" | "normal" | "large";
  setFontSizeMode: (mode: "small" | "normal" | "large") => void;
  autoScroll: boolean;
  setAutoScroll: (value: boolean) => void;
  autoScrollDuration: number;
  showModalExtensions: boolean;
  toggleModalExtensions: () => void;
  expandedSections: { [key: string]: boolean };
  toggleSection: (sectionKey: string) => void;
  bookmarkedTenses: string[];
  toggleBookmark: (tenseName: string) => void;
  currentTenseIndex: number;
  filteredTenses: TenseItem[];
  navigateToTense: (direction: "up" | "down") => void;
  getRandomTense: () => void;
  printTenseInfo: (params?: {
    key?: string;
    name?: string;
    displayName?: string;
  }) => void;
  getTenseIcon: (tenseName: string) => string;
  tenseItems: TenseItem[];
  toggleAutoScrollQuick: () => void;
  openScrollDurationModal: () => void;
  indexCurrent: number;
  setExpandedSections: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
}

const DetailedTenseModal: React.FC<DetailedTenseModalProps> = React.memo(
  ({
    isOpen,
    onClose,
    selectedTense,
    modalViewMode,
    setModalViewMode,
    fontSizeMode,
    setFontSizeMode,
    autoScroll,
    setAutoScroll,
    autoScrollDuration,
    showModalExtensions,
    toggleModalExtensions,
    expandedSections,
    toggleSection,
    bookmarkedTenses,
    toggleBookmark,
    currentTenseIndex,
    filteredTenses,
    navigateToTense,
    getRandomTense,
    printTenseInfo,
    getTenseIcon,
    tenseItems,
    toggleAutoScrollQuick,
    openScrollDurationModal,
    indexCurrent,
    setExpandedSections,
  }) => {
    // Local state for highlighting important keys
    const [highlightedKeys, setHighlightedKeys] = useState<{
      [key: string]: boolean;
    }>({});
    const [isHighlightingEnabled, setIsHighlightingEnabled] = useState(false);

    // State for modal height adjustment
    const [isNavigating, setIsNavigating] = useState(false);

    // Don't render anything if modal is closed or no selected tense
    if (!isOpen || !selectedTense) {
      return null;
    }

    // Callback function for section navigation
    const handleSectionNavigation = useCallback(() => {
      setIsNavigating(true);
      // Reset after a delay to allow for smooth navigation
      setTimeout(() => {
        setIsNavigating(false);
      }, 2000);
    }, []);

    // Function to toggle highlighting of important keys
    const toggleHighlighting = () => {
      if (!selectedTense) return;

      const tenseName = selectedTense.name;
      const data = selectedTense.data;

      if (!isHighlightingEnabled) {
        // Enable highlighting - highlight all important keys for this tense
        const newHighlightedKeys: { [key: string]: boolean } = {};

        if (data && typeof data === "object") {
          Object.keys(data).forEach((key) => {
            // Check if this key is considered important and highlight the tense
            // Use type-safe property access
            const dataAsRecord = data as unknown as Record<string, unknown>;
            if (isImportantKey(key) && hasProperty(dataAsRecord, key)) {
              newHighlightedKeys[tenseName] = true; // Highlight the tense name
            }
          });
        }

        setHighlightedKeys(newHighlightedKeys);
        setIsHighlightingEnabled(true);
      } else {
        // Disable highlighting
        setHighlightedKeys({});
        setIsHighlightingEnabled(false);
      }
    };

    // Auto-highlight important sections when tense changes
    useEffect(() => {
      if (selectedTense && isHighlightingEnabled) {
        const tenseName = selectedTense.name;
        setHighlightedKeys({ [tenseName]: true });
      }
    }, [selectedTense, isHighlightingEnabled]);

    const toggleSectionAll = () => {
      // Check if any sections are expanded
      const hasExpandedSections = Object.values(expandedSections).some(
        (isExpanded) => isExpanded
      );

      if (hasExpandedSections) {
        // If any sections are open, close all
        setExpandedSections({});
      } else {
        // If all sections are closed, open all
        // Generate all possible section keys based on current tense and available data sections
        if (selectedTense) {
          const allSectionKeys: { [key: string]: boolean } = {};
          const tenseName = selectedTense.name;
          const data = selectedTense.data;

          // Generate section keys to match renderTenseSections format: ${tenseName}-${key}
          if (data && typeof data === "object") {
            // Add all data properties as section keys (excluding metadata fields)
            Object.keys(data).forEach((key) => {
              // Filter out metadata fields same as in renderTenseSections
              const dataAsRecord = data as unknown as Record<string, unknown>;
              if (
                !["created", "updated", "id", "Id", "ID"].includes(key) &&
                hasProperty(dataAsRecord, key)
              ) {
                // Use the actual property key, not formatted title - this matches renderTenseSections
                allSectionKeys[`${tenseName}-${key}`] = true;
              }
            });
          }
          setExpandedSections(allSectionKeys);
        }
      }
    };

    // Auto-scroll logic
    useEffect(() => {
      let animationId: number;

      if (autoScroll && selectedTense) {
        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
          console.log("Auto-scroll initiated");
          const scrollContainer = document.querySelector(
            ".modal-content-scroll"
          );
          const progressBar = document.querySelector(
            ".auto-scroll-progress"
          ) as HTMLElement;

          console.log("Scroll container found:", scrollContainer);
          console.log("Progress bar found:", progressBar);

          if (scrollContainer) {
            const scrollHeight = scrollContainer.scrollHeight;
            const clientHeight = scrollContainer.clientHeight;
            const maxScroll = scrollHeight - clientHeight;
            const duration = autoScrollDuration * 1000; // Convert seconds to milliseconds

            console.log(
              "Scroll height:",
              scrollHeight,
              "Client height:",
              clientHeight,
              "Max scroll:",
              maxScroll
            );

            if (maxScroll <= 0) {
              console.log("No scrollable content, stopping auto-scroll");
              setAutoScroll(false);
              return;
            }

            let start = 0;
            const scroll = (timestamp: number) => {
              if (!start) start = timestamp;
              const progress = (timestamp - start) / duration;

              if (progress < 1 && autoScroll) {
                // Check autoScroll state
                scrollContainer.scrollTop = maxScroll * progress;

                // Update progress bar
                if (progressBar) {
                  progressBar.style.width = `${Math.min(progress * 100, 100)}%`;
                }

                animationId = requestAnimationFrame(scroll);
              } else if (progress >= 1) {
                // Auto-scroll completed, reset to false
                if (progressBar) {
                  progressBar.style.width = "100%";
                }
                console.log("Auto-scroll completed");
                setAutoScroll(false);
              }
            };

            animationId = requestAnimationFrame(scroll);
          } else {
            console.log("Scroll container not found!");
          }
        }, 100);
      }

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        // Reset progress bar when auto-scroll stops
        const progressBar = document.querySelector(
          ".auto-scroll-progress"
        ) as HTMLElement;
        if (progressBar && !autoScroll) {
          progressBar.style.width = "0%";
        }
      };
    }, [autoScroll, selectedTense, autoScrollDuration, setAutoScroll]);

    // Memoize the current tense item to avoid unnecessary recalculations
    const currentTenseItem = useMemo(() => {
      return tenseItems.find((item) => item.name === selectedTense?.name);
    }, [tenseItems, selectedTense?.name]);

    // Memoize the header icon to avoid unnecessary re-renders
    const headerIcon = useMemo(() => {
      if (!selectedTense) return null;

      return (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 ">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="text-lg md:text-2xl">
                {getTenseIcon(selectedTense.name)}
              </span>
            </div>
            <div>
              <h2 className="text-lg md:text-2xl font-bold flex items-center gap-3">
                {selectedTense.name}
                <Button
                  variant="ghost"
                  onClick={() => toggleBookmark(selectedTense.name)}
                  className={`p-1 rounded-full  transition-colors cursor-pointer ${
                        bookmarkedTenses.includes(selectedTense.name)
                          ? "text-yellow-200 bg-yellow-400/20"
                          : "text-white bg-white/20"
                      }`}
                  title={
                    bookmarkedTenses.includes(selectedTense.name)
                      ? "Remove bookmark"
                      : "Add bookmark"
                  }
                >
                  <Bookmark
                        className="h-5 w-5"
                        fill={
                          bookmarkedTenses.includes(selectedTense.name)
                            ? "yellow"
                            : "white"
                        }
                      />
                </Button>
              </h2>
              <div className="text-indigo-100 text-xs md:text-sm mt-1 md:mt-2">
                Grammar Reference • Detailed Guide
                {/* CEFR Level badges for this tense */}
                {currentTenseItem?.cefrLevels.map((level) => (
                  <span
                    key={level}
                    className="ml-2 text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full font-medium"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
            title="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
      );
    }, [
      selectedTense,
      bookmarkedTenses,
      currentTenseItem,
      getTenseIcon,
      toggleBookmark,
      onClose,
    ]);

    // Render modal extensions in a more stable way
    const renderModalExtensions = () => {
      return (
        <div className="flex items-center gap-2 mb-0 lg:mb-4 w-full overflow-x-auto">
          {/* View Mode Toggle */}
          <div className="flex bg-white/10 rounded-lg p-1">
            <Button
              variant="ghost"
              onClick={() => setModalViewMode("compact")}
              className={`px-3 py-1 rounded text-xs transition-colors ${
                modalViewMode === "compact"
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              title="Compact View"
            >
              <span className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Compact
              </span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setModalViewMode("detailed")}
              className={`px-3 py-1 rounded text-xs transition-colors ${
                modalViewMode === "detailed"
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              title="Detailed View"
            >
              <span className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h5v8H4V6zm7 0h5v8h-5V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Detailed
              </span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setModalViewMode("summary")}
              className={`px-3 py-1 rounded text-xs transition-colors ${
                modalViewMode === "summary"
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              title="Summary View"
            >
              <span className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
                Summary
              </span>
            </Button>
          </div>

          {/* Font Size Toggle */}
          <div className="flex bg-white/10 rounded-lg p-1">
            <Button
              variant="ghost"
              onClick={() => setFontSizeMode("small")}
              className={`px-2 py-1 rounded text-xs transition-colors ${
                fontSizeMode === "small"
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              title="Small Font"
            >
              A
            </Button>
            <Button
              variant="ghost"
              onClick={() => setFontSizeMode("normal")}
              className={`px-2 py-1 rounded text-xs transition-colors ${
                fontSizeMode === "normal"
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              title="Normal Font"
            >
              A
            </Button>
            <Button
              variant="ghost"
              onClick={() => setFontSizeMode("large")}
              className={`px-2 py-1 rounded text-xs transition-colors ${
                fontSizeMode === "large"
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              title="Large Font"
            >
              A
            </Button>
          </div>

          {/* Auto Scroll Toggle with Duration */}
          <div className="flex items-center gap-1">
            <Button
              onClick={toggleAutoScrollQuick}
              className={`p-2 rounded-lg transition-colors ${
                autoScroll
                  ? "bg-green-500 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white/80"
              }`}
              title={
                autoScroll
                  ? `Stop Auto Scroll (${autoScrollDuration}s)`
                  : `Start Auto Scroll (${autoScrollDuration}s)`
              }
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>

            {/* Auto Scroll Duration Settings */}
            <Button
              onClick={openScrollDurationModal}
              className="p-3 rounded-lg transition-colors bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs"
              title={`Configure Auto-Scroll Duration (Current: ${autoScrollDuration}s)`}
            >
              ⏱️
            </Button>

            {/* Duration indicator - clickable */}
            <Button
              variant="ghost"
              onClick={openScrollDurationModal}
              className="text-xs text-white/60 hover:text-white/80 min-w-[24px] text-center transition-colors duration-200 px-1 py-0.5 rounded hover:bg-white/10"
              title={`Click to change auto-scroll duration (Current: ${autoScrollDuration}s)`}
            >
              {autoScrollDuration}s
            </Button>
          </div>

          <Button
            onClick={toggleSectionAll}
            className="p-2 rounded-lg transition-colors bg-white/10 hover:bg-white/20 text-white/80 hover:text-white"
            title={
              Object.values(expandedSections).some((isExpanded) => isExpanded)
                ? "Collapse all sections"
                : "Expand all sections"
            }
          >
            {Object.values(expandedSections).some(
              (isExpanded) => isExpanded
            ) ? (
              <FoldVertical className="w-4 h-4" />
            ) : (
              <UnfoldVertical className="w-4 h-4" />
            )}
          </Button>

          {/* Highlight Important Keys Button */}
          <Button
            onClick={toggleHighlighting}
            className={`p-2 rounded-lg transition-colors ${
              isHighlightingEnabled
                ? "bg-yellow-500 text-yellow-900 shadow-lg"
                : "bg-white/10 hover:bg-white/20 text-white/80 hover:text-white"
            }`}
            title={
              isHighlightingEnabled
                ? "Disable highlighting of important sections"
                : "Highlight important sections (definition, usage, examples, etc.)"
            }
          >
            <Key
              className={`w-5 h-5 ${
                isHighlightingEnabled
                  ? "text-yellow-900"
                  : "text-white/80 hover:text-white"
              }`}
            />
          </Button>

          {/* Special Feature Buttons */}
          {/* Enhanced Special Feature Buttons */}
          <Button
            variant="ghost"
            onClick={() =>
              printTenseInfo(
                tenseItems.find((item) => item.name === selectedTense.name)
              )
            }
            className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
            title="Print this topic"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
          </Button>

          <Button
            variant="ghost"
            onClick={getRandomTense}
            className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
            title="Random topic"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </Button>

          {/* Topic Navigation Buttons */}
          <div className="flex gap-1 bg-white/10 rounded-lg p-1">
            <Button
              variant="ghost"
              onClick={() => navigateToTense("up")}
              className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              title="Previous topic"
              disabled={filteredTenses.length === 0}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </Button>
            <div className="flex items-center px-2 text-white/80 text-xs">
              {indexCurrent + 1} / {filteredTenses.length}
            </div>
            <Button
              variant="ghost"
              onClick={() => navigateToTense("down")}
              className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              title="Next topic"
              disabled={filteredTenses.length === 0}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
          </div>

          {/* Collapse/Expand All */}
        </div>
      );
    };

    // Render subtitle content in a more stable way
    const renderSubtitle = () => {
      return (
        <div className="text-indigo-100 text-xs md:text-sm mt-1 md:mt-2">
          {showModalExtensions && renderModalExtensions()}
          {/* Special Features Status Bar */}
          {showModalExtensions && (
            <div className="hidden lg:flex items-center justify-between text-sm bg-white/10 rounded-lg p-3">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  View:{" "}
                  {modalViewMode.charAt(0).toUpperCase() +
                    modalViewMode.slice(1)}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Font:{" "}
                  {fontSizeMode.charAt(0).toUpperCase() + fontSizeMode.slice(1)}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  Topic: {currentTenseIndex + 1} of {filteredTenses.length}
                </span>
                {bookmarkedTenses.length > 0 && (
                  <span className="flex items-center gap-1 ">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    {bookmarkedTenses.length} Bookmarked
                  </span>
                )}
                {isHighlightingEnabled && (
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                    Highlighting Active
                  </span>
                )}
              </div>

                {autoScroll && (
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      onClick={() => setAutoScroll(false)}
                      className="text-red-500 hover:text-red-700 font-medium"
                    >
                      Stop
                    </Button>
                    <span className="text-green-300 text-xs flex items-center gap-1">
                      <svg
                        className="w-3 h-3 animate-spin"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Auto Scrolling...
                    </span>
                  </div>
                )}
            </div>
          )}
          {/* Toggle Button for Modal Extensions */}
          <Button
            variant="outline"
            onClick={toggleModalExtensions}
            className={`flex items-center justify-center gap-2 w-full text-white/80 hover:text-white mt-2`}
            title={showModalExtensions ? "Hide extensions" : "Show extensions"}
          >
            {showModalExtensions ? (
              <>
                <ChevronUp className="w-4 h-4" />
                <span className="text-sm">Hide</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                <span className="text-sm">Show</span>
              </>
            )}
          </Button>
        </div>
      );
    };

    // Create props object for renderTenseSections
    const renderProps: RenderProps = useMemo(
      () => ({
        expandedSections,
        highlightedKeys, // Use the actual highlightedKeys state
        toggleSection,
        isModal: true,
        onSectionNavigation: handleSectionNavigation, // Add the callback
      }),
      [
        expandedSections,
        highlightedKeys,
        toggleSection,
        handleSectionNavigation,
      ]
    );

    // Memoize renderModalContent using renderTenseSections
    const renderModalContent = useCallback(() => {
      if (!selectedTense) return null;

      if (modalViewMode === "summary") {
        // Summary View - keep custom implementation for now
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">
                Quick Summary
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(selectedTense.data || {}).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center"
                    >
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {Array.isArray(value)
                          ? value.length
                          : typeof value === "object" && value !== null
                          ? Object.keys(value).length
                          : "1"}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Key highlights in summary */}
            {/* {selectedTense.data?.definition && (
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                  <span>📖</span> Definition
                </h4>
                <p className="text-green-700 dark:text-green-300">
                  {(() => {
                    const def = selectedTense.data.definition;
                    if (typeof def === "object" && def !== null) {
                      if (Array.isArray(def)) {
                        return def.join(", ");
                      }
                      return Object.entries(def)
                        .map(([key, value]) => {
                          const formattedKey = key
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase());
                          return `${formattedKey}: ${String(value)}`;
                        })
                        .join("; ");
                    }
                    return String(def);
                  })()}
                </p>
              </div>
            )} */}

            {(() => {
              const dataAsRecord = selectedTense.data as unknown as Record<
                string,
                unknown
              >;
              const examples = getProperty(dataAsRecord, "examples");

              if (!examples || !isArray(examples)) {
                return null;
              }

              return (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                    <span>💡</span> Key Examples
                  </h4>
                  <div className="space-y-2">
                    {examples
                      .slice(0, 3)
                      .map((example: unknown, idx: number) => (
                        <p
                          key={idx}
                          className="text-yellow-700 dark:text-yellow-300"
                        >
                          •{" "}
                          {(() => {
                            if (isObject(example)) {
                              if (isArray(example)) {
                                return example.join(", ");
                              }
                              return Object.entries(example)
                                .map(([k, v]) => `${k}: ${String(v)}`)
                                .join("; ");
                            }
                            return String(example);
                          })()}
                        </p>
                      ))}
                    {examples.length > 3 && (
                      <p className="text-yellow-600 dark:text-yellow-400 text-sm italic">
                        ... and {examples.length - 3} more examples
                      </p>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        );
      } else if (modalViewMode === "compact") {
        // Compact View - Use dedicated CompactView component
        return <CompactView selectedTense={selectedTense} />;
      } else {
        // Detailed View - Use renderTenseSections from tense-utils
        const tenseResult = findTenseData(selectedTense.name);
        return renderTenseSections(
          tenseResult,
          selectedTense.name,
          renderProps
        );
      }
    }, [selectedTense, modalViewMode, renderProps]);

    // Memoize footer to prevent unnecessary re-renders
    const footer = useMemo(() => {
      if (!showModalExtensions || !selectedTense) return null;

      return (
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 w-full md:w-auto">
              <span className="font-medium">Grammar Reference</span> •
              <span className="ml-1">
                {(() => {
                  const dataAsRecord = selectedTense.data as unknown as Record<
                    string,
                    unknown
                  >;
                  return Object.keys(selectedTense.data || {}).filter(
                    (key) =>
                      !["created", "updated", "id", "Id", "ID", "_id"].includes(
                        key
                      ) && hasProperty(dataAsRecord, key)
                  ).length;
                })()}{" "}
                sections
              </span>
            </div>
            {bookmarkedTenses.includes(selectedTense.name) && (
              <div className="hidden lg:flex text-sm text-yellow-600 dark:text-yellow-400 items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1.447.894L10 15.293l-5.553 2.601A1 1 0 013 17V3z" />
                </svg>
                Bookmarked
              </div>
            )}
          </div>

          <div className="flex justify-end gap-1 lg:gap-2 w-[90%] md:w-auto space-x-4">
            <div className="text-xs text-gray-500 dark:text-gray-400 flex flex-col gap-1">
              <div>
                <span>Created:</span> {selectedTense.data.created}
              </div>
              <div>
                <span>Updated:</span> {selectedTense.data.updated}
              </div>
            </div>
          </div>
        </div>
      );
    }, [showModalExtensions, selectedTense, bookmarkedTenses]);

    // Memoize content class name
    const contentClassName = useMemo(() => {
      const sizeClass =
        fontSizeMode === "small"
          ? "text-sm"
          : fontSizeMode === "large"
          ? "text-lg"
          : "text-base";

      return `${sizeClass}  relative p-0`;
    }, [fontSizeMode, showModalExtensions]);

    // Dynamic maxHeightNonFooter based on navigation state
    const dynamicMaxHeightNonFooter = useMemo(() => {
      if (isNavigating) {
        return "max-h-[calc(88vh-120px)]";
      }
      return "max-h-[calc(95vh-120px)]";
    }, [isNavigating, showModalExtensions]);

    const dynamicMaxHeightFooter = useMemo(() => {
      if (showModalExtensions) {
        return "max-h-[calc(75vh-180px)]";
      }

      return "max-h-[calc(90vh-180px)]";
    }, [isNavigating, showModalExtensions]);

    return (
      <>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          subtitle={renderSubtitle()}
          headerIcon={headerIcon}
          headerClassName="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white"
          contentClassName={contentClassName}
          footerClassName="bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/30 dark:to-purple-900/30 border-t border-gray-200 dark:border-gray-600"
          modalClassName="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-600"
          maxWidth="max-w-5xl"
          maxHeight="max-h-[90vh]"
          showCloseButton={false}
          headerLayoutMode="classic"
          footer={footer}
          maxHeightNonFooter={dynamicMaxHeightNonFooter} // Use dynamic heightmaxHeightFooter
          maxHeightFooter={dynamicMaxHeightFooter}
        >
         

          {/* Modal Content */}
          <div>{renderModalContent()}</div>
        </Modal>
      </>
    );
  }
);

export default DetailedTenseModal;

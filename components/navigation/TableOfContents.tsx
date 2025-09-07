"use client";

import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  Lightbulb,
  Clock,
  Target,
  FileText,
  CheckCircle2,
  Circle,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  List,
  Minimize2,
  Maximize2,
} from "lucide-react";
import {
  getAvailableGrammarCategories,
  getAvailableGrammarCount,
} from "@/lib/utils/filter-available-grammar";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  completed?: boolean;
  subsections?: Section[];
}

interface TableOfContentsProps {
  sections: Section[];
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  sections,
  className = "",
}) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [completedSections, setCompletedSections] = useState<Set<string>>(
    new Set()
  );
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCompactMode, setIsCompactMode] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [scrollProgress, setScrollProgress] = useState(0);

  // Group sections into categories for better organization
  const groupedSections = React.useMemo(() => {
    const groups = {
      core: [] as Section[],
      content: [] as Section[],
      examples: [] as Section[],
      advanced: [] as Section[],
      reference: [] as Section[],
    };

    sections.forEach((section) => {
      const title = section.title.toLowerCase();
      if (
        title.includes("definition") ||
        title.includes("cefr") ||
        title.includes("level")
      ) {
        groups.core.push(section);
      } else if (title.includes("example") || title.includes("pronunciation")) {
        groups.examples.push(section);
      } else if (
        title.includes("advanced") ||
        title.includes("research") ||
        title.includes("corpus")
      ) {
        groups.advanced.push(section);
      } else if (title.includes("reference") || title.includes("citation")) {
        groups.reference.push(section);
      } else {
        groups.content.push(section);
      }
    });

    return groups;
  }, [sections]);

  const toggleSectionExpansion = (groupName: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(groupName)) {
        newSet.delete(groupName);
      } else {
        newSet.add(groupName);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));

      // Find active section
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      let currentActiveSection = "";
      const viewportMiddle = window.innerHeight / 2;
      const isNearBottom = scrollPercent > 95; // Nearly at bottom

      sectionElements.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportMiddle && rect.bottom > viewportMiddle) {
            currentActiveSection = id;
          }
        }
      });

      // Update completed sections
      setCompletedSections((prev) => {
        const newCompleted = new Set(prev);

        if (currentActiveSection) {
          const currentSectionIndex = sections.findIndex(
            (s) => s.id === currentActiveSection
          );

          // Mark all previous sections as completed
          if (currentSectionIndex > 0) {
            sections
              .slice(0, currentSectionIndex)
              .forEach((s) => newCompleted.add(s.id));
          }

          // Mark current section as completed if user scrolled past its middle
          const currentElement = document.getElementById(currentActiveSection);
          if (currentElement) {
            const rect = currentElement.getBoundingClientRect();
            const elementMiddle = rect.top + rect.height / 2;
            if (elementMiddle < viewportMiddle) {
              newCompleted.add(currentActiveSection);
            }
          }

          // Mark last section as completed if near bottom of page
          if (isNearBottom && sections.length > 0) {
            const lastSection = sections[sections.length - 1];
            newCompleted.add(lastSection.id);
          }
        }

        return newCompleted;
      });

      if (currentActiveSection && currentActiveSection !== activeSection) {
        setActiveSection(currentActiveSection);

        // Auto-expand group containing active section
        const activeGroupName = Object.entries(groupedSections).find(
          ([_, groupSections]) =>
            groupSections.some((s) => s.id === currentActiveSection)
        )?.[0];

        if (activeGroupName && !expandedSections.has(activeGroupName)) {
          setExpandedSections((prev) => new Set([...prev, activeGroupName]));
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeSection, groupedSections, expandedSections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Track click analytics
      setActiveSection(sectionId);
    }
  };

  const progressPercentage =
    sections.length > 0
      ? Math.round((completedSections.size / sections.length) * 100)
      : 0;

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow-sm sticky top-20 z-40 ${className}`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Table of Contents</span>
            <span className="sm:hidden">Contents</span>
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 p-0"
          >
            {isCollapsed ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-3 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollToSection("overview")}
            className="flex-1 text-xs"
          >
            Overview
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCompactMode(!isCompactMode)}
            className="px-2"
            title={isCompactMode ? "Expand view" : "Compact view"}
          >
            {isCompactMode ? (
              <Maximize2 className="h-3 w-3" />
            ) : (
              <Minimize2 className="h-3 w-3" />
            )}
          </Button>
        </div>

        {/* Progress Section */}
        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 hidden sm:inline">
              Reading Progress
            </span>
            <span className="text-gray-600 sm:hidden">Progress</span>
            <Badge
              variant={progressPercentage === 100 ? "default" : "secondary"}
              className="text-xs"
            >
              {progressPercentage}%
            </Badge>
          </div>
          <Progress value={scrollProgress} className="h-2" />
          <div className="flex justify-between text-xs text-gray-500">
            <span className="hidden sm:inline">
              {completedSections.size} of {sections.length} sections
            </span>
            <span className="sm:hidden">
              {completedSections.size}/{sections.length}
            </span>
            <span>{Math.round(scrollProgress)}% scrolled</span>
          </div>
        </div>
      </div>

      {/* Content */}
      {!isCollapsed && (
        <div className="p-2 max-h-[calc(100vh-300px)] overflow-y-auto">
          {isCompactMode ? (
            // Compact flat list
            <div className="space-y-1">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                const isCompleted = completedSections.has(section.id);

                return (
                  <Button
                    key={section.id}
                    variant="ghost"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full justify-start p-2 h-auto text-left hover:bg-gray-50 ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border-l-2 border-blue-500"
                        : isCompleted
                        ? "text-green-700 bg-green-50"
                        : "text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-2 w-full">
                      <div className="flex-shrink-0">
                        {isCompleted ? (
                          <CheckCircle2 className="h-3 w-3 text-green-600" />
                        ) : isActive ? (
                          <div className="h-3 w-3 rounded-full bg-blue-500" />
                        ) : (
                          <Circle className="h-3 w-3 text-gray-400" />
                        )}
                      </div>
                      <span className="text-xs font-medium truncate">
                        {section.title}
                      </span>
                    </div>
                  </Button>
                );
              })}
            </div>
          ) : (
            // Grouped tree structure
            <div className="space-y-3">
              {Object.entries(groupedSections).map(
                ([groupName, groupSections]) => {
                  if (groupSections.length === 0) return null;

                  const isExpanded = expandedSections.has(groupName);
                  const groupTitle =
                    {
                      core: "📚 Core Concepts",
                      content: "📖 Main Content",
                      examples: "💡 Examples & Practice",
                      advanced: "🎓 Advanced Topics",
                      reference: "📝 References",
                    }[groupName] || groupName;

                  const hasActiveSection = groupSections.some(
                    (s) => activeSection === s.id
                  );
                  const completedCount = groupSections.filter((s) =>
                    completedSections.has(s.id)
                  ).length;

                  return (
                    <div
                      key={groupName}
                      className="border border-gray-100 rounded-lg"
                    >
                      {/* Group Header */}
                      <Button
                        variant="ghost"
                        onClick={() => toggleSectionExpansion(groupName)}
                        className={`w-full justify-between p-3 h-auto rounded-lg ${
                          hasActiveSection
                            ? "bg-blue-50 border-blue-200"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            {groupTitle}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {completedCount}/{groupSections.length}
                          </Badge>
                        </div>
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </Button>

                      {/* Group Content */}
                      {isExpanded && (
                        <div className="p-2 pt-0 space-y-1">
                          {groupSections.map((section) => {
                            const isActive = activeSection === section.id;
                            const isCompleted = completedSections.has(
                              section.id
                            );

                            return (
                              <div key={section.id} className="ml-2">
                                <Button
                                  variant="ghost"
                                  onClick={() => scrollToSection(section.id)}
                                  className={`w-full justify-start p-2 h-auto text-left hover:bg-gray-50 rounded ${
                                    isActive
                                      ? "bg-blue-50 text-blue-700 border-l-2 border-blue-500"
                                      : isCompleted
                                      ? "text-green-700 bg-green-50"
                                      : "text-gray-700"
                                  }`}
                                >
                                  <div className="flex items-center gap-2 w-full">
                                    <div className="flex-shrink-0">
                                      {isCompleted ? (
                                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                                      ) : isActive ? (
                                        <div className="h-4 w-4 rounded-full bg-blue-500 animate-pulse" />
                                      ) : (
                                        <Circle className="h-4 w-4 text-gray-400" />
                                      )}
                                    </div>

                                    <div className="flex items-center gap-2 min-w-0 flex-1">
                                      <div className="w-4 h-4 flex-shrink-0">
                                        {section.icon}
                                      </div>
                                      <span className="text-sm font-medium truncate">
                                        {section.title}
                                      </span>
                                    </div>

                                    {isActive && (
                                      <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                                        Reading
                                      </div>
                                    )}
                                  </div>
                                </Button>

                                {/* Subsections */}
                                {section.subsections && isActive && (
                                  <div className="ml-6 mt-1 space-y-1">
                                    {section.subsections.map((subsection) => (
                                      <Button
                                        key={subsection.id}
                                        variant="ghost"
                                        onClick={() =>
                                          scrollToSection(subsection.id)
                                        }
                                        className="w-full justify-start p-1 h-auto text-left text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                      >
                                        <div className="flex items-center gap-2">
                                          <div className="w-2 h-2 rounded-full bg-gray-300" />
                                          {subsection.title}
                                        </div>
                                      </Button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="p-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <List className="h-3 w-3" />
            {isCompactMode ? "Compact" : "Grouped"} view
          </span>
          <span className="flex items-center gap-1">
            <Target className="h-3 w-3" />
            Auto-highlight
          </span>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;

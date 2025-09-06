"use client";

import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  FileText,
  CheckCircle2,
  Circle,
  ChevronUp,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";
import {
  getAvailableGrammarCategories,
  getAvailableGrammarCount,
  getAvailableGrammarSummary,
} from "@/lib/utils/filter-available-grammar";

interface GrammarNavigationProps {
  className?: string;
  currentTopic?: string;
}

const GrammarNavigation: React.FC<GrammarNavigationProps> = ({
  className = "",
  currentTopic,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(["tenses"])
  );
  const [grammarSummary, setGrammarSummary] = useState(
    getAvailableGrammarSummary()
  );

  useEffect(() => {
    setGrammarSummary(getAvailableGrammarSummary());
  }, []);

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const formatTopicUrl = (topicKey: string) => {
    return topicKey.toLowerCase().replace(/_/g, "");
  };

  const categoryIcons = {
    tenses: <Clock className="w-4 h-4" />,
    nouns: <FileText className="w-4 h-4" />,
    verbs: <BookOpen className="w-4 h-4" />,
    adjectives: <Circle className="w-4 h-4" />,
    adverbs: <Circle className="w-4 h-4" />,
    pronouns: <Circle className="w-4 h-4" />,
    prepositions: <Circle className="w-4 h-4" />,
    articles: <Circle className="w-4 h-4" />,
    conjunctions: <Circle className="w-4 h-4" />,
    conditionals: <Circle className="w-4 h-4" />,
    passivevoice: <Circle className="w-4 h-4" />,
    reportedspeech: <Circle className="w-4 h-4" />,
    advanced: <Circle className="w-4 h-4" />,
  };

  if (isCollapsed) {
    return (
      <div className={`fixed top-20 right-4 z-50 ${className}`}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsCollapsed(false)}
          className="bg-white/90 backdrop-blur-sm shadow-lg border-blue-200 hover:bg-blue-50"
        >
          <BookOpen className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <div
      className={`fixed top-20 right-4 w-80 max-h-[calc(100vh-6rem)] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-800">Grammar Topics</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(true)}
            className="hover:bg-white/50"
          >
            <ChevronUp className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress Summary */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Available Topics</span>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              {grammarSummary.totalAvailable} / {grammarSummary.totalPossible}
            </Badge>
          </div>
          <Progress
            value={grammarSummary.completionPercentage}
            className="h-2"
          />
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" />
            {grammarSummary.completionPercentage}% topics implemented
          </div>
        </div>
      </div>

      {/* Navigation Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-3">
          {grammarSummary.categories.map((category) => (
            <div key={category.id} className="space-y-2">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {categoryIcons[category.id as keyof typeof categoryIcons] || (
                    <Circle className="w-4 h-4" />
                  )}
                  <span className="font-medium text-gray-800">
                    {category.title}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {category.items.length}
                  </Badge>
                </div>
                {expandedCategories.has(category.id) ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>

              {/* Category Items */}
              {expandedCategories.has(category.id) && (
                <div className="ml-4 space-y-1">
                  {category.items.map((item) => {
                    const isActive = currentTopic === formatTopicUrl(item.key);
                    return (
                      <Link
                        key={item.key}
                        href={`/grammar/${formatTopicUrl(item.key)}`}
                        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive
                            ? "bg-blue-100 text-blue-800 font-medium"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {isActive ? (
                            <CheckCircle2 className="w-3 h-3 text-blue-600" />
                          ) : (
                            <Circle className="w-3 h-3 text-gray-400" />
                          )}
                          <span>{item.title}</span>
                        </div>
                        {item.description && (
                          <div className="text-xs text-gray-500 ml-5 mt-1">
                            {item.description}
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="text-xs text-gray-600 space-y-1">
            <div className="flex items-center justify-between">
              <span>Status:</span>
              <span className="text-green-600 font-medium">
                {grammarSummary.totalAvailable} topics ready
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Missing:</span>
              <span className="text-orange-600 font-medium">
                {grammarSummary.totalPossible - grammarSummary.totalAvailable}{" "}
                topics
              </span>
            </div>
          </div>

          {/* Link to Available Topics Page */}
          <div className="mt-3 pt-2 border-t border-gray-200">
            <Link
              href="/grammar/available-topics"
              className="text-xs text-blue-600 hover:text-blue-800 underline"
            >
              View all available topics →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrammarNavigation;

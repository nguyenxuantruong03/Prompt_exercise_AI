"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Search,
  X,
  BookOpen,
  Menu,
} from "lucide-react";
import {
  grammarCategories,
  type GrammarCategory,
} from "@/lib/static/grammars/grammar-categories";
import { cn } from "@/lib/utils";

interface GrammarSidebarProps {
  currentPath?: string;
  className?: string;
}

const GrammarSidebar: React.FC<GrammarSidebarProps> = ({
  currentPath = "",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const isActive = (key: string) => {
    return currentPath.includes(`/grammar/${key.toLowerCase()}`);
  };

  const formatUrlPath = (key: string) => {
    return key.toLowerCase().replace(/_/g, "-");
  };

  const formatDisplayTitle = (title: string) => {
    return title.replace(/_/g, " ");
  };

  const filteredCategories = grammarCategories
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          !searchQuery.trim() ||
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg border border-gray-200 hover:bg-gray-50"
      >
        <Menu className="h-6 w-6 text-gray-600" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full w-80 bg-white shadow-lg max-h-80 transform transition-transform duration-300 ease-in-out z-50",
          "lg:relative lg:transform-none lg:shadow-none lg:border-r lg:border-gray-200",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link
            href="/grammar"
            className="flex items-center space-x-2 text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <BookOpen className="h-5 w-5" />
            <span>Grammar Guide</span>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          {filteredCategories.length === 0 && searchQuery ? (
            <div className="p-4 text-center text-gray-500">
              <div className="text-sm">
                No topics found matching "{searchQuery}"
              </div>
            </div>
          ) : (
            <div className="py-2">
              {filteredCategories.map((category) => {
                const isExpanded = expandedCategories.has(category.id);
                const hasActiveItem = category.items.some((item) =>
                  isActive(item.key)
                );

                return (
                  <div
                    key={category.id}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className={cn(
                        "w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors",
                        hasActiveItem && "bg-blue-50"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{category.icon}</span>
                        <div>
                          <div
                            className={cn(
                              "text-sm font-medium",
                              hasActiveItem ? "text-blue-700" : "text-gray-900"
                            )}
                          >
                            {category.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {category.items.length} topics
                          </div>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-gray-500" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="bg-gray-50">
                        {category.items.map((item) => (
                          <Link
                            key={item.key}
                            href={`/grammar/${formatUrlPath(item.key)}`}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "block px-6 py-3 text-sm hover:bg-white transition-colors border-b border-gray-100 last:border-b-0",
                              isActive(item.key) &&
                                "bg-blue-100 text-blue-700 border-l-4 border-l-blue-500"
                            )}
                          >
                            <div className="font-medium">
                              {formatDisplayTitle(item.title)}
                            </div>
                            {item.description && (
                              <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {item.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 text-xs text-gray-500">
          <div className="flex justify-between items-center">
            <span>
              {grammarCategories.reduce(
                (sum, cat) => sum + cat.items.length,
                0
              )}{" "}
              total topics
            </span>
            <span>Grammar Guide v2.0</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrammarSidebar;

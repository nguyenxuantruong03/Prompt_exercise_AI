"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, BookOpen } from "lucide-react";
import {
  grammarCategories,
  type GrammarCategory,
  type GrammarItem,
} from "@/lib/static/grammars/grammar-categories";
import { cn } from "@/lib/utils";

interface GrammarNavbarProps {
  currentPath?: string;
  className?: string;
}

const GrammarNavbar: React.FC<GrammarNavbarProps> = ({
  currentPath = "",
  className = "",
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter grammar items based on search query
  const getFilteredItems = (items: GrammarItem[]) => {
    if (!searchQuery.trim()) return items;

    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
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

  return (
    <nav
      className={cn(
        "bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home Link */}
          <div className="flex items-center">
            <Link
              href="/grammar"
              className="flex items-center space-x-2 text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
            >
              <BookOpen className="h-6 w-6" />
              <span>Grammar Guide</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search grammar topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation Categories */}
          <div className="hidden lg:flex items-center space-x-1">
            {grammarCategories.slice(0, 8).map((category) => (
              <div
                key={category.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(category.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === category.id && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-900 flex items-center">
                        <span className="mr-2">{category.icon}</span>
                        {category.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {category.description}
                      </p>
                    </div>

                    <div className="max-h-96 overflow-y-auto">
                      {getFilteredItems(category.items).map((item) => (
                        <Link
                          key={item.key}
                          href={`/grammar/${formatUrlPath(item.key)}`}
                          className={cn(
                            "block px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0",
                            isActive(item.key) &&
                              "bg-blue-50 text-blue-700 border-l-4 border-l-blue-500"
                          )}
                        >
                          <div className="font-medium text-slate-900">
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

                    {getFilteredItems(category.items).length === 0 &&
                      searchQuery && (
                        <div className="px-4 py-3 text-sm text-gray-500 text-center">
                          No topics found matching "{searchQuery}"
                        </div>
                      )}
                  </div>
                )}
              </div>
            ))}

            {/* More Categories Dropdown */}
            {grammarCategories.length > 8 && (
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("more")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">
                  <span>More</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {activeDropdown === "more" && (
                  <div className="absolute top-full right-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-900">
                        More Categories
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Additional grammar topics
                      </p>
                    </div>

                    <div className="max-h-96 overflow-y-auto">
                      {grammarCategories.slice(8).map((category) => (
                        <div
                          key={category.id}
                          className="border-b border-gray-50 last:border-b-0"
                        >
                          <div className="px-4 py-2 bg-gray-50">
                            <h4 className="text-xs font-semibold text-gray-700 flex items-center">
                              <span className="mr-2">{category.icon}</span>
                              {category.title}
                            </h4>
                          </div>
                          {getFilteredItems(category.items)
                            .slice(0, 3)
                            .map((item) => (
                              <Link
                                key={item.key}
                                href={`/grammar/${formatUrlPath(item.key)}`}
                                className={cn(
                                  "text-slate-900 block px-6 py-2 text-xs hover:bg-gray-50 transition-colors",
                                  isActive(item.key) &&
                                    "bg-blue-50 text-blue-700"
                                )}
                              >
                                {formatDisplayTitle(item.title)}
                              </Link>
                            ))}
                          {category.items.length > 3 && (
                            <div className="px-6 py-1 text-xs text-gray-500">
                              +{category.items.length - 3} more...
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Search Results Dropdown */}
        {searchQuery && (
          <div className="absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-lg z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Search Results for "{searchQuery}"
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                {grammarCategories.map((category) => {
                  const filteredItems = getFilteredItems(category.items);
                  if (filteredItems.length === 0) return null;

                  return (
                    <div key={category.id} className="space-y-2">
                      <h4 className="text-xs font-medium text-gray-500 flex items-center">
                        <span className="mr-1">{category.icon}</span>
                        {category.title}
                      </h4>
                      {filteredItems.slice(0, 5).map((item) => (
                        <Link
                          key={item.key}
                          href={`/grammar/${formatUrlPath(item.key)}`}
                          className="block p-2 text-sm hover:bg-gray-50 rounded transition-colors"
                          onClick={() => setSearchQuery("")}
                        >
                          <div className="font-medium">
                            {formatDisplayTitle(item.title)}
                          </div>
                          {item.description && (
                            <div className="text-xs text-gray-500 line-clamp-1 mt-1">
                              {item.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GrammarNavbar;

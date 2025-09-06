"use client";

import React, { useState } from "react";
import Link from "next/link";
import GrammarLayout from "@/components/navigation/GrammarLayout";
import {
  grammarCategories,
  type GrammarCategory,
} from "@/lib/static/grammars/grammar-categories";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search, Filter, Grid, List } from "lucide-react";
import { cn } from "@/lib/utils";

const GrammarIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter logic
  const filteredCategories = grammarCategories
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          (selectedCategory === "all" || category.id === selectedCategory) &&
          (!searchQuery.trim() ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description
              ?.toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            category.title.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }))
    .filter((category) => category.items.length > 0);

  const totalTopics = grammarCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );
  const filteredTopics = filteredCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );

  const formatUrlPath = (key: string) => {
    return key.toLowerCase().replace(/_/g, "-");
  };

  const formatDisplayTitle = (title: string) => {
    return title.replace(/_/g, " ");
  };

  return (
    <GrammarLayout showSidebar={false}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <BookOpen className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Grammar Guide
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore all {totalTopics} English grammar topics organized into{" "}
            {grammarCategories.length} comprehensive categories
          </p>

          {/* Search and Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center mb-8 max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search grammar topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Categories</option>
                {grammarCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.title}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "px-4 py-3 flex items-center gap-2 transition-colors",
                  viewMode === "grid"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                )}
              >
                <Grid className="h-4 w-4" />
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "px-4 py-3 flex items-center gap-2 transition-colors border-l border-gray-300",
                  viewMode === "list"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                )}
              >
                <List className="h-4 w-4" />
                List
              </button>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-600">
            Showing {filteredTopics} of {totalTopics} topics
            {searchQuery && ` matching "${searchQuery}"`}
            {selectedCategory !== "all" &&
              ` in ${
                grammarCategories.find((c) => c.id === selectedCategory)?.title
              }`}
          </p>
        </div>

        {/* Content */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No topics found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <section
                key={category.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                {/* Category Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {category.title}
                        </h2>
                        <p className="text-gray-600 mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      {category.items.length} topic
                      {category.items.length !== 1 ? "s" : ""}
                    </Badge>
                  </div>
                </div>

                {/* Topics */}
                <div className="p-6">
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {category.items.map((item) => (
                        <Link
                          key={item.key}
                          href={`/grammar/${formatUrlPath(item.key)}`}
                          className="group p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all bg-white"
                        >
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                            {formatDisplayTitle(item.title)}
                          </div>
                          {item.description && (
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {item.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {category.items.map((item) => (
                        <Link
                          key={item.key}
                          href={`/grammar/${formatUrlPath(item.key)}`}
                          className="group flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {formatDisplayTitle(item.title)}
                            </div>
                            {item.description && (
                              <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                            →
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Start Learning Today
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Choose any topic from our comprehensive grammar guide and begin
            mastering English grammar step by step. Each topic includes detailed
            explanations, examples, and common mistakes to avoid.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {grammarCategories.slice(0, 4).map((category) => (
              <Badge key={category.id} variant="outline" className="text-sm">
                {category.icon} {category.title}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </GrammarLayout>
  );
};

export default GrammarIndexPage;

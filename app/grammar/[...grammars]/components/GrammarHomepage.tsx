"use client";

import React from "react";
import { BookOpen } from "lucide-react";
import GrammarNavigation from "@/components/navigation/GrammarNavigation";
import { grammarCategories } from "@/lib/static/grammars/grammar-categories";

const GrammarHomepage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center py-16">
        <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Grammar Guide
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Master English grammar with our comprehensive collection
        </p>

        {/* Status Info */}
        <div className="mb-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Choose a topic to get started
          </h2>
          <p className="text-gray-600">
            Use the navigation panel on the right to explore available
            grammar topics, organized by category for easy learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {grammarCategories.slice(0, 6).map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {category.description}
              </p>
              <div className="text-sm text-blue-600 font-medium">
                {category.items.length} topics
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Choose a topic to get started
          </h2>
          <p className="text-gray-600">
            Use the navigation panel on the right to explore available
            grammar topics, organized by category for easy learning.
          </p>
        </div>
      </div>

      {/* Grammar Navigation for Homepage */}
      <GrammarNavigation />
    </div>
  );
};

export default GrammarHomepage;

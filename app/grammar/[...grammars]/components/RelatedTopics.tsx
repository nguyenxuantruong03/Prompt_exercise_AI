import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
} from "lucide-react";
import { grammarCategories } from "@/lib/static/grammars/grammar-categories";

interface RelatedTopicsProps {
  currentGrammarKey: string;
  grammarInfo: any;
}

const RelatedTopics: React.FC<RelatedTopicsProps> = ({
  currentGrammarKey,
  grammarInfo,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    grammarInfo.category.id
  );

  // Get current category items (excluding current topic)
  const currentCategoryItems = grammarInfo.category.items
    .filter((item: any) => item.key !== currentGrammarKey)
    .slice(0, isExpanded ? undefined : 6);

  // Get related categories (same family of topics)
  const relatedCategories = grammarCategories.filter(
    (cat) => cat.id !== grammarInfo.category.id
  );

  // Suggest highly related topics based on common patterns
  const getSuggestedTopics = () => {
    const suggestions = [];

    // If current is a tense, suggest other tenses and related structures
    if (grammarInfo.category.id === "tenses") {
      const verbForms = grammarCategories.find((cat) => cat.id === "verbs");
      const modal = grammarCategories.find((cat) => cat.id === "modal-verbs");
      if (verbForms) suggestions.push(...verbForms.items.slice(0, 3));
      if (modal) suggestions.push(...modal.items.slice(0, 2));
    }

    // If current is a noun topic, suggest articles and adjectives
    if (grammarInfo.category.id === "nouns") {
      const articles = grammarCategories.find((cat) => cat.id === "articles");
      const adjectives = grammarCategories.find(
        (cat) => cat.id === "adjectives"
      );
      if (articles) suggestions.push(...articles.items.slice(0, 2));
      if (adjectives) suggestions.push(...adjectives.items.slice(0, 2));
    }

    // If current is modal verbs, suggest tenses and conditionals
    if (grammarInfo.category.id === "modal-verbs") {
      const tenses = grammarCategories.find((cat) => cat.id === "tenses");
      const conditionals = grammarCategories.find(
        (cat) => cat.id === "conditionals"
      );
      if (tenses) suggestions.push(...tenses.items.slice(0, 3));
      if (conditionals) suggestions.push(...conditionals.items.slice(0, 2));
    }

    return suggestions.slice(0, 5);
  };

  const suggestedTopics = getSuggestedTopics();

  return (
    <div className="mt-12 space-y-8">
      {/* Highly Related Topics */}
      {suggestedTopics.length > 0 && (
        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-yellow-500" />
            <h3 className="text-lg font-semibold text-gray-900">
              Highly Recommended
            </h3>
            <Badge className="bg-yellow-100 text-yellow-800 text-xs">
              Most Related
            </Badge>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Topics that work together with <strong>{grammarInfo.title}</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {suggestedTopics.map((item: any, index: number) => (
              <a
                key={item.key}
                href={`/grammar/${item.key.toLowerCase().replace(/_/g, "-")}`}
                className="group flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-200"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-700 truncate">
                    {item.title.replace(/_/g, " ")}
                  </h4>
                  {item.description && (
                    <p className="text-xs text-gray-500 truncate">
                      {item.description}
                    </p>
                  )}
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Same Category Topics */}
      <div className="border-t border-gray-200 pt-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-sm">{grammarInfo.category.icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              More in {grammarInfo.category.title}
            </h3>
            <Badge variant="outline" className="text-xs">
              {grammarInfo.category.items.length - 1} topics
            </Badge>
          </div>

          {grammarInfo.category.items.length > 6 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:text-blue-700"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4 ml-1" />
                </>
              ) : (
                <>
                  Show All <ChevronDown className="h-4 w-4 ml-1" />
                </>
              )}
            </Button>
          )}
        </div>

        <p className="text-sm text-gray-600 mb-4">
          {grammarInfo.category.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {currentCategoryItems.map((item: any) => (
            <a
              key={item.key}
              href={`/grammar/${item.key.toLowerCase().replace(/_/g, "-")}`}
              className="group flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all duration-200 bg-white"
            >
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200">
                <BookOpen className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 group-hover:text-green-700 truncate">
                  {item.title.replace(/_/g, " ")}
                </h4>
                {item.description && (
                  <p className="text-xs text-gray-500 truncate mt-1">
                    {item.description}
                  </p>
                )}
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </div>

      {/* Explore Other Categories */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-purple-600" />
          Explore Other Grammar Topics
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {relatedCategories.slice(0, 8).map((category) => (
            <a
              key={category.id}
              href={`/grammar`}
              className="group p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all duration-200 bg-white text-center"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-purple-200">
                <span className="text-xl">{category.icon}</span>
              </div>
              <h4 className="font-medium text-gray-900 group-hover:text-purple-700 text-sm mb-1">
                {category.title}
              </h4>
              <p className="text-xs text-gray-500 mb-2">
                {category.items.length} topics
              </p>
              <Badge variant="outline" className="text-xs">
                Explore
              </Badge>
            </a>
          ))}
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-600">
              Continue learning with related topics
            </span>
          </div>
          <a
            href="/grammar"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            View All Topics
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RelatedTopics;

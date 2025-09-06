"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  BookOpen,
  TrendingUp,
  Target,
} from "lucide-react";
import { getAvailableGrammarSummary } from "@/lib/utils/filter-available-grammar";

interface GrammarStatusBannerProps {
  className?: string;
}

const GrammarStatusBanner: React.FC<GrammarStatusBannerProps> = ({
  className = "",
}) => {
  const summary = getAvailableGrammarSummary();

  return (
    <div
      className={`bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8 ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Grammar Content Status
            </h3>
            <p className="text-sm text-gray-600">
              Track your progress through available grammar topics
            </p>
          </div>
        </div>
        <Badge variant="secondary" className="bg-green-100 text-green-700">
          Active Database
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        {/* Available Topics */}
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
          <div className="p-2 bg-green-100 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <div className="text-2xl font-bold text-green-700">
              {summary.totalAvailable}
            </div>
            <div className="text-sm text-gray-600">Topics Ready</div>
          </div>
        </div>

        {/* In Development */}
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Clock className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-700">
              {summary.totalPossible - summary.totalAvailable}
            </div>
            <div className="text-sm text-gray-600">In Development</div>
          </div>
        </div>

        {/* Completion Rate */}
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
          <div className="p-2 bg-blue-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-700">
              {summary.completionPercentage}%
            </div>
            <div className="text-sm text-gray-600">Complete</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700 font-medium">Overall Progress</span>
          <span className="text-gray-600">
            {summary.totalAvailable} of {summary.totalPossible} topics
          </span>
        </div>
        <Progress value={summary.completionPercentage} className="h-3" />
      </div>

      {/* Categories Status */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">
          Categories Overview
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {summary.categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center gap-2 p-2 bg-white rounded border border-gray-200"
            >
              <span className="text-lg">{category.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-gray-900 truncate">
                  {category.title}
                </div>
                <div className="text-xs text-gray-600">
                  {category.items.length} topics
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Footer */}
      <div className="mt-4 pt-4 border-t border-blue-200">
        <div className="flex items-center gap-2 text-sm text-blue-700">
          <AlertTriangle className="w-4 h-4" />
          <span>
            Only topics with complete content are shown in navigation. More
            topics are being added regularly!
          </span>
        </div>
      </div>
    </div>
  );
};

export default GrammarStatusBanner;

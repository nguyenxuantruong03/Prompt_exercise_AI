"use client";

import { useState, useEffect } from "react";
import { mistakeTracker } from "@/lib/static/grammars/mistake-tracker";
import { MistakeAnalytics, ChartData } from "@/types/grammars/grammars_type";
import Modal from "@/components/shared/modals/Modal";
import { generateAnalyticsPDF } from "@/components/shared/format/PDF/chart-analytics/chart-analytics-generate";
import { Button } from "@/components/ui/button";

interface ChartComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

type ChartType =
  | "accuracy-by-tense"
  | "performance-trends"
  | "difficulty-distribution"
  | "topic-mastery"
  | "learning-velocity"
  | "exercise-type-performance"
  | "weekly-consistency"
  | "error-patterns"
  | "proficiency-progression"
  | "time-based-accuracy";

const ChartComponent: React.FC<ChartComponentProps> = ({ isOpen, onClose }) => {
  const [analytics, setAnalytics] = useState<MistakeAnalytics | null>(null);
  const [selectedChart, setSelectedChart] =
    useState<ChartType>("accuracy-by-tense");
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(false);

  // Chart configurations with descriptions and visual styles
  const chartConfigs = {
    "accuracy-by-tense": {
      title: "🎯 Accuracy by Grammar Tense",
      description: "Success rate percentage for each grammar tense",
      type: "bar",
      icon: "📊",
      color: "from-green-500 to-blue-500",
    },
    "performance-trends": {
      title: "📈 Weekly Performance Trends",
      description: "Average mistakes per session over the last 8 weeks",
      type: "line",
      icon: "📉",
      color: "from-blue-500 to-indigo-500",
    },
    "difficulty-distribution": {
      title: "⚡ Success Rate by Difficulty",
      description:
        "Performance comparison across Easy, Medium, and Hard questions",
      type: "pie",
      icon: "🎭",
      color: "from-yellow-500 to-red-500",
    },
    "topic-mastery": {
      title: "🏆 Topic Mastery Levels",
      description: "Improvement progress in different grammar topics",
      type: "bar",
      icon: "📚",
      color: "from-purple-500 to-pink-500",
    },
    "learning-velocity": {
      title: "🚀 Daily Learning Activity",
      description: "Daily practice intensity over the last 30 days",
      type: "area",
      icon: "⚡",
      color: "from-purple-500 to-violet-500",
    },
    // NEW CHARTS
    "exercise-type-performance": {
      title: "🎯 Exercise Type Performance",
      description:
        "Success rates across different exercise formats (multiple-choice, fill-in-blank, etc.)",
      type: "bar",
      icon: "📝",
      color: "from-orange-500 to-red-500",
    },
    "weekly-consistency": {
      title: "📅 Weekly Practice Consistency",
      description:
        "Consistency score based on practice days and activity over 12 weeks",
      type: "line",
      icon: "🗓️",
      color: "from-green-500 to-emerald-500",
    },
    "error-patterns": {
      title: "🕐 Error Patterns by Time",
      description: "Distribution of mistakes across different times of day",
      type: "pie",
      icon: "⏰",
      color: "from-yellow-500 to-amber-500",
    },
    "proficiency-progression": {
      title: "🎓 CEFR Level Progression",
      description: "Mastery levels across A1-C2 proficiency levels",
      type: "bar",
      icon: "📈",
      color: "from-indigo-500 to-blue-500",
    },
    "time-based-accuracy": {
      title: "⏱️ Hourly Performance Analysis",
      description: "Accuracy trends throughout 24-hour periods",
      type: "area",
      icon: "🕒",
      color: "from-violet-500 to-purple-500",
    },
  };

  useEffect(() => {
    if (isOpen) {
      loadAnalytics();
    }
  }, [isOpen]);

  useEffect(() => {
    if (analytics) {
      const data = mistakeTracker.getSpecializedChartData(selectedChart);
      setChartData(data);
    }
  }, [analytics, selectedChart]);

  const loadAnalytics = () => {
    setLoading(true);
    try {
      const data = mistakeTracker.getAnalytics();
      setAnalytics(data);
    } catch (error) {
      console.error("Failed to load analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearAllData = () => {
    if (
      confirm(
        "Are you sure you want to clear all mistake data? This action cannot be undone."
      )
    ) {
      mistakeTracker.clearAllMistakes();
      setAnalytics(null);
      setChartData(null);
      loadAnalytics();
    }
  };

  // Enhanced chart renderer with different visualization types
  const renderChart = () => {
    if (!chartData || !chartData.labels.length) {
      return (
        <div className="flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="text-center">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-gray-500 dark:text-gray-400">
              No data available for this chart
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
              Complete some exercises to see your analytics!
            </p>
          </div>
        </div>
      );
    }

    const config = chartConfigs[selectedChart];

    if (config.type === "line" || config.type === "area") {
      return renderLineChart();
    } else if (config.type === "pie") {
      return renderPieChart();
    } else {
      return renderBarChart();
    }
  };

  // Enhanced bar chart with better styling
  const renderBarChart = () => {
    if (!chartData) return null;

    const maxValue = Math.max(...chartData.datasets[0].data);

    return (
      <div className="space-y-6">
        <div className="grid gap-4">
          {chartData.labels.map((label, index) => {
            const value = chartData.datasets[0].data[index];
            const percentage = maxValue > 0 ? (value / maxValue) * 100 : 0;
            const colors = Array.isArray(chartData.datasets[0].backgroundColor)
              ? chartData.datasets[0].backgroundColor
              : [chartData.datasets[0].backgroundColor];
            const color = colors[index % colors.length] || "#3B82F6";

            return (
              <div
                key={label}
                className="group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 rounded-lg transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300 truncate max-w-[200px]"
                    title={label}
                  >
                    {label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      {selectedChart === "accuracy-by-tense" ||
                      selectedChart === "difficulty-distribution" ||
                      selectedChart === "topic-mastery"
                        ? `${value}%`
                        : value}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({Math.round(percentage)}%)
                    </span>
                  </div>
                </div>
                <div className="bg-gray-200 dark:bg-gray-600 rounded-full h-4 relative overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out relative"
                    style={{
                      width: `${Math.max(percentage, 2)}%`,
                      backgroundColor: color,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chart insights */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
            💡 Chart Insights
          </h4>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            {getChartInsights()}
          </p>
        </div>
      </div>
    );
  };

  // Enhanced pie chart visualization
  const renderPieChart = () => {
    if (!chartData) return null;

    const total = chartData.datasets[0].data.reduce(
      (sum, value) => sum + value,
      0
    );
    const colors = Array.isArray(chartData.datasets[0].backgroundColor)
      ? chartData.datasets[0].backgroundColor
      : [chartData.datasets[0].backgroundColor];

    return (
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Pie chart visualization */}
          <div className="relative w-64 h-64">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 200 200"
            >
              {chartData.labels.map((label, index) => {
                const value = chartData.datasets[0].data[index];
                const percentage = (value / total) * 100;
                const strokeDasharray = `${percentage * 2.51} 251.2`; // 2π * 40 = 251.2
                const strokeDashoffset =
                  index === 0
                    ? 0
                    : (-chartData.datasets[0].data
                        .slice(0, index)
                        .reduce((sum, v) => sum + v, 0) /
                        total) *
                      251.2;

                return (
                  <circle
                    key={label}
                    cx="100"
                    cy="100"
                    r="40"
                    fill="none"
                    stroke={colors[index] || "#3B82F6"}
                    strokeWidth="20"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-500 hover:stroke-width-[24]"
                  />
                );
              })}

              {/* Center text */}
              <text
                x="100"
                y="95"
                textAnchor="middle"
                className="text-sm font-bold fill-gray-700 dark:fill-gray-300"
                transform="rotate(90 100 100)"
              >
                Success
              </text>
              <text
                x="100"
                y="110"
                textAnchor="middle"
                className="text-xs fill-gray-500 dark:fill-gray-400"
                transform="rotate(90 100 100)"
              >
                Rates
              </text>
            </svg>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            {chartData.labels.map((label, index) => {
              const value = chartData.datasets[0].data[index];
              const percentage = Math.round((value / total) * 100);

              return (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: colors[index] || "#3B82F6" }}
                  ></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-700 dark:text-gray-300">
                      {label}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {value}% success rate ({percentage}% of total)
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            📊 Difficulty Analysis
          </h4>
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            {getChartInsights()}
          </p>
        </div>
      </div>
    );
  };

  // Enhanced line chart with area fill
  const renderLineChart = () => {
    if (!chartData) return null;

    const data = chartData.datasets[0].data;
    const maxValue = Math.max(...data, 1);
    const config = chartConfigs[selectedChart];

    return (
      <div className="space-y-6">
        <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 240">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <g key={y}>
                <line
                  x1="40"
                  y1={200 - y * 1.6}
                  x2="380"
                  y2={200 - y * 1.6}
                  stroke="#E5E7EB"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />
                <text
                  x="35"
                  y={205 - y * 1.6}
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="end"
                >
                  {selectedChart === "performance-trends" ? y / 10 : y}
                  {selectedChart !== "performance-trends" &&
                  selectedChart !== "learning-velocity"
                    ? "%"
                    : ""}
                </text>
              </g>
            ))}

            {/* Area fill */}
            {config.type === "area" && (
              <polygon
                points={`40,200 ${data
                  .map((value, index) => {
                    const x = 40 + index * (340 / Math.max(data.length - 1, 1));
                    const y = 200 - (value / maxValue) * 160;
                    return `${x},${y}`;
                  })
                  .join(" ")} ${
                  40 + (data.length - 1) * (340 / Math.max(data.length - 1, 1))
                },200`}
                fill="url(#areaGradient)"
                opacity="0.3"
              />
            )}

            {/* Gradient definition */}
            <defs>
              <linearGradient
                id="areaGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Line */}
            <polyline
              points={data
                .map((value, index) => {
                  const x = 40 + index * (340 / Math.max(data.length - 1, 1));
                  const y = 200 - (value / maxValue) * 160;
                  return `${x},${y}`;
                })
                .join(" ")}
              fill="none"
              stroke={config.type === "area" ? "#A855F7" : "#3B82F6"}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data points */}
            {data.map((value, index) => {
              const x = 40 + index * (340 / Math.max(data.length - 1, 1));
              const y = 200 - (value / maxValue) * 160;
              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill={config.type === "area" ? "#A855F7" : "#3B82F6"}
                    stroke="white"
                    strokeWidth="2"
                    className="hover:r-6 transition-all cursor-pointer"
                  />
                  <text
                    x={x}
                    y={y - 10}
                    fontSize="10"
                    fill="#374151"
                    textAnchor="middle"
                    className="opacity-0 hover:opacity-100 transition-opacity"
                  >
                    {value}
                    {selectedChart !== "performance-trends" &&
                    selectedChart !== "learning-velocity"
                      ? "%"
                      : ""}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Trend analysis */}
        <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
            📈 Trend Analysis
          </h4>
          <p className="text-sm text-purple-700 dark:text-purple-300">
            {getChartInsights()}
          </p>
        </div>
      </div>
    );
  };

  // Generate contextual insights for each chart
  const getChartInsights = (): string => {
    if (!chartData || !chartData.datasets[0].data.length)
      return "No data available for insights.";

    const data = chartData.datasets[0].data;
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const avgValue = Math.round(
      data.reduce((sum, val) => sum + val, 0) / data.length
    );
    const maxIndex = data.indexOf(maxValue);
    const minIndex = data.indexOf(minValue);

    switch (selectedChart) {
      case "accuracy-by-tense":
        return `Your strongest tense is "${chartData.labels[maxIndex]}" with ${maxValue}% accuracy. Focus on improving "${chartData.labels[minIndex]}" (${minValue}% accuracy).`;

      case "performance-trends":
        const trend =
          data[data.length - 1] > data[0] ? "increasing" : "decreasing";
        return `Your mistake rate is ${trend} over time. Recent average: ${
          data[data.length - 1]
        } mistakes per session. ${
          trend === "decreasing"
            ? "Great improvement!"
            : "Consider reviewing basics."
        }`;

      case "difficulty-distribution":
        const bestDifficulty = chartData.labels[maxIndex];
        return `You perform best on ${bestDifficulty} questions (${maxValue}% success). Overall average: ${avgValue}%. Consider more practice on challenging levels.`;

      case "topic-mastery":
        return `Highest mastery: "${chartData.labels[maxIndex]}" (${maxValue}%). Needs attention: "${chartData.labels[minIndex]}" (${minValue}%). Keep practicing consistently!`;

      case "learning-velocity":
        const totalActivity = data.reduce((sum, val) => sum + val, 0);
        const mostActiveDay = chartData.labels[maxIndex];
        return `Total practice sessions: ${totalActivity} over 30 days. Most active day: ${mostActiveDay} (${maxValue} mistakes). Consistency is key to improvement!`;

      case "exercise-type-performance":
        return `Best performance in "${chartData.labels[maxIndex]}" exercises (${maxValue}% success). Consider reviewing "${chartData.labels[minIndex]}" type for improvement.`;

      case "weekly-consistency":
        const consistentTrend =
          data[data.length - 1] > data[0] ? "improving" : "declining";
        return `Your practice consistency is ${consistentTrend}. Latest score: ${
          data[data.length - 1]
        }. Aim for regular practice to maintain/improve consistency.`;

      case "error-patterns":
        return `Most mistakes occur ${
          maxValue > 50 ? "mostly" : "occasionally"
        } in the ${
          chartData.labels[maxIndex]
        } time slot. Consider reviewing your schedule or focus during these times.`;

      case "proficiency-progression":
        return `Significant progress from ${chartData.labels[minIndex]} to ${chartData.labels[maxIndex]}. Keep up the great work and aim for consistent practice across all levels!`;

      case "time-based-accuracy":
        return `Highest accuracy at ${chartData.labels[maxIndex]} with ${maxValue}%. Analyze your performance patterns throughout the day for optimal practice timing.`;

      default:
        return "Analysis data is being processed...";
    }
  };

  // Export comprehensive analytics data to PDF
  const exportPDFData = () => {
    if (!analytics) return;

    try {
      const success = generateAnalyticsPDF(analytics);
      if (success) {
        console.log("📥 PDF report generated successfully!");
      } else {
        alert("Failed to generate PDF report. Please try again.");
      }
    } catch (error) {
      console.error("Failed to generate PDF report:", error);
      alert("Failed to generate PDF report. Please try again.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="📊 Grammar Analytics Dashboard"
      subtitle="Comprehensive analysis of your learning progress with 5 specialized charts"
      maxWidth="max-w-7xl"
      maxHeight="max-h-[95vh]"
      headerLayoutMode="modern"
      footer={
        analytics &&
        analytics.totalMistakes > 0 && (
          <div className="flex gap-3 justify-end">
            <Button
              onClick={exportPDFData}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
            >
              📥 Full Report
            </Button>
            <Button
              onClick={clearAllData}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2"
            >
              🗑️ Clear All
            </Button>
          </div>
        )
      }
    >
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">
              Loading your analytics...
            </p>
          </div>
        </div>
      ) : !analytics || analytics.totalMistakes === 0 ? (
        <div className="text-center py-16">
          <div className="text-8xl mb-6">📈</div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Start Your Learning Journey
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
            Complete some grammar exercises to unlock detailed analytics and
            track your progress across multiple dimensions!
          </p>
          <Button
            onClick={onClose}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 font-semibold transition-all shadow-lg"
          >
            Start Learning Now
          </Button>
        </div>
      ) : (
        <>
          {/* Chart Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              🎯 Select Analytics View
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {Object.entries(chartConfigs).map(([key, config]) => (
                <Button
                  key={key}
                  onClick={() => setSelectedChart(key as ChartType)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                    selectedChart === key
                      ? `bg-gradient-to-br ${config.color} text-white border-transparent shadow-lg scale-105`
                      : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{config.icon}</span>
                    <div className="text-sm font-bold">
                      {config.type.toUpperCase()}
                    </div>
                  </div>
                  <h4
                    className={`font-bold text-sm mb-1 ${
                      selectedChart === key
                        ? "text-white"
                        : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {config.title.replace(/^[^\s]+\s/, "")}
                  </h4>
                  <p
                    className={`text-xs leading-tight ${
                      selectedChart === key
                        ? "text-white/90"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {config.description}
                  </p>
                </Button>
              ))}
            </div>
          </div>

          {/* Selected Chart Display */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
            <div
              className={`bg-gradient-to-r ${chartConfigs[selectedChart].color} p-6 text-white`}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">
                  {chartConfigs[selectedChart].icon}
                </span>
                <div>
                  <h3 className="text-2xl font-bold">
                    {chartConfigs[selectedChart].title}
                  </h3>
                  <p className="text-white/90">
                    {chartConfigs[selectedChart].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">{renderChart()}</div>
          </div>

          {/* Weakest Areas */}
          {analytics.weakestAreas.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                ⚠️ Top Areas for Improvement
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {analytics.weakestAreas.map((area, index) => (
                  <div
                    key={area.area}
                    className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-red-800 dark:text-red-200">
                        {area.area}
                      </span>
                      <span className="text-red-600 dark:text-red-400 font-bold">
                        #{index + 1}
                      </span>
                    </div>
                    <div className="text-sm text-red-600 dark:text-red-400">
                      {area.count} mistakes ({area.percentage}%)
                    </div>
                    <div className="text-xs text-red-500 dark:text-red-500 mt-1">
                      Last: {area.lastOccurrence.toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Mistakes */}
          {analytics.recentMistakes.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                🕒 Recent Mistakes
              </h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {analytics.recentMistakes.map((mistake) => (
                  <div
                    key={mistake.id}
                    className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                          {mistake.question}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 space-x-4">
                          <span>
                            Your answer:{" "}
                            <span className="text-red-600 dark:text-red-400">
                              {Array.isArray(mistake.userAnswer)
                                ? mistake.userAnswer.join(", ")
                                : mistake.userAnswer}
                            </span>
                          </span>
                          <span>
                            Correct:{" "}
                            <span className="text-green-600 dark:text-green-400">
                              {Array.isArray(mistake.correctAnswer)
                                ? mistake.correctAnswer.join(", ")
                                : mistake.correctAnswer}
                            </span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-xs">
                          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                            {mistake.tense || "General"}
                          </span>
                          <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
                            {mistake.exerciseType}
                          </span>
                          <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
                            {mistake.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 ml-4">
                        {mistake.timestamp.toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </Modal>
  );
};

export default ChartComponent;

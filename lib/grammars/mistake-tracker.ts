import {
  MistakeRecord,
  MistakeAnalytics,
  ChartData,
  TypeExcercise,
  CEFRLevel,
  Question,
  PracticeRecommendations,
} from "@/types/grammars/grammars_type";

const STORAGE_KEY = "grammar_mistakes_analytics";
const MAX_STORED_MISTAKES = 1000; // Limit storage size

export class MistakeTracker {
  private static instance: MistakeTracker;

  static getInstance(): MistakeTracker {
    if (!MistakeTracker.instance) {
      MistakeTracker.instance = new MistakeTracker();
    }
    return MistakeTracker.instance;
  }

  // Save a mistake to localStorage
  saveMistake(
    question: Question,
    userAnswer: string | number | string[],
    exerciseType: TypeExcercise,
    proficiencyLevel: CEFRLevel,
    grammarTopic: string
  ): void {
    const mistake: MistakeRecord = {
      id: `mistake_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      question: question.question,
      userAnswer,
      correctAnswer: question.correct,
      tense: question.tense,
      exerciseType,
      proficiencyLevel,
      grammarTopic,
      explanation: question.explanation,
      difficulty: this.calculateDifficulty(proficiencyLevel, question.tense),
    };

    try {
      const existingData = this.loadMistakes();
      existingData.push(mistake);

      // Keep only the most recent mistakes to avoid storage bloat
      if (existingData.length > MAX_STORED_MISTAKES) {
        existingData.splice(0, existingData.length - MAX_STORED_MISTAKES);
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(existingData));
    } catch (error) {
      console.error("Failed to save mistake to localStorage:", error);
    }
  }

  // Load all mistakes from localStorage
  loadMistakes(): MistakeRecord[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return [];

      const mistakes = JSON.parse(data);
      // Convert timestamp strings back to Date objects
      return mistakes.map((mistake: MistakeRecord) => ({
        ...mistake,
        timestamp: new Date(mistake.timestamp),
      }));
    } catch (error) {
      console.error("Failed to load mistakes from localStorage:", error);
      return [];
    }
  }

  // Calculate comprehensive analytics
  getAnalytics(): MistakeAnalytics {
    const mistakes = this.loadMistakes();
    const totalMistakes = mistakes.length;

    if (totalMistakes === 0) {
      return this.getEmptyAnalytics();
    }

    // Group mistakes by different categories
    const mistakesByTense = this.groupBy(mistakes, "tense");
    const mistakesByExerciseType = this.groupBy(mistakes, "exerciseType");
    const mistakesByLevel = this.groupBy(mistakes, "proficiencyLevel");
    const mistakesByTopic = this.groupBy(mistakes, "grammarTopic");
    const mistakesByDifficulty = this.groupBy(mistakes, "difficulty");

    // Calculate improvement trends (last 30 days)
    const improvementTrends = this.calculateImprovementTrends(mistakes);

    // Find weakest areas
    const weakestAreas = this.calculateWeakestAreas(mistakes);

    // Calculate average accuracy (this would need session data)
    const averageAccuracy = this.calculateAverageAccuracy(mistakes);

    return {
      totalMistakes,
      mistakesByTense,
      mistakesByExerciseType,
      mistakesByLevel,
      mistakesByTopic,
      mistakesByDifficulty,
      averageAccuracy,
      recentMistakes: mistakes.slice(-10).reverse(), // Last 10 mistakes
      improvementTrends,
      weakestAreas,
    };
  }

  // Generate chart data for different visualizations
  getChartData(
    type: "tense" | "exerciseType" | "level" | "topic" | "difficulty"
  ): ChartData {
    const analytics = this.getAnalytics();
    let data: { [key: string]: number };
    let label: string;

    switch (type) {
      case "tense":
        data = analytics.mistakesByTense;
        label = "Mistakes by Tense";
        break;
      case "exerciseType":
        data = analytics.mistakesByExerciseType;
        label = "Mistakes by Exercise Type";
        break;
      case "level":
        data = analytics.mistakesByLevel;
        label = "Mistakes by CEFR Level";
        break;
      case "topic":
        data = analytics.mistakesByTopic;
        label = "Mistakes by Grammar Topic";
        break;
      case "difficulty":
        data = analytics.mistakesByDifficulty;
        label = "Mistakes by Difficulty";
        break;
      default:
        data = {};
        label = "Unknown";
    }

    const labels = Object.keys(data).filter(
      (key) => key && key !== "undefined"
    );
    const values = labels.map((label) => data[label] || 0);

    return {
      labels,
      datasets: [
        {
          label,
          data: values,
          backgroundColor: this.generateColors(labels.length),
          borderColor: this.generateColors(labels.length, 0.8),
          borderWidth: 2,
        },
      ],
    };
  }

  // Get trending improvement data for line charts
  getTrendingData(): ChartData {
    const analytics = this.getAnalytics();

    return {
      labels: analytics.improvementTrends.map((trend) => trend.date),
      datasets: [
        {
          label: "Accuracy Trend (%)",
          data: analytics.improvementTrends.map((trend) => trend.accuracy),
          borderColor: "#3B82F6",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          borderWidth: 3,
        },
      ],
    };
  }

  // Clear all stored mistakes
  clearAllMistakes(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Failed to clear mistakes from localStorage:", error);
    }
  }

  // Export mistakes as JSON
  exportMistakes(): string {
    const mistakes = this.loadMistakes();
    return JSON.stringify(mistakes, null, 2);
  }

  // Import mistakes from JSON
  importMistakes(jsonData: string): boolean {
    try {
      const mistakes = JSON.parse(jsonData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mistakes));
      return true;
    } catch (error) {
      console.error("Failed to import mistakes:", error);
      return false;
    }
  }

  // Private helper methods
  private groupBy(
    mistakes: MistakeRecord[],
    key: keyof MistakeRecord
  ): { [key: string]: number } {
    return mistakes.reduce((acc, mistake) => {
      const value = mistake[key] as string;
      const cleanValue = value || "Unknown";
      acc[cleanValue] = (acc[cleanValue] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
  }

  private calculateDifficulty(
    level: CEFRLevel,
    tense?: string
  ): "easy" | "medium" | "hard" {
    const levelDifficulty = {
      A1: 1,
      A2: 2,
      B1: 3,
      B2: 4,
      C1: 5,
      C2: 6,
    };

    const complexTenses = [
      "Past Perfect Continuous",
      "Future Perfect Continuous",
      "Present Perfect Continuous",
      "Subjunctive Mood",
      "Causative Form",
      "Inversion",
    ];

    const baseDifficulty = levelDifficulty[level] || 3;
    const tenseBonus = tense && complexTenses.includes(tense) ? 2 : 0;
    const totalDifficulty = baseDifficulty + tenseBonus;

    if (totalDifficulty <= 2) return "easy";
    if (totalDifficulty <= 4) return "medium";
    return "hard";
  }

  private calculateImprovementTrends(
    mistakes: MistakeRecord[]
  ): Array<{ date: string; accuracy: number; totalQuestions: number }> {
    // Group mistakes by date (last 30 days)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const recentMistakes = mistakes.filter((m) => m.timestamp >= thirtyDaysAgo);

    const dailyData: { [date: string]: { mistakes: number; total: number } } =
      {};

    recentMistakes.forEach((mistake) => {
      const dateKey = mistake.timestamp.toISOString().split("T")[0];
      if (!dailyData[dateKey]) {
        dailyData[dateKey] = { mistakes: 0, total: 0 };
      }
      dailyData[dateKey].mistakes += 1;
      dailyData[dateKey].total += 1; // This is simplified - in reality we'd track total questions
    });

    // Convert to trend format (assuming 5 questions per session on average)
    return Object.entries(dailyData)
      .map(([date, data]) => ({
        date: new Date(date).toLocaleDateString(),
        accuracy: Math.max(
          0,
          100 - (data.mistakes / Math.max(data.total * 1.5, 5)) * 100
        ),
        totalQuestions: data.total,
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-14); // Last 14 days
  }

  private calculateWeakestAreas(mistakes: MistakeRecord[]): Array<{
    area: string;
    count: number;
    percentage: number;
    lastOccurrence: Date;
  }> {
    const tenseGroups = this.groupBy(mistakes, "tense");
    const total = mistakes.length;

    return Object.entries(tenseGroups)
      .filter(([tense]) => tense && tense !== "Unknown")
      .map(([tense, count]) => {
        const tenseMistakes = mistakes.filter((m) => m.tense === tense);
        const lastOccurrence = new Date(
          Math.max(...tenseMistakes.map((m) => m.timestamp.getTime()))
        );

        return {
          area: tense,
          count,
          percentage: Math.round((count / total) * 100),
          lastOccurrence,
        };
      })
      .sort((a, b) => b.count - a.count)
      .slice(0, 5); // Top 5 weakest areas
  }

  private calculateAverageAccuracy(mistakes: MistakeRecord[]): number {
    // This is simplified - in a real implementation, we'd track both correct and incorrect answers
    // For now, we'll estimate based on mistake frequency
    const recentMistakes = mistakes.filter(
      (m) => m.timestamp >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    );

    if (recentMistakes.length === 0) return 85; // Default assumption

    // Estimate: assume average of 8 questions per session, recent mistakes suggest accuracy
    const estimatedTotalQuestions = recentMistakes.length * 1.8; // Rough estimation
    const accuracy = Math.max(
      20,
      100 - (recentMistakes.length / estimatedTotalQuestions) * 100
    );

    return Math.round(accuracy);
  }

  private getEmptyAnalytics(): MistakeAnalytics {
    return {
      totalMistakes: 0,
      mistakesByTense: {},
      mistakesByExerciseType: {},
      mistakesByLevel: {},
      mistakesByTopic: {},
      mistakesByDifficulty: {},
      averageAccuracy: 0,
      recentMistakes: [],
      improvementTrends: [],
      weakestAreas: [],
    };
  }

  private generateColors(count: number, opacity: number = 0.7): string[] {
    const colors = [
      `rgba(239, 68, 68, ${opacity})`, // Red
      `rgba(59, 130, 246, ${opacity})`, // Blue
      `rgba(34, 197, 94, ${opacity})`, // Green
      `rgba(251, 191, 36, ${opacity})`, // Yellow
      `rgba(168, 85, 247, ${opacity})`, // Purple
      `rgba(236, 72, 153, ${opacity})`, // Pink
      `rgba(20, 184, 166, ${opacity})`, // Teal
      `rgba(251, 146, 60, ${opacity})`, // Orange
      `rgba(99, 102, 241, ${opacity})`, // Indigo
      `rgba(139, 92, 246, ${opacity})`, // Violet
    ];

    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(colors[i % colors.length]);
    }
    return result;
  }

  // Enhanced chart data generation for different chart types
  getSpecializedChartData(
    chartType:
      | "accuracy-by-tense"
      | "performance-trends"
      | "difficulty-distribution"
      | "topic-mastery"
      | "learning-velocity"
      | "exercise-type-performance"
      | "weekly-consistency"
      | "error-patterns"
      | "proficiency-progression"
      | "time-based-accuracy"
  ): ChartData {
    const analytics = this.getAnalytics();
    const mistakes = this.loadMistakes();

    switch (chartType) {
      case "accuracy-by-tense":
        return this.getAccuracyByTenseChart(mistakes);

      case "performance-trends":
        return this.getPerformanceTrendsChart(mistakes);

      case "difficulty-distribution":
        return this.getDifficultyDistributionChart(mistakes);

      case "topic-mastery":
        return this.getTopicMasteryChart(mistakes);

      case "learning-velocity":
        return this.getLearningVelocityChart(mistakes);

      // NEW CHARTS
      case "exercise-type-performance":
        return this.getExerciseTypePerformanceChart(mistakes);

      case "weekly-consistency":
        return this.getWeeklyConsistencyChart(mistakes);

      case "error-patterns":
        return this.getErrorPatternsChart(mistakes);

      case "proficiency-progression":
        return this.getProficiencyProgressionChart(mistakes);

      case "time-based-accuracy":
        return this.getTimeBasedAccuracyChart(mistakes);

      default:
        return this.getChartData("tense");
    }
  }

  // Chart 1: Accuracy Rate by Grammar Tense (shows success rate, not just mistakes)
  private getAccuracyByTenseChart(mistakes: MistakeRecord[]): ChartData {
    const tenseGroups = this.groupBy(mistakes, "tense");

    // Estimate total questions per tense (simplified calculation)
    const accuracyData: {
      [tense: string]: {
        mistakes: number;
        estimated_total: number;
        accuracy: number;
      };
    } = {};

    Object.entries(tenseGroups).forEach(([tense, mistakeCount]) => {
      if (tense && tense !== "Unknown") {
        // Estimate total questions based on mistake frequency and typical session sizes
        const estimatedTotal = Math.max(mistakeCount * 2.5, mistakeCount + 3); // Rough estimation
        const accuracy = Math.round(
          ((estimatedTotal - mistakeCount) / estimatedTotal) * 100
        );

        accuracyData[tense] = {
          mistakes: mistakeCount,
          estimated_total: estimatedTotal,
          accuracy: Math.max(accuracy, 20), // Minimum 20% to avoid zero values
        };
      }
    });

    const labels = Object.keys(accuracyData);
    const accuracyValues = labels.map((tense) => accuracyData[tense].accuracy);

    return {
      labels,
      datasets: [
        {
          label: "Accuracy Rate by Tense (%)",
          data: accuracyValues,
          backgroundColor: this.generateGradientColors(
            labels.length,
            "green-blue"
          ),
          borderColor: this.generateGradientColors(
            labels.length,
            "green-blue",
            0.8
          ),
          borderWidth: 2,
        },
      ],
    };
  }

  // Chart 2: Performance Trends Over Time (weekly progress)
  private getPerformanceTrendsChart(mistakes: MistakeRecord[]): ChartData {
    const now = new Date();
    const weeks: { [week: string]: { mistakes: number; sessions: number } } =
      {};

    // Group mistakes by week for the last 8 weeks
    for (let i = 7; i >= 0; i--) {
      const weekStart = new Date(now.getTime() - i * 7 * 24 * 60 * 60 * 1000);
      const weekEnd = new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
      const weekKey = `Week ${8 - i}`;

      const weekMistakes = mistakes.filter(
        (m) => m.timestamp >= weekStart && m.timestamp < weekEnd
      );

      weeks[weekKey] = {
        mistakes: weekMistakes.length,
        sessions: Math.max(1, Math.ceil(weekMistakes.length / 3)), // Estimate sessions
      };
    }

    const labels = Object.keys(weeks);
    const mistakesPerSession = labels.map((week) => {
      const data = weeks[week];
      return data.sessions > 0
        ? Math.round((data.mistakes / data.sessions) * 10) / 10
        : 0;
    });

    return {
      labels,
      datasets: [
        {
          label: "Average Mistakes per Session",
          data: mistakesPerSession,
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          borderColor: "#3B82F6",
          borderWidth: 3,
        },
      ],
    };
  }

  // Chart 3: Difficulty Level Distribution (pie chart data)
  private getDifficultyDistributionChart(mistakes: MistakeRecord[]): ChartData {
    const difficultyGroups = this.groupBy(mistakes, "difficulty");

    // Add success estimates for each difficulty
    const difficultyData: {
      [difficulty: string]: { mistakes: number; success_rate: number };
    } = {};

    Object.entries(difficultyGroups).forEach(([difficulty, count]) => {
      // Estimate success rate based on difficulty
      let baseSuccessRate = 85;
      if (difficulty === "medium") baseSuccessRate = 70;
      if (difficulty === "hard") baseSuccessRate = 55;

      difficultyData[difficulty] = {
        mistakes: count,
        success_rate: Math.max(baseSuccessRate - count * 2, 30), // Adjust based on mistake frequency
      };
    });

    const labels = Object.keys(difficultyData).map(
      (d) => d.charAt(0).toUpperCase() + d.slice(1)
    );
    const successRates = Object.values(difficultyData).map(
      (d) => d.success_rate
    );

    return {
      labels,
      datasets: [
        {
          label: "Success Rate by Difficulty (%)",
          data: successRates,
          backgroundColor: [
            "rgba(34, 197, 94, 0.8)", // Green for easy
            "rgba(251, 191, 36, 0.8)", // Yellow for medium
            "rgba(239, 68, 68, 0.8)", // Red for hard
          ],
          borderColor: [
            "rgba(34, 197, 94, 1)",
            "rgba(251, 191, 36, 1)",
            "rgba(239, 68, 68, 1)",
          ],
          borderWidth: 2,
        },
      ],
    };
  }

  // Chart 4: Topic Mastery Level (shows improvement in different topics)
  private getTopicMasteryChart(mistakes: MistakeRecord[]): ChartData {
    const topicGroups = this.groupBy(mistakes, "grammarTopic");

    // Calculate mastery level for each topic
    const masteryData: { [topic: string]: number } = {};

    Object.entries(topicGroups).forEach(([topic, mistakeCount]) => {
      if (topic && topic !== "Unknown") {
        // Calculate mastery based on recent mistakes vs older mistakes
        const recentMistakes = mistakes.filter(
          (m) =>
            m.grammarTopic === topic &&
            m.timestamp >= new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) // Last 2 weeks
        ).length;

        const olderMistakes = mistakes.filter(
          (m) =>
            m.grammarTopic === topic &&
            m.timestamp < new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
        ).length;

        // Mastery improves if recent mistakes are fewer than older mistakes
        let masteryLevel = 50; // Base level
        if (olderMistakes > 0) {
          const improvement =
            ((olderMistakes - recentMistakes) / olderMistakes) * 50;
          masteryLevel = Math.max(20, Math.min(95, 50 + improvement));
        }

        masteryData[topic] = Math.round(masteryLevel);
      }
    });

    const labels = Object.keys(masteryData).slice(0, 10); // Top 10 topics
    const masteryLevels = labels.map((topic) => masteryData[topic]);

    return {
      labels,
      datasets: [
        {
          label: "Topic Mastery Level (%)",
          data: masteryLevels,
          backgroundColor: this.generateGradientColors(
            labels.length,
            "purple-pink"
          ),
          borderColor: this.generateGradientColors(
            labels.length,
            "purple-pink",
            0.8
          ),
          borderWidth: 2,
        },
      ],
    };
  }

  // Chart 5: Learning Velocity (mistakes per day over time)
  private getLearningVelocityChart(mistakes: MistakeRecord[]): ChartData {
    const last30Days: { [date: string]: number } = {};

    // Initialize last 30 days
    for (let i = 29; i >= 0; i--) {
      const date = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
      const dateKey = date.toISOString().split("T")[0];
      last30Days[dateKey] = 0;
    }

    // Count mistakes per day
    mistakes.forEach((mistake) => {
      const dateKey = mistake.timestamp.toISOString().split("T")[0];
      if (last30Days.hasOwnProperty(dateKey)) {
        last30Days[dateKey]++;
      }
    });

    const labels = Object.keys(last30Days).map((date) => {
      const d = new Date(date);
      return `${d.getMonth() + 1}/${d.getDate()}`;
    });

    const dailyMistakes = Object.values(last30Days);

    return {
      labels,
      datasets: [
        {
          label: "Daily Learning Activity (Mistakes Made)",
          data: dailyMistakes,
          backgroundColor: "rgba(168, 85, 247, 0.2)",
          borderColor: "#A855F7",
          borderWidth: 2,
        },
      ],
    };
  }

  // Chart 6: Exercise Type Performance (shows accuracy rate for each exercise format)
  private getExerciseTypePerformanceChart(
    mistakes: MistakeRecord[]
  ): ChartData {
    const exerciseTypes = this.groupBy(mistakes, "exerciseType");

    // Calculate performance metrics for each exercise type
    const performanceData: {
      [type: string]: {
        mistakes: number;
        accuracy: number;
        avgDifficulty: number;
      };
    } = {};

    Object.entries(exerciseTypes).forEach(([type, mistakeCount]) => {
      if (type && type !== "Unknown") {
        const typeMistakes = mistakes.filter((m) => m.exerciseType === type);

        // Estimate total questions for this type
        const estimatedTotal = Math.max(mistakeCount * 2.2, mistakeCount + 4);
        const accuracy = Math.round(
          ((estimatedTotal - mistakeCount) / estimatedTotal) * 100
        );

        // Calculate average difficulty
        const difficultyScores = typeMistakes.map((m) =>
          m.difficulty === "easy" ? 1 : m.difficulty === "medium" ? 2 : 3
        );
        const avgDifficulty =
          difficultyScores.length > 0
            ? difficultyScores.reduce((sum, score) => sum + score, 0) /
              difficultyScores.length
            : 2;

        performanceData[type] = {
          mistakes: mistakeCount,
          accuracy: Math.max(accuracy, 25),
          avgDifficulty: Math.round(avgDifficulty * 100) / 100,
        };
      }
    });

    const labels = Object.keys(performanceData).map((type) =>
      type
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
    const accuracyValues = Object.values(performanceData).map(
      (d) => d.accuracy
    );

    return {
      labels,
      datasets: [
        {
          label: "Exercise Type Success Rate (%)",
          data: accuracyValues,
          backgroundColor: this.generateGradientColors(
            labels.length,
            "orange-red"
          ),
          borderColor: this.generateGradientColors(
            labels.length,
            "orange-red",
            0.8
          ),
          borderWidth: 2,
        },
      ],
    };
  }

  // Chart 7: Weekly Consistency Score (measures practice regularity)
  private getWeeklyConsistencyChart(mistakes: MistakeRecord[]): ChartData {
    const now = new Date();
    const weeks: {
      [week: string]: {
        days: Set<string>;
        mistakes: number;
        consistency: number;
      };
    } = {};

    // Analyze last 12 weeks
    for (let i = 11; i >= 0; i--) {
      const weekStart = new Date(now.getTime() - i * 7 * 24 * 60 * 60 * 1000);
      const weekEnd = new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
      const weekKey = `W${12 - i}`;

      const weekMistakes = mistakes.filter(
        (m) => m.timestamp >= weekStart && m.timestamp < weekEnd
      );

      // Count unique practice days
      const practiceDays = new Set(
        weekMistakes.map((m) => m.timestamp.toISOString().split("T")[0])
      );

      // Consistency score: (practice days / 7) * 100, weighted by activity
      const consistencyScore = Math.min(
        100,
        (practiceDays.size / 7) * 100 + weekMistakes.length * 2
      );

      weeks[weekKey] = {
        days: practiceDays,
        mistakes: weekMistakes.length,
        consistency: Math.round(consistencyScore),
      };
    }

    const labels = Object.keys(weeks);
    const consistencyScores = Object.values(weeks).map((w) => w.consistency);

    return {
      labels,
      datasets: [
        {
          label: "Weekly Practice Consistency (%)",
          data: consistencyScores,
          backgroundColor: "rgba(34, 197, 94, 0.2)",
          borderColor: "#22C55E",
          borderWidth: 3,
        },
      ],
    };
  }

  // Chart 8: Error Pattern Analysis (shows most common mistake types by time of day)
  private getErrorPatternsChart(mistakes: MistakeRecord[]): ChartData {
    const timeSlots = {
      "Morning (6-12)": { start: 6, end: 12 },
      "Afternoon (12-18)": { start: 12, end: 18 },
      "Evening (18-24)": { start: 18, end: 24 },
      "Night (0-6)": { start: 0, end: 6 },
    };

    const errorsByTime: { [timeSlot: string]: number } = {};

    Object.keys(timeSlots).forEach((slot) => {
      errorsByTime[slot] = 0;
    });

    mistakes.forEach((mistake) => {
      const hour = mistake.timestamp.getHours();

      Object.entries(timeSlots).forEach(([slot, { start, end }]) => {
        if (
          (start <= end && hour >= start && hour < end) ||
          (start > end && (hour >= start || hour < end))
        ) {
          errorsByTime[slot]++;
        }
      });
    });

    // Calculate error rate per time slot
    const labels = Object.keys(errorsByTime);
    const errorCounts = Object.values(errorsByTime);
    const totalErrors = errorCounts.reduce((sum, count) => sum + count, 0);
    const errorRates = errorCounts.map((count) =>
      totalErrors > 0 ? Math.round((count / totalErrors) * 100) : 0
    );

    return {
      labels,
      datasets: [
        {
          label: "Error Distribution by Time (%)",
          data: errorRates,
          backgroundColor: [
            "rgba(251, 191, 36, 0.8)", // Morning - Yellow
            "rgba(59, 130, 246, 0.8)", // Afternoon - Blue
            "rgba(139, 92, 246, 0.8)", // Evening - Purple
            "rgba(55, 65, 81, 0.8)", // Night - Dark
          ],
          borderColor: [
            "rgba(251, 191, 36, 1)",
            "rgba(59, 130, 246, 1)",
            "rgba(139, 92, 246, 1)",
            "rgba(55, 65, 81, 1)",
          ],
          borderWidth: 2,
        },
      ],
    };
  }

  // Chart 9: CEFR Proficiency Progression (shows improvement across different levels)
  private getProficiencyProgressionChart(mistakes: MistakeRecord[]): ChartData {
    const levelGroups = this.groupBy(mistakes, "proficiencyLevel");
    const cefrLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];

    // Calculate success rate and learning velocity for each level
    const progressionData: {
      [level: string]: { accuracy: number; velocity: number };
    } = {};

    cefrLevels.forEach((level) => {
      const levelMistakes = mistakes.filter(
        (m) => m.proficiencyLevel === level
      );
      const mistakeCount = levelMistakes.length;

      if (mistakeCount > 0) {
        // Estimate accuracy based on mistake frequency and level difficulty
        const levelDifficulty = cefrLevels.indexOf(level) + 1;
        const baseAccuracy = Math.max(95 - levelDifficulty * 8, 40);
        const adjustedAccuracy = Math.max(baseAccuracy - mistakeCount * 3, 20);

        // Calculate learning velocity (improvement rate)
        const recentMistakes = levelMistakes.filter(
          (m) => m.timestamp >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        ).length;
        const velocity = Math.max(100 - recentMistakes * 10, 0);

        progressionData[level] = {
          accuracy: Math.round(adjustedAccuracy),
          velocity: Math.round(velocity),
        };
      } else {
        // Default values for levels with no mistakes
        progressionData[level] = {
          accuracy: 90,
          velocity: 0,
        };
      }
    });

    const labels = cefrLevels;
    const accuracyValues = labels.map(
      (level) => progressionData[level]?.accuracy || 0
    );

    return {
      labels,
      datasets: [
        {
          label: "CEFR Level Mastery (%)",
          data: accuracyValues,
          backgroundColor: this.generateGradientColors(
            labels.length,
            "green-blue"
          ),
          borderColor: this.generateGradientColors(
            labels.length,
            "green-blue",
            0.9
          ),
          borderWidth: 2,
        },
      ],
    };
  }

  // Chart 10: Time-Based Accuracy Trends (hourly performance analysis)
  private getTimeBasedAccuracyChart(mistakes: MistakeRecord[]): ChartData {
    const hourlyData: {
      [hour: string]: { mistakes: number; sessions: number };
    } = {};

    // Initialize 24 hours
    for (let hour = 0; hour < 24; hour++) {
      hourlyData[hour.toString().padStart(2, "0")] = {
        mistakes: 0,
        sessions: 0,
      };
    }

    // Group mistakes by hour
    mistakes.forEach((mistake) => {
      const hour = mistake.timestamp.getHours().toString().padStart(2, "0");
      hourlyData[hour].mistakes++;
      hourlyData[hour].sessions = Math.max(hourlyData[hour].sessions, 1);
    });

    // Calculate accuracy for each hour (inverse of mistake density)
    const labels = Object.keys(hourlyData).map((hour) => `${hour}:00`);
    const accuracyByHour = Object.values(hourlyData).map((data) => {
      if (data.mistakes === 0) return 95; // High accuracy if no mistakes
      const mistakeRate = data.mistakes / Math.max(data.sessions, 1);
      return Math.max(100 - mistakeRate * 15, 30); // Convert to accuracy percentage
    });

    return {
      labels,
      datasets: [
        {
          label: "Hourly Performance Accuracy (%)",
          data: accuracyByHour,
          backgroundColor: "rgba(168, 85, 247, 0.3)",
          borderColor: "#A855F7",
          borderWidth: 2,
        },
      ],
    };
  }

  // Enhanced color generation with gradient themes
  private generateGradientColors(
    count: number,
    theme: "green-blue" | "purple-pink" | "orange-red" = "green-blue",
    opacity: number = 0.7
  ): string[] {
    const themes = {
      "green-blue": [
        `rgba(34, 197, 94, ${opacity})`, // Green
        `rgba(59, 130, 246, ${opacity})`, // Blue
        `rgba(20, 184, 166, ${opacity})`, // Teal
        `rgba(99, 102, 241, ${opacity})`, // Indigo
        `rgba(34, 197, 94, ${opacity})`, // Green
      ],
      "purple-pink": [
        `rgba(168, 85, 247, ${opacity})`, // Purple
        `rgba(236, 72, 153, ${opacity})`, // Pink
        `rgba(139, 92, 246, ${opacity})`, // Violet
        `rgba(219, 39, 119, ${opacity})`, // Rose
        `rgba(168, 85, 247, ${opacity})`, // Purple
      ],
      "orange-red": [
        `rgba(251, 146, 60, ${opacity})`, // Orange
        `rgba(239, 68, 68, ${opacity})`, // Red
        `rgba(251, 191, 36, ${opacity})`, // Yellow
        `rgba(245, 101, 101, ${opacity})`, // Red-light
        `rgba(251, 146, 60, ${opacity})`, // Orange
      ],
    };

    const colors = themes[theme];
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(colors[i % colors.length]);
    }
    return result;
  }

  // NEW: Analyze if user needs practice and suggest mini exercises
  shouldSuggestMiniExercises(
    grammarTopic: string,
    mistakeThreshold: number = 3
  ): boolean {
    const mistakes = this.loadMistakes();
    const recentMistakes = mistakes.filter(
      (m) =>
        m.grammarTopic === grammarTopic &&
        m.timestamp >= new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
    );

    return recentMistakes.length >= mistakeThreshold;
  }

  // NEW: Get detailed suggestion for mini exercises
  getMiniExerciseSuggestion(grammarTopic: string): {
    shouldSuggest: boolean;
    mistakeCount: number;
    suggestion: {
      title: string;
      description: string;
      exercises: Array<{
        type: string;
        description: string;
        example: string;
      }>;
      tips: string[];
      estimatedTime: string;
    } | null;
  } {
    const mistakes = this.loadMistakes();
    const topicMistakes = mistakes.filter(
      (m) => m.grammarTopic === grammarTopic
    );
    const recentTopicMistakes = mistakes.filter(
      (m) =>
        m.grammarTopic === grammarTopic &&
        m.timestamp >= new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
    );

    const mistakeCount = recentTopicMistakes.length;
    const shouldSuggest = mistakeCount >= 3;

    if (!shouldSuggest) {
      return {
        shouldSuggest: false,
        mistakeCount,
        suggestion: null,
      };
    }

    // Generate specific suggestions based on grammar topic
    const suggestion = this.generateMiniExerciseSuggestion(
      grammarTopic,
      topicMistakes
    );

    return {
      shouldSuggest: true,
      mistakeCount,
      suggestion,
    };
  }

  // NEW: Generate topic-specific mini exercise suggestions
  private generateMiniExerciseSuggestion(
    grammarTopic: string,
    mistakes: MistakeRecord[]
  ): {
    title: string;
    description: string;
    exercises: Array<{
      type: string;
      description: string;
      example: string;
    }>;
    tips: string[];
    estimatedTime: string;
  } {
    // Common patterns for different grammar topics
    const topicSuggestions: {
      [key: string]: {
        title: string;
        description: string;
        exercises: Array<{
          type: string;
          description: string;
          example: string;
        }>;
        tips: string[];
        estimatedTime: string;
      };
    } = {
      "Present Simple": {
        title: "Present Simple Mini Practice",
        description:
          "Focus on mastering the basic structure and usage of Present Simple tense",
        exercises: [
          {
            type: "Gap Fill",
            description: "Complete sentences with correct Present Simple forms",
            example: "She _____ (work) in a hospital every day.",
          },
          {
            type: "Sentence Building",
            description: "Create sentences using given words in Present Simple",
            example:
              "make / coffee / morning / I → I make coffee in the morning.",
          },
          {
            type: "Error Correction",
            description: "Find and fix Present Simple mistakes",
            example: "He don't like pizza. → He doesn't like pizza.",
          },
        ],
        tips: [
          "Remember: He/She/It takes -s or -es ending",
          "Use 'do/does' for questions and negatives",
          "Present Simple shows habits, facts, and routines",
        ],
        estimatedTime: "10-15 minutes",
      },
      "Past Simple": {
        title: "Past Simple Mini Practice",
        description:
          "Strengthen your understanding of Past Simple tense formation and usage",
        exercises: [
          {
            type: "Regular vs Irregular Verbs",
            description: "Practice both regular (-ed) and irregular past forms",
            example: "walk → walked, go → went, see → saw",
          },
          {
            type: "Timeline Exercises",
            description: "Match past actions with correct time expressions",
            example: "I visited Paris _____ (last year/tomorrow/every year)",
          },
          {
            type: "Story Completion",
            description: "Complete a short story using Past Simple verbs",
            example:
              "Yesterday, I _____ (wake) up early and _____ (go) to work.",
          },
        ],
        tips: [
          "Regular verbs: add -ed (worked, played, studied)",
          "Irregular verbs: memorize special forms (went, saw, bought)",
          "Use Past Simple for completed actions in the past",
        ],
        estimatedTime: "12-18 minutes",
      },
      "Present Perfect": {
        title: "Present Perfect Mini Practice",
        description:
          "Master the connection between past actions and present results",
        exercises: [
          {
            type: "Have/Has + Past Participle",
            description:
              "Practice forming Present Perfect with correct auxiliaries",
            example:
              "She _____ (has/have) _____ (finish/finished) her homework.",
          },
          {
            type: "Time Expressions",
            description: "Use Present Perfect with appropriate time markers",
            example: "I have lived here _____ (for/since/ago) five years.",
          },
          {
            type: "Experience vs Specific Time",
            description: "Choose between Present Perfect and Past Simple",
            example: "I have been to Paris vs I went to Paris last week",
          },
        ],
        tips: [
          "Use have/has + past participle",
          "Shows connection between past and present",
          "Common with: already, just, yet, ever, never, since, for",
        ],
        estimatedTime: "15-20 minutes",
      },
      "Modal Verbs": {
        title: "Modal Verbs Mini Practice",
        description:
          "Practice using modal verbs for different meanings and situations",
        exercises: [
          {
            type: "Meaning Match",
            description: "Match modal verbs with their correct meanings",
            example: "must = strong obligation, can = ability, should = advice",
          },
          {
            type: "Situation Practice",
            description: "Choose the right modal for different contexts",
            example: "You _____ wear a helmet when cycling (must/can/might)",
          },
          {
            type: "Polite Requests",
            description: "Practice making polite requests with modals",
            example: "Could you help me? / Would you mind opening the window?",
          },
        ],
        tips: [
          "Modal + base verb (no 'to')",
          "Can't add -s in third person",
          "Each modal has specific meanings and uses",
        ],
        estimatedTime: "12-15 minutes",
      },
      "Conditional Sentences": {
        title: "Conditional Sentences Mini Practice",
        description: "Practice different types of conditional structures",
        exercises: [
          {
            type: "Type Identification",
            description: "Identify if conditionals are Type 1, 2, or 3",
            example: "If I study hard, I will pass. (Type 1 - real future)",
          },
          {
            type: "Completion Practice",
            description:
              "Complete conditional sentences with correct verb forms",
            example: "If I _____ (be) you, I would _____ (take) that job.",
          },
          {
            type: "Real vs Unreal",
            description:
              "Practice distinguishing real and hypothetical situations",
            example: "If it rains (likely) vs If I were rich (unlikely)",
          },
        ],
        tips: [
          "Type 1: If + present, will + base verb (real future)",
          "Type 2: If + past, would + base verb (unreal present)",
          "Type 3: If + past perfect, would have + past participle (unreal past)",
        ],
        estimatedTime: "18-25 minutes",
      },
      "Passive Voice": {
        title: "Passive Voice Mini Practice",
        description:
          "Learn to transform active sentences to passive and understand usage",
        exercises: [
          {
            type: "Active to Passive",
            description: "Convert active sentences to passive voice",
            example: "John builds houses → Houses are built by John",
          },
          {
            type: "Tense Practice",
            description: "Practice passive voice in different tenses",
            example: "Present: is made, Past: was made, Perfect: has been made",
          },
          {
            type: "When to Use",
            description: "Identify when passive voice is more appropriate",
            example: "Focus on action/result rather than who does it",
          },
        ],
        tips: [
          "Structure: be + past participle",
          "Use when the action is more important than the doer",
          "Common in formal writing and news reports",
        ],
        estimatedTime: "15-20 minutes",
      },
    };

    // Default suggestion for topics not specifically covered
    const defaultSuggestion = {
      title: `${grammarTopic} Mini Practice`,
      description: `Focus on improving your understanding of ${grammarTopic} through targeted practice`,
      exercises: [
        {
          type: "Basic Practice",
          description: `Complete exercises focusing on ${grammarTopic} fundamentals`,
          example: "Practice the most common patterns and structures",
        },
        {
          type: "Error Correction",
          description: `Identify and fix common ${grammarTopic} mistakes`,
          example: "Review your previous errors and practice correct forms",
        },
        {
          type: "Context Practice",
          description: `Use ${grammarTopic} in realistic situations`,
          example: "Apply the grammar in sentences and short conversations",
        },
      ],
      tips: [
        `Review the basic rules of ${grammarTopic}`,
        "Practice with simple examples first",
        "Pay attention to common mistake patterns",
        "Use the grammar in context, not just isolated exercises",
      ],
      estimatedTime: "10-15 minutes",
    };

    return topicSuggestions[grammarTopic] || defaultSuggestion;
  }

  // NEW: Get comprehensive practice recommendations
  getPracticeRecommendations(): PracticeRecommendations {
    const mistakes = this.loadMistakes();
    const now = new Date();
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    // Group recent mistakes by topic
    const topicMistakes: { [topic: string]: MistakeRecord[] } = {};

    mistakes
      .filter((m) => m.timestamp >= last7Days)
      .forEach((mistake) => {
        if (!topicMistakes[mistake.grammarTopic]) {
          topicMistakes[mistake.grammarTopic] = [];
        }
        topicMistakes[mistake.grammarTopic].push(mistake);
      });

    // Analyze each topic and create recommendations
    const urgentTopics = Object.entries(topicMistakes)
      .map(([topic, topicMistakeList]) => {
        const recent24h = topicMistakeList.filter(
          (m) => m.timestamp >= last24Hours
        );
        const mistakeCount = recent24h.length;

        let priority: "high" | "medium" | "low" = "low";
        if (mistakeCount >= 5) priority = "high";
        else if (mistakeCount >= 3) priority = "medium";

        const suggestion = this.generateMiniExerciseSuggestion(
          topic,
          topicMistakeList
        );

        return {
          topic,
          mistakeCount,
          priority,
          suggestion,
        };
      })
      .filter((item) => item.mistakeCount >= 2) // Only include topics with 2+ mistakes
      .sort((a, b) => b.mistakeCount - a.mistakeCount); // Sort by mistake count

    // Generate summary
    let summary = "";
    if (urgentTopics.length === 0) {
      summary =
        "Great work! No urgent practice needed. Keep up the good learning momentum!";
    } else {
      const highPriority = urgentTopics.filter((t) => t.priority === "high");
      const mediumPriority = urgentTopics.filter(
        (t) => t.priority === "medium"
      );

      if (highPriority.length > 0) {
        summary = `🔥 High Priority: You've made ${highPriority[0].mistakeCount} recent mistakes in ${highPriority[0].topic}. `;
      }
      if (mediumPriority.length > 0) {
        summary += `⚠️ Also review: ${mediumPriority
          .map((t) => t.topic)
          .join(", ")}. `;
      }
      summary += "Consider doing mini exercises to strengthen these areas.";
    }

    return {
      urgentTopics,
      summary,
    };
  }
}

// Export singleton instance
export const mistakeTracker = MistakeTracker.getInstance();

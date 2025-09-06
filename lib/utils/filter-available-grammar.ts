import {
  grammarCategories,
  type GrammarCategory,
  type GrammarItem,
} from "@/lib/static/grammars/grammar-categories";
import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";
import {
  getDatabaseKey,
  getAllAvailableDatabaseKeys,
} from "@/lib/utils/grammar-key-mapping";

/**
 * Get all available grammar topic keys from the database
 */
export function getAvailableGrammarKeys(): string[] {
  return getAllAvailableDatabaseKeys();
}

/**
 * Filter grammar categories to only show topics that exist in the database
 */
export function getAvailableGrammarCategories(): GrammarCategory[] {
  return grammarCategories
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => getDatabaseKey(item.key) !== null),
    }))
    .filter((category) => category.items.length > 0); // Only show categories that have available items
}

/**
 * Get total count of available grammar topics
 */
export function getAvailableGrammarCount(): number {
  return getAvailableGrammarKeys().length;
}

/**
 * Check if a specific grammar topic is available
 */
export function isGrammarTopicAvailable(key: string): boolean {
  return getDatabaseKey(key) !== null;
}

/**
 * Get available grammar topics grouped by category with counts
 */
export function getAvailableGrammarSummary() {
  const availableCategories = getAvailableGrammarCategories();
  const totalCount = getAvailableGrammarCount();

  return {
    categories: availableCategories,
    totalAvailable: totalCount,
    totalPossible: grammarCategories.reduce(
      (sum, cat) => sum + cat.items.length,
      0
    ),
    completionPercentage: Math.round(
      (totalCount /
        grammarCategories.reduce((sum, cat) => sum + cat.items.length, 0)) *
        100
    ),
  };
}

import toast from "react-hot-toast";

// 🧹 COMPREHENSIVE LOCALSTORAGE CLEANUP UTILITY
export const clearAllHintTensesLocalStorage = () => {
  if (typeof window === "undefined") {
    toast.error(
      "⚠️ Cannot clear localStorage: window is undefined (SSR context)"
    );
    return false;
  }

  // Complete list of all localStorage keys used by hint-tenses component
  const allHintTensesKeys = [
    // Core functionality keys
    "hintTenses-bookmarks",
    "hintTenses-sortMode",
    "hintTenses-selectedCategory",
    "hintTenses-autoScrollDuration",
    "showModalExtensions",

    // Potential additional keys that might exist (defensive cleanup)
    "hintTenses-modalViewMode",
    "hintTenses-fontSizeMode",
    "hintTenses-showKeyboardHelp",
    "hintTenses-showStats",
    "hintTenses-showQuickHelp",
    "hintTenses-showCertificateOptions",
    "hintTenses-currentTenseIndex",
    "hintTenses-expandedSections",
    "hintTenses-selectedCEFRLevel",
    "hintTenses-showOnlyBookmarked",
    "hintTenses-autoScroll",
    "hintTenses-comparisonAspects",
    "hintTenses-userPreferences",
  ];

  let clearedCount = 0;
  let failedCount = 0;
  const failedKeys: string[] = [];

  // Clear all known keys
  allHintTensesKeys.forEach((key) => {
    try {
      const existed = localStorage.getItem(key) !== null;
      localStorage.removeItem(key);
      if (existed) {
        toast.success(`✅ Cleared localStorage key: ${key}`);
        clearedCount++;
      }
    } catch (error) {
      toast.error(`❌ Failed to clear localStorage key: ${key}`);
      failedKeys.push(key);
      failedCount++;
    }
  });

  // Additional cleanup: scan for any keys starting with "hintTenses-"
  try {
    const allKeys = Object.keys(localStorage);
    const hintTensesKeys = allKeys.filter((key) =>
      key.startsWith("hintTenses-")
    );

    hintTensesKeys.forEach((key) => {
      if (!allHintTensesKeys.includes(key)) {
        try {
          localStorage.removeItem(key);
          toast.success(`🧹 Removed orphaned key: ${key}`);
          clearedCount++;
        } catch (error) {
          toast.error(`❌ Failed to remove orphaned key: ${key}`);
          failedKeys.push(key);
          failedCount++;
        }
      }
    });
  } catch (error) {
    toast.error("⚠️ Could not scan for orphaned keys");
  }

  // Report results
  const success = failedCount === 0;
  return {
    success,
    clearedCount,
    failedCount,
    failedKeys,
  };
};

// Safe localStorage getter with validation
export const getSafeLocalStorageValue = <T extends string>(
  key: string,
  validValues: readonly T[],
  defaultValue: T
): T => {
  if (typeof window === "undefined") return defaultValue;

  try {
    const stored = localStorage.getItem(key);
    if (stored && validValues.includes(stored as T)) {
      return stored as T;
    }
  } catch (error) {
    toast.error(`Failed to read ${key} from localStorage`);
  }

  // Set default value in localStorage if not valid
  try {
    localStorage.setItem(key, defaultValue);
  } catch (error) {
    toast.error(`Failed to set ${key} in localStorage`);
  }

  return defaultValue;
};

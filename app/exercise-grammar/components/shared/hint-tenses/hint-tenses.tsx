"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";
import { CEFRLevel } from "@/types/grammars/grammars_type";
import CompareTensesModal from "./compare/compareTensesModal";
import ComparisonResultModal, {
  ComparisonAspects,
} from "./compare/comparisonResultModal";

import DetailedTenseModal from "./detail-tensesModal/DetailedTenseModal";
import AutoScrollDurationSelector from "./AutoScrollDurationSelector";
import { CEFR_TENSE_MAPPING } from "./hint-function";
import { generateMultiTensePDF } from "@/components/shared/format/PDF/multi-tenses/multi-tense-generator";
import { generatePDF } from "@/components/shared/format/PDF/All-tenses/generatePDF";
import {
  generateUltraCompletePDF,
  analyzeUltraDataCompleteness,
} from "@/components/shared/format/PDF/certificate-pdf/UltraCompletePDFGenerator";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import toast from "react-hot-toast";
import { generateStudyPlanPDF } from "@/components/shared/format/PDF/plan-study/plan-study-generate";
import Certificate from "./certificate/certificate";
import ResetSettingDialog from "./reset-settings/reset-settings-dialog";
import BookmarkDialog from "./bookmark/book-mark-dialog";
import ExportAllDialog from "./export-PDF/export-all-dialog";
import StatisticsPanel from "./statistic/statistics-panel";
import HeaderPanel from "./header/header-panel";
import TensesList from "./tenses-list/tenses-list";
import {
  clearAllHintTensesLocalStorage,
  getSafeLocalStorageValue,
} from "./localStorage/localStorage";
import { Button } from "@/components/ui/button";
import { TensesStructure } from "@/types/grammars/grammar/grammar_type";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Type for individual tense data - union of all possible tense types
export type TenseData = NonNullable<
  TensesStructure[keyof Omit<TensesStructure, "createdAt" | "updatedAt">]
>;

export interface TenseItem {
  key: string;
  name: string;
  displayName: string;
  category: "tenses" | "conditionals" | "grammar" | "special";
  order: number;
  cefrLevels: CEFRLevel[]; // Add CEFR levels for each tense
}

// 🛠️ UTILITY FUNCTIONS for localStorage management
export const VALID_SORT_MODES = [
  "low_to_high",
  "high_to_low",
  "level_a1_c2",
  "level_c2_a1",
  "name_a_z",
  "name_z_a",
] as const;

export const VALID_CATEGORIES = [
  "all",
  "tenses",
  "grammar",
  "conditionals",
  "special",
] as const;

const HintTenses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTense, setSelectedTense] = useState<{
    name: string;
    data: TenseData;
  } | null>(null);
  const [selectedCEFRLevel, setSelectedCEFRLevel] = useState<CEFRLevel | "ALL">(
    "ALL"
  );
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});
  // Add mounted state to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false);
  // Set mounted state on client side to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Toggle body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // ✅ Chặn scroll nền
    } else {
      document.body.style.overflow = ""; // ✅ Cho phép scroll lại
    }

    return () => {
      document.body.style.overflow = ""; // ✅ Dọn dẹp khi unmount
    };
  }, [isOpen]);

  // 🆕 COMPREHENSIVE INITIALIZATION: Ensure all localStorage values are properly loaded
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Force re-sync sortMode from localStorage on component initialization
      const validSortMode = getSafeLocalStorageValue(
        "hintTenses-sortMode",
        VALID_SORT_MODES,
        "low_to_high"
      );
      if (validSortMode !== sortMode) {
        setSortMode(validSortMode);
      }

      // Also re-sync category if needed
      const validCategory = getSafeLocalStorageValue(
        "hintTenses-selectedCategory",
        VALID_CATEGORIES,
        "all"
      );
      if (validCategory !== selectedCategory) {
        setSelectedCategory(validCategory);
      }
    }
  }, []); // Run once on mount

  // Special modal features with persistence
  const [bookmarkedTenses, setBookmarkedTenses] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("hintTenses-bookmarks");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [modalViewMode, setModalViewMode] = useState<
    "detailed" | "compact" | "summary"
  >("detailed");
  const [fontSizeMode, setFontSizeMode] = useState<
    "small" | "normal" | "large"
  >("normal");
  const [autoScroll, setAutoScroll] = useState(false);
  const [autoScrollDuration, setAutoScrollDuration] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("hintTenses-autoScrollDuration");
      return saved ? parseInt(saved) : 30; // Default to 30 seconds
    }
    return 30; // Default to 30 seconds
  });
  // Initialize sortMode from localStorage with proper sync
  const [sortMode, setSortMode] = useState<
    | "low_to_high"
    | "high_to_low"
    | "level_a1_c2"
    | "level_c2_a1"
    | "name_a_z"
    | "name_z_a"
  >(() => {
    const initialSortMode = getSafeLocalStorageValue(
      "hintTenses-sortMode",
      VALID_SORT_MODES,
      "low_to_high"
    );
    return initialSortMode;
  });

  // Initialize selectedCategory from localStorage with proper sync
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "tenses" | "grammar" | "conditionals" | "special"
  >(() => {
    const initialCategory = getSafeLocalStorageValue(
      "hintTenses-selectedCategory",
      VALID_CATEGORIES,
      "all"
    );
    return initialCategory;
  });
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showCertificateOptions, setShowCertificateOptions] = useState(false);
  const [currentTenseIndex, setCurrentTenseIndex] = useState(0);
  const [indexCurrent, setIndexCurrent] = useState(0);
  const [showModalExtensions, setShowModalExtensions] = useState(true);

  // Auto-scroll duration selector modal
  const [showDurationSelector, setShowDurationSelector] = useState(false);

  // New modal states for comparison functionality
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [showComparisonResult, setShowComparisonResult] = useState(false);
  const [comparisonTopics, setComparisonTopics] = useState<TenseItem[]>([]);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [showClearBookmarksDialog, setShowClearBookmarksDialog] =
    useState(false);
  const [showExportAllDialog, setShowExportAllDialog] = useState(false);
  const [comparisonAspects, setComparisonAspects] = useState<ComparisonAspects>(
    {
      // Core grammar content - enabled by default
      definition: true,
      usage: true,
      structure: true,
      examples: true,
      mistakes: true,
      timeMarkers: true,
      tips: true,

      // Certificate grammar content - enabled to show comprehensive data
      advancedPatterns: true,
      spellingRules: true,
      grammarRules: true,

      // Cultural and contextual usage - enabled for richer content
      culturalUsage: true,
      practiceExercises: true,

      // Learning progression and assessment - enabled for educational value
      learningProgression: true,
      assessment: true,

      // Research and corpus data - enabled for comprehensive analysis
      research: true,
      citations: true,

      // Technology and digital learning - enabled for modern approach
      digitalLearning: true,

      // System fields
      level: true,
      includeAnalysis: true,
    }
  );

  const [loadingDownloadPDF, setLoadingDownloadPDF] = useState(false);

  // Handle modal body scroll lock
  useEffect(() => {
    if (selectedTense) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedTense]);

  // Bookmark functionality with persistence
  const toggleBookmark = (tenseName: string) => {
    setBookmarkedTenses((prev) => {
      const newBookmarks = prev.includes(tenseName)
        ? prev.filter((name) => name !== tenseName)
        : [...prev, tenseName];

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "hintTenses-bookmarks",
          JSON.stringify(newBookmarks)
        );
      }

      return newBookmarks;
    });
  };

  const clearAllBookmarks = () => {
    setShowClearBookmarksDialog(true);
  };

  const handleClearBookmarksConfirm = () => {
    setBookmarkedTenses([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("hintTenses-bookmarks");
    }
    setShowClearBookmarksDialog(false);
  };

  const getRandomTense = () => {
    const randomIndex = Math.floor(Math.random() * filteredTenses.length);
    const randomTense = filteredTenses[randomIndex];
    if (randomTense) {
      const tenseData =
        tenseDatabase[randomTense.key as keyof typeof tenseDatabase];
      if (tenseData && typeof tenseData !== "string") {
        setSelectedTense({ name: randomTense.name, data: tenseData });

        // Set currentTenseIndex to the original position in allTenseKeys
        const originalIndex = allTenseKeys.indexOf(randomTense.key);
        setCurrentTenseIndex(originalIndex !== -1 ? originalIndex : 0);
      }
    }
  };

  // Navigation functions for up/down buttons in modal
  const navigateToTense = (direction: "up" | "down") => {
    if (!selectedTense) return;

    // Get current tense key
    const currentTenseKey = Object.keys(tenseDatabase).find((key) => {
      const data = tenseDatabase[key as keyof typeof tenseDatabase];
      return selectedTense.data === data;
    });

    if (!currentTenseKey) return;

    // Find current tense's original index in allTenseKeys
    const currentOriginalIndex = allTenseKeys.indexOf(currentTenseKey);
    if (currentOriginalIndex === -1) return;

    // Find the next available tense in the original order that exists in filtered results
    let newOriginalIndex = currentOriginalIndex;
    let attempts = 0;
    const maxAttempts = allTenseKeys.length; // Prevent infinite loop

    do {
      // Calculate next index based on direction
      if (direction === "up") {
        // "Up" means go to previous item (lower index/number)
        newOriginalIndex =
          newOriginalIndex > 0 ? newOriginalIndex - 1 : allTenseKeys.length - 1;
      } else {
        // "Down" means go to next item (higher index/number)
        newOriginalIndex =
          newOriginalIndex < allTenseKeys.length - 1 ? newOriginalIndex + 1 : 0;
      }

      // Get the tense key at this position
      const candidateTenseKey = allTenseKeys[newOriginalIndex];

      // Check if this tense exists in filtered results
      const filteredIndex = filteredTenses.findIndex(
        (item) => item.key === candidateTenseKey
      );

      if (filteredIndex !== -1) {
        // Found a valid tense in filtered results
        const newTenseData =
          tenseDatabase[candidateTenseKey as keyof typeof tenseDatabase];
        if (newTenseData && typeof newTenseData !== "string") {
          const newTenseName = candidateTenseKey
            .replace(/_/g, " ")
            .replace(/([A-Z])/g, " $1")
            .replace(/\s+/g, " ")
            .trim()
            .replace(/^./, (str) => str.toUpperCase())
            .replace(
              /\s+([a-z])/g,
              (match, letter) => " " + letter.toUpperCase()
            );

          setSelectedTense({ name: newTenseName, data: newTenseData });
          // Set currentTenseIndex to the original position (not filtered position)
          setCurrentTenseIndex(newOriginalIndex);

          // Update indexCurrent based on direction
          setIndexCurrent((prev) => {
            const max = filteredTenses.length - 1;
            if (direction === "up") {
              return prev <= 0 ? max : prev - 1;
            } else {
              return prev >= max ? 0 : prev + 1;
            }
          });

          setExpandedSections({});
          return;
        }
      }

      attempts++;
    } while (
      attempts < maxAttempts &&
      newOriginalIndex !== currentOriginalIndex
    );

    // If we've cycled through all items and found nothing, something is wrong
    toast.error("Could not find next available tense in navigation");
  };

  // Simplified localStorage sync - only sync when modal opens or when explicitly needed
  useEffect(() => {
    if (typeof window !== "undefined" && isOpen) {
      const validSortMode = getSafeLocalStorageValue(
        "hintTenses-sortMode",
        VALID_SORT_MODES,
        "low_to_high"
      );
      const validCategory = getSafeLocalStorageValue(
        "hintTenses-selectedCategory",
        VALID_CATEGORIES,
        "all"
      );

      if (validSortMode !== sortMode) {
        setSortMode(validSortMode);
      }

      if (validCategory !== selectedCategory) {
        setSelectedCategory(validCategory);
      }
    }
  }, [isOpen]); // Only sync when modal opens

  // Sync showModalExtensions with localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("showModalExtensions");
    if (stored !== null) {
      setShowModalExtensions(JSON.parse(stored));
    }
  }, []);

  // Toggle modal extensions visibility
  const toggleModalExtensions = () => {
    const newValue = !showModalExtensions;
    setShowModalExtensions(newValue);
    localStorage.setItem("showModalExtensions", JSON.stringify(newValue));
    // Note: currentTenseIndex will be automatically updated by the useEffect that monitors filteredTenses changes
  };

  // Handle category selection with localStorage persistence
  const handleCategoryChange = (
    category: "all" | "tenses" | "grammar" | "conditionals" | "special"
  ) => {
    if (!VALID_CATEGORIES.includes(category)) {
      toast.error(`⚠️ Invalid category attempted: "${category}"`);
      return;
    }
    setSelectedCategory(category);
  };

  const exportByCEFRAsPDF = async (level: CEFRLevel | "ALL") => {
    if (level === "ALL") {
      // Show dialog to ask user if they want to go to download page or download immediately
      setShowExportAllDialog(true);
    } else {
      setLoadingDownloadPDF(true);

      try {
        // Use generateMultiTensePDF for specific CEFR levels
        const cefrData = tenseItems.filter((item) =>
          item.cefrLevels.includes(level as CEFRLevel)
        );

        // Get the sorted tense keys for the specific CEFR level
        const sortedTenseKeys = getSortedTenseKeys(cefrData);
        generateMultiTensePDF(sortedTenseKeys);

        // Since generateMultiTensePDF is not async, we'll set a timeout to simulate download completion
        // In a real scenario, you might want to modify generateMultiTensePDF to return a Promise
        setTimeout(() => {
          setLoadingDownloadPDF(false);
        }, 2000); // Adjust timing as needed
      } catch (error) {
        toast.error("Error generating multi-tense PDF");
        setLoadingDownloadPDF(false);
      }
    }
  };

  // Certificate PDF Generation Functions with ULTRA-COMPLETE Data Processing
  const handleCertificatePDFGeneration = async (
    certificateType: string,
    generatorFunction: () => Promise<void>
  ) => {
    setLoadingDownloadPDF(true);
    try {
      analyzeUltraDataCompleteness();

      await generatorFunction();
      toast.success(
        `${certificateType} Certificate Guide generated successfully! 📚 Professional structured document with complete data and clear formatting!`
      );
    } catch (error) {
      toast.error(
        `Failed to generate ${certificateType} Certificate Guide. Please try again.`
      );
    } finally {
      setLoadingDownloadPDF(false);
    }
  };

  // Individual certificate PDF functions - ULTRA-COMPLETE generator (100% of 67,588+ lines)
  const handleIELTSPDF = () =>
    handleCertificatePDFGeneration("IELTS", () =>
      generateUltraCompletePDF("IELTS")
    );
  const handleTOEICPDF = () =>
    handleCertificatePDFGeneration("TOEIC", () =>
      generateUltraCompletePDF("TOEIC")
    );
  const handlePTEPDF = () =>
    handleCertificatePDFGeneration("PTE", () =>
      generateUltraCompletePDF("PTE")
    );
  const handleTOEFLPDF = () =>
    handleCertificatePDFGeneration("TOEFL", () =>
      generateUltraCompletePDF("TOEFL")
    );
  const handleCambridgePDF = () =>
    handleCertificatePDFGeneration("Cambridge", () =>
      generateUltraCompletePDF("Cambridge")
    );
  const handleSATPDF = () =>
    handleCertificatePDFGeneration("SAT", () =>
      generateUltraCompletePDF("SAT")
    );
  const handleVSTEPPDF = () =>
    handleCertificatePDFGeneration("VSTEP", () =>
      generateUltraCompletePDF("VSTEP")
    );
  const handleAllCertificatesPDF = () =>
    handleCertificatePDFGeneration(
      "All Certificates (ULTRA-COMPLETE 67,588+ lines)",
      () => generateUltraCompletePDF("ALL")
    );

  // Handle export all options
  const handleDownloadImmediately = async () => {
    setLoadingDownloadPDF(true);

    try {
      await generatePDF();
    } catch (error) {
      toast.error("Error generating PDF");
      // You can add error handling/notification here if needed
    } finally {
      setLoadingDownloadPDF(false);
      setShowExportAllDialog(false);
      toast.success("PDF generated successfully!");
      setIsOpen(true);
    }
  };

  const handleGoToDownloadPage = () => {
    setShowExportAllDialog(false);
    // Navigate to the download-tenses-pdf page
    if (typeof window !== "undefined") {
      window.location.href = "/download-tenses-pdf";
    }
  };

  // Helper function to get next CEFR level
  const getNextLevel = (currentLevel: string): string => {
    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const currentIndex = levels.indexOf(currentLevel);
    return currentIndex < levels.length - 1
      ? levels[currentIndex + 1]
      : "Certificate Topics";
  };

  const downloadBookmarkedAsPDF = () => {
    setLoadingDownloadPDF(true);

    try {
      // Get detailed information for bookmarked items including their IDs
      const bookmarkedDetails = bookmarkedTenses.map((tenseName) => {
        const item = tenseItems.find(
          (item) =>
            item.displayName === tenseName ||
            item.key === tenseName ||
            item.name === tenseName
        );
        return {
          name: tenseName,
          category: item?.category || "Unknown",
          levels: item?.cefrLevels
            ? item.cefrLevels.join(", ")
            : "Not specified",
          key: item?.key || "",
          item: item, // Include the full item for sorting
        };
      });

      // Filter out items without valid keys and extract the TenseItem objects
      const bookmarkedItems = bookmarkedDetails
        .filter((detail) => detail.key && detail.item)
        .map((detail) => detail.item!);

      if (bookmarkedItems.length > 0) {
        // Get sorted tense keys for bookmarked items
        const sortedBookmarkedKeys = getSortedTenseKeys(bookmarkedItems);
        generateMultiTensePDF(sortedBookmarkedKeys);

        // Set timeout to reset loading state after generation
        setTimeout(() => {
          setLoadingDownloadPDF(false);
        }, 2000);
      } else {
        toast.error("No valid bookmarked tense keys found");
        setLoadingDownloadPDF(false);
      }
    } catch (error) {
      toast.error("Error generating bookmarked PDF");
      setLoadingDownloadPDF(false);
    }
  };

  const handleDownloadStudyPlan = async () => {
    try {
      setLoadingDownloadPDF(true);
      // Generate and download the PDF
      await generateStudyPlanPDF();
    } catch (error) {
      setLoadingDownloadPDF(false);
      // Show error message to user
      toast.error("Error generating PDF. Please try again.");
    } finally {
      setLoadingDownloadPDF(false);
      toast.success("Study Plan PDF generated successfully!");
    }
  };

  // Enhanced Compare Function with Manual Selection
  const quickCompareRandomTenses = () => {
    setIsOpen(false);
    // Use the React modal instead of innerHTML
    setShowCompareModal(true);
  };

  // Add missing function definitions that were in the broken section
  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const resetToDefaults = () => {
    setShowResetDialog(true);
  };

  const handleResetCancel = () => {
    setShowResetDialog(false);
    setIsOpen(true);
  };

  const handleResetConfirm = () => {
    // Reset all state settings to defaults
    setSelectedCEFRLevel("ALL");
    setShowOnlyBookmarked(false);
    setShowComparisonResult(false);
    setShowCertificateOptions(false);
    setShowStats(false);
    setSortMode("low_to_high");
    setSelectedCategory("all");
    setShowModalExtensions(true);
    setAutoScrollDuration(30); // Default value
    setAutoScroll(false);
    setModalViewMode("detailed");
    setFontSizeMode("normal");
    setShowCompareModal(false);
    setComparisonTopics([]);
    setCurrentTenseIndex(0);
    setShowResetDialog(false);
    setShowClearBookmarksDialog(false);
    setShowExportAllDialog(false);

    const keysToRemove = [
      "hintTenses-bookmarks",
      "hintTenses-sortMode",
      "hintTenses-selectedCategory",
      "hintTenses-autoScrollDuration",
      "showModalExtensions",
    ];

    keysToRemove.forEach((key) => {
      try {
        localStorage.removeItem(key);
        toast.success(`✅ Removed localStorage key: ${key}`);
      } catch (error) {
        toast.error(`❌ Failed to remove localStorage key: ${key}`);
      }
    });

    // Reset arrays and objects
    setBookmarkedTenses([]);
    setExpandedSections({});

    // Close dialog and show success message
    setShowResetDialog(false);

    // Optional: Show a brief success notification to user
    if (typeof window !== "undefined") {
      // You could add a toast notification here if you have a toast system
      toast.success(
        "✅ All settings have been successfully reset to defaults!"
      );
    }
  };

  // 🔄 EMERGENCY RESET FUNCTION - Complete component reset
  const emergencyReset = () => {
    try {
      // 1. Clear all localStorage
      const cleanupResult = clearAllHintTensesLocalStorage();

      // 2. Reset all state to absolute defaults
      setIsOpen(false);
      setSearchQuery("");
      setSelectedTense(null);
      setSelectedCEFRLevel("ALL");
      setExpandedSections({});
      setBookmarkedTenses([]);
      setModalViewMode("detailed");
      setFontSizeMode("normal");
      setAutoScroll(false);
      setAutoScrollDuration(30);
      setSortMode("low_to_high");
      setSelectedCategory("all");
      setShowOnlyBookmarked(false);
      setShowCertificateOptions(false);
      setShowStats(false);
      setCurrentTenseIndex(0);
      setShowModalExtensions(true);
      setShowCompareModal(false);
      setShowComparisonResult(false);
      setComparisonTopics([]);
      setShowResetDialog(false);
      setShowClearBookmarksDialog(false);
      setShowExportAllDialog(false);

      // 3. Log success
      toast.success("🎉 Emergency reset completed successfully!");
      return {
        success: true,
        message: "Emergency reset completed successfully",
        localStorageCleanup: cleanupResult,
      };
    } catch (error) {
      toast.error("❌ Emergency reset failed");
      return {
        success: false,
        message: "Emergency reset failed",
        error: error,
      };
    }
  };

  // 🔍 DEBUG UTILITY - Check current localStorage state
  const debugLocalStorageState = () => {
    if (typeof window === "undefined") {
      return null;
    }

    const hintTensesKeys = [
      "hintTenses-bookmarks",
      "hintTenses-sortMode",
      "hintTenses-selectedCategory",
      "hintTenses-autoScrollDuration",
      "showModalExtensions",
    ];

    const currentState: Record<string, string | string[] | number | null> = {};

    hintTensesKeys.forEach((key) => {
      try {
        const value = localStorage.getItem(key);
        const parsedValue = value
          ? key === "hintTenses-bookmarks"
            ? JSON.parse(value)
            : value
          : null;
        currentState[key] = parsedValue;

        const status = value ? "✅ EXISTS" : "❌ MISSING";
        toast.success(`${status} ${key}: ${value || "null"}`);
      } catch (error) {
        toast.error(`❌ ERROR reading ${key}: ${error}`);
        currentState[key] = "ERROR";
      }
    });

    // Check for any other hint-tenses related keys
    try {
      const allKeys = Object.keys(localStorage);
      const otherHintKeys = allKeys.filter(
        (key) => key.startsWith("hintTenses-") && !hintTensesKeys.includes(key)
      );

      if (otherHintKeys.length > 0) {
        otherHintKeys.forEach((key) => {
          const value = localStorage.getItem(key);
          currentState[key] = value;
        });
      }
    } catch (error) {
      toast.error("⚠️ Could not scan for additional keys");
    }

    return currentState;
  };

  const getTenseIcon = (displayName: string) => {
    // Simple icon mapping
    if (displayName.includes("Present")) return "⏰";
    if (displayName.includes("Past")) return "⌚";
    if (displayName.includes("Future")) return "🔮";
    if (displayName.includes("Perfect")) return "✨";
    if (displayName.includes("Continuous")) return "🔄";
    if (displayName.includes("Conditional")) return "🔀";
    return "📝";
  };

  const printTenseInfo = (params?: {
    key?: string;
    name?: string;
    displayName?: string;
  }) => {
    try {
      // 🔥 UPDATED: Using generateMultiTensePDF with specific tense or all tenses
      // This replaces the old window.print() functionality with professional PDF generation

      let tenseKeys: string[] = [];
      let tenseName = "";

      // Check if a specific tense item is passed
      if (params && params.key) {
        // Single tense mode - use the specific tense key passed
        tenseKeys = [params.key];
        tenseName = params.name || params.displayName || params.key;
      } else {
        // Fallback to all tenses if no specific tense is provided - use sorted keys
        tenseKeys = getSortedTenseKeys(tenseItems);
        tenseName = "All Tenses";
      }

      // Show loading feedback to user via page title
      const originalTitle = document.title;
      const loadingTitle =
        tenseKeys.length === 1
          ? `🔄 Generating PDF for ${tenseName}...`
          : `🔄 Generating PDF with ${tenseKeys.length} tenses...`;
      document.title = loadingTitle;

      // 🎯 CORE FUNCTIONALITY: Generate PDF with specified tense(s)
      // This uses the specialized generateMultiTensePDF function which creates:
      // - Professional cover page with tense name(s)
      // - Table of contents with navigation links (if multiple tenses)
      // - Detailed sections for each tense (theory, usage, examples, etc.)
      // - Proper formatting, styling, and layout for print
      generateMultiTensePDF(tenseKeys);

      // Restore title after generation starts
      setTimeout(() => {
        document.title = originalTitle;
      }, 3000);

    } catch (error) {
      alert("Failed to generate PDF. Please try again.");

      // Restore title if there was an error
      document.title = document.title.includes("🔄")
        ? "Grammar Exercise"
        : document.title;
    }
  };

  const closeModal = () => {
    setSelectedTense(null);
    setIsOpen(true);
  };

  const toggleAutoScrollQuick = () => {
    setAutoScroll(!autoScroll);
  };
  /**
   * Toggles the auto-scroll feature on or off.
   * Inverts the current state of the autoScroll variable.
   */

  const openScrollDurationModal = () => {
    setShowDurationSelector(true);
  };

  const handleDurationChange = (duration: number) => {
    setAutoScrollDuration(duration);
    localStorage.setItem("hintTenses-autoScrollDuration", duration.toString());
  };

  const allTenseKeys = Object.keys(tenseDatabase).filter(
    (key) => key !== "createdAt" && key !== "updatedAt"
  );

  // Auto-generate ALL tense items from tenseDatabase (items)
  const tenseItems: TenseItem[] = useMemo(() => {
    // Category mapping for better organization
    const getCategoryForKey = (
      key: string
    ): "tenses" | "conditionals" | "grammar" | "special" => {
      // Exact tense patterns (must include time indicators)
      if (
        key.includes("Present") ||
        key.includes("Past") ||
        key.includes("Future") ||
        key.includes("Perfect") ||
        key.includes("Continuous") ||
        // Specific tense keys
        key === "Simple_Present" ||
        key === "Present_Continuous" ||
        key === "Simple_Past" ||
        key === "Past_Continuous" ||
        key === "Present_Perfect" ||
        key === "Present_Perfect_Continuous" ||
        key === "Past_Perfect" ||
        key === "Past_Perfect_Continuous" ||
        key === "Simple_Future" ||
        key === "Future_Continuous" ||
        key === "Future_Perfect" ||
        key === "Future_Perfect_Continuous"
      ) {
        return "tenses";
      }

      // Conditionals - specific conditional patterns
      if (
        key.includes("Conditional") ||
        key.includes("conditional") ||
        key === "first_conditional" ||
        key === "second_conditional" ||
        key === "third_conditional" ||
        key === "mixed_conditionals" ||
        key === "conditionals"
      ) {
        return "conditionals";
      }

      // Special advanced structures
      if (
        key.includes("Certificate") ||
        key.includes("advanced") ||
        key.includes("Cleft") ||
        key.includes("cleft") ||
        key.includes("Emphasis") ||
        key.includes("emphasis") ||
        key.includes("Focus") ||
        key.includes("focus") ||
        key.includes("Discourse") ||
        key.includes("discourse") ||
        key.includes("Hedging") ||
        key.includes("hedging") ||
        key.includes("Nominalisation") ||
        key.includes("nominalisation") ||
        key.includes("Ellipsis") ||
        key.includes("ellipsis") ||
        key.includes("binomials") ||
        key.includes("collocations") ||
        key.includes("fixedExpressions") ||
        key.includes("idiomatic")
      ) {
        return "special";
      }

      // Everything else is grammar (articles, nouns, pronouns, adjectives, etc.)
      return "grammar";
    };

    // Format display name
    const formatDisplayName = (key: string): string => {
      return key
        .replace(/_/g, " ") // Replace underscores with spaces
        .replace(/([A-Z])/g, " $1") // Add space before capital letters
        .replace(/\s+/g, " ") // Replace multiple spaces with single space
        .trim() // Remove leading/trailing spaces
        .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
        .replace(/\s+([a-z])/g, (match, letter) => " " + letter.toUpperCase()); // Capitalize each word
    };

    // Generate items from database - IDs are assigned based on the natural order of keys ()
    // Store original index before any sorting to maintain fixed ID assignment
    const items: TenseItem[] = allTenseKeys.map((key, originalIndex) => ({
      key,
      name: key
        .replace(/_/g, " ")
        .replace(/([A-Z])/g, " $1")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/^./, (str) => str.toUpperCase())
        .replace(/\s+([a-z])/g, (match, letter) => " " + letter.toUpperCase()),
      displayName: formatDisplayName(key),
      category: getCategoryForKey(key),
      order: originalIndex + 1, // Order based on original database position
      cefrLevels: CEFR_TENSE_MAPPING[key] || ["B1"], // Default to B1 if not mapped
    }));

    // Return items without sorting here - sorting will be done in filteredTenses
    // IDs remain constant regardless of current sorting or filtering
    return items;
  }, []); // No dependencies since this only generates the base list

  // Create a sorted version of tense items that respects the current sort mode
  const getSortedTenseItems = useCallback(
    (items: TenseItem[], currentSortMode: string) => {
      const sorted = [...items]; // Create a copy to avoid mutating original
      const cefrOrder = ["A1", "A2", "B1", "B2", "C1", "C2"];

      switch (currentSortMode) {
        case "high_to_low":
          return sorted.sort((a, b) => b.order - a.order);
        case "level_a1_c2":
          return sorted.sort((a, b) => {
            const aLevel = cefrOrder.indexOf(a.cefrLevels[0] || "B1");
            const bLevel = cefrOrder.indexOf(b.cefrLevels[0] || "B1");
            return aLevel - bLevel;
          });
        case "level_c2_a1":
          return sorted.sort((a, b) => {
            const aLevel = cefrOrder.indexOf(a.cefrLevels[0] || "B1");
            const bLevel = cefrOrder.indexOf(b.cefrLevels[0] || "B1");
            return bLevel - aLevel;
          });
        case "name_a_z":
          return sorted.sort((a, b) =>
            a.displayName.localeCompare(b.displayName)
          );
        case "name_z_a":
          return sorted.sort((a, b) =>
            b.displayName.localeCompare(a.displayName)
          );
        case "low_to_high":
        default:
          return sorted.sort((a, b) => a.order - b.order);
      }
    },
    []
  );

  // Filter tenses based on search query, CEFR level, category, and bookmarks
  const filteredTenses = useMemo(() => {
    let filtered = tenseItems;

    if (showOnlyBookmarked) {
      filtered = filtered.filter((item) =>
        bookmarkedTenses.includes(item.name)
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.displayName.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.key.toLowerCase().includes(query)
      );
    }

    if (selectedCEFRLevel !== "ALL") {
      filtered = filtered.filter((item) =>
        item.cefrLevels.includes(selectedCEFRLevel as CEFRLevel)
      );
    }

    // Apply sorting using the current sortMode from state (which should be synced with localStorage)
    return getSortedTenseItems(filtered, sortMode);
  }, [
    searchQuery,
    selectedCEFRLevel,
    selectedCategory,
    tenseItems,
    showOnlyBookmarked,
    bookmarkedTenses,
    sortMode,
    getSortedTenseItems,
  ]);

  // Get sorted tense keys for PDF generation - ensures PDF follows the current sort order
  const getSortedTenseKeys = useCallback(
    (items: TenseItem[] = filteredTenses) => {
      const sorted = getSortedTenseItems(items, sortMode);
      return sorted.map((item) => item.key);
    },
    [filteredTenses, sortMode, getSortedTenseItems]
  );

  const handleTenseClick = (tenseItem: TenseItem, index: number) => {
    setIsOpen(false)
    setIndexCurrent(index);
    const tenseData =
      tenseDatabase[tenseItem.key as keyof typeof tenseDatabase];
    if (tenseData && typeof tenseData !== "string") {
      setSelectedTense({
        name: tenseItem.name,
        data: tenseData,
      });

      // Set currentTenseIndex to the original position in allTenseKeys (not filtered position)
      const originalIndex = allTenseKeys.indexOf(tenseItem.key);
      setCurrentTenseIndex(originalIndex !== -1 ? originalIndex : 0);
    }
  };

  const isHighlightedLevel = (tenseItem: TenseItem) => {
    return (
      selectedCEFRLevel !== "ALL" &&
      tenseItem.cefrLevels.includes(selectedCEFRLevel as CEFRLevel)
    );
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "development"
    ) {
      (
        window as typeof window & {
          hintTensesDebug?: {
            clearAllLocalStorage: () =>
              | false
              | {
                  success: boolean;
                  clearedCount: number;
                  failedCount: number;
                  failedKeys: string[];
                };
            debugLocalStorage: () => Record<
              string,
              string | string[] | number | null
            > | null;
            emergencyReset: () => {
              success: boolean;
              message: string;
              localStorageCleanup?:
                | boolean
                | {
                    success: boolean;
                    clearedCount: number;
                    failedCount: number;
                    failedKeys: string[];
                  };
            };
            reset: () => void;
            getCurrentState: () => object;
          };
        }
      ).hintTensesDebug = {
        clearAllLocalStorage: clearAllHintTensesLocalStorage,
        debugLocalStorage: debugLocalStorageState,
        emergencyReset: emergencyReset,
        reset: handleResetConfirm,
        getCurrentState: () => ({
          sortMode,
          selectedCategory,
          bookmarkedTenses: bookmarkedTenses.length,
          autoScrollDuration,
          showModalExtensions,
          selectedCEFRLevel,
          showOnlyBookmarked,
          autoScroll,
          modalViewMode,
          fontSizeMode,
          isOpen,
          searchQuery,
          currentTenseIndex,
          showStats,
          showCertificateOptions,
          showComparisonResult,
        }),
      };
    }

    // Cleanup on unmount
    return () => {
      if (
        typeof window !== "undefined" &&
        (window as typeof window & { hintTensesDebug?: unknown })
          .hintTensesDebug
      ) {
        delete (window as typeof window & { hintTensesDebug?: unknown })
          .hintTensesDebug;
      }
    };
  }, []); // Run once on mount after all state is initialized

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Floating Icon Button */}
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
        className="fixed h-14 bottom-6 left-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-30 group"
        title="Grammar Tenses Reference"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">📚</span>
          <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap">
            Tenses
          </span>
        </div>
      </Button>

      {/* Sheet Component for Grammar Dictionary */}
       <Sheet
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <SheetContent side="left" className="max-w-xl">
           <VisuallyHidden>
        <SheetTitle>Tiêu đề ẩn cho Sheet Hint</SheetTitle>
      </VisuallyHidden>
        {/* Enhanced Panel Header */}
        <HeaderPanel
          selectedCategory={selectedCategory}
          selectedCEFRLevel={selectedCEFRLevel}
          setSelectedCEFRLevel={setSelectedCEFRLevel}
          showOnlyBookmarked={showOnlyBookmarked}
          setShowOnlyBookmarked={setShowOnlyBookmarked}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          allTenseKeys={allTenseKeys}
          bookmarkedTenses={bookmarkedTenses}
          clearAllBookmarks={clearAllBookmarks}
          handleDownloadStudyPlan={handleDownloadStudyPlan}
          downloadBookmarkedAsPDF={downloadBookmarkedAsPDF}
          exportByCEFRAsPDF={exportByCEFRAsPDF}
          getRandomTense={getRandomTense}
          handleCategoryChange={handleCategoryChange}
          setSortMode={setSortMode}
          quickCompareRandomTenses={quickCompareRandomTenses}
          resetToDefaults={resetToDefaults}
          setShowCertificateOptions={setShowCertificateOptions}
          setShowStats={setShowStats}
          showCertificateOptions={showCertificateOptions}
          showStats={showStats}
          showModalExtensions={showModalExtensions}
          sortMode={sortMode}
          tenseItems={tenseItems}
          toggleModalExtensions={toggleModalExtensions}
        />

        {/* Statistics Panel */}
        {showStats && (
          <StatisticsPanel
            tenseItems={tenseItems}
            bookmarkedTenses={bookmarkedTenses}
          />
        )}

        {/* Certificate Options Panel */}
        {showCertificateOptions && (
          <Certificate
            handleIELTSPDF={handleIELTSPDF}
            handleTOEFLPDF={handleTOEFLPDF}
            handleCambridgePDF={handleCambridgePDF}
            handlePTEPDF={handlePTEPDF}
            handleSATPDF={handleSATPDF}
            handleTOEICPDF={handleTOEICPDF}
            handleVSTEPPDF={handleVSTEPPDF}
            handleAllCertificatesPDF={handleAllCertificatesPDF}
            loadingDownloadPDF={loadingDownloadPDF}
          />
        )}

        {/* Tenses List */}
        <TensesList
          bookmarkedTenses={bookmarkedTenses}
          filteredTenses={filteredTenses}
          handleTenseClick={handleTenseClick}
          isHighlightedLevel={isHighlightedLevel}
          getTenseIcon={getTenseIcon}
          selectedCEFRLevel={selectedCEFRLevel}
          tenseItems={tenseItems}
          generateMultiTensePDF={generateMultiTensePDF}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          toggleBookmark={toggleBookmark}
        />
        </SheetContent>
      </Sheet>


      {/* Detailed Tense Modal */}
      <DetailedTenseModal
        key={selectedTense?.name || "modal"}
        isOpen={!!selectedTense}
        onClose={closeModal}
        selectedTense={selectedTense}
        modalViewMode={modalViewMode}
        setModalViewMode={setModalViewMode}
        fontSizeMode={fontSizeMode}
        setFontSizeMode={setFontSizeMode}
        autoScroll={autoScroll}
        setAutoScroll={setAutoScroll}
        autoScrollDuration={autoScrollDuration}
        showModalExtensions={showModalExtensions}
        toggleModalExtensions={toggleModalExtensions}
        expandedSections={expandedSections}
        toggleSection={toggleSection}
        bookmarkedTenses={bookmarkedTenses}
        toggleBookmark={toggleBookmark}
        currentTenseIndex={currentTenseIndex}
        filteredTenses={filteredTenses}
        navigateToTense={navigateToTense}
        getRandomTense={getRandomTense}
        printTenseInfo={printTenseInfo}
        getTenseIcon={getTenseIcon}
        tenseItems={tenseItems}
        setExpandedSections={setExpandedSections}
        toggleAutoScrollQuick={toggleAutoScrollQuick}
        openScrollDurationModal={openScrollDurationModal}
        indexCurrent={indexCurrent}
      />

      {/* New Modal Components */}
      <CompareTensesModal
        isOpen={showCompareModal}
        onBack={() => {
          setShowCompareModal(false);
          setIsOpen(true);
        }}
        availableTenses={filteredTenses}
        bookmarkedTenses={bookmarkedTenses}
        showOnlyBookmarked={showOnlyBookmarked}
        onShowComparisonResult={(topics, aspects) => {
          setComparisonTopics(topics as TenseItem[]);
          setComparisonAspects(aspects);
          setShowCompareModal(false);
          setShowComparisonResult(true);
        }}
      />

      <ComparisonResultModal
        isOpen={showComparisonResult}
        onBack={() => {
          setShowComparisonResult(false);
          setShowCompareModal(true);
        }}
        topics={comparisonTopics}
        aspects={comparisonAspects}
        tenseDatabase={tenseDatabase}
      />

      {/* Reset Settings Dialog */}
      <ResetSettingDialog
        showResetDialog={showResetDialog}
        handleResetConfirm={handleResetConfirm}
        handleResetCancel={handleResetCancel}
        bookmarkedTenses={bookmarkedTenses}
        showModalExtensions={showModalExtensions}
        selectedCEFRLevel={selectedCEFRLevel}
        selectedCategory={selectedCategory}
        sortMode={sortMode}
        showOnlyBookmarked={showOnlyBookmarked}
        autoScroll={autoScroll}
        autoScrollDuration={autoScrollDuration}
        allTenseKeys={allTenseKeys}
        modalViewMode={modalViewMode}
        fontSizeMode={fontSizeMode}
      />

      {/* Clear All Bookmarks Dialog */}
      <BookmarkDialog
        bookmarkedTenses={bookmarkedTenses}
        handleClearBookmarksConfirm={handleClearBookmarksConfirm}
        setShowClearBookmarksDialog={setShowClearBookmarksDialog}
        showClearBookmarksDialog={showClearBookmarksDialog}
      />

      {/* Export All Options Dialog - Custom Three-Option Dialog */}
      {showExportAllDialog && (
        <ExportAllDialog
          loadingDownloadPDF={loadingDownloadPDF}
          setShowExportAllDialog={setShowExportAllDialog}
          handleGoToDownloadPage={handleGoToDownloadPage}
          handleDownloadImmediately={handleDownloadImmediately}
          tenseItems={tenseItems}
        />
      )}

      {/* Auto Scroll Duration Selector */}
      <AutoScrollDurationSelector
        isOpen={showDurationSelector}
        onClose={() => setShowDurationSelector(false)}
        currentDuration={autoScrollDuration}
        onDurationChange={handleDurationChange}
      />
    </>
  );
};

export default HintTenses;

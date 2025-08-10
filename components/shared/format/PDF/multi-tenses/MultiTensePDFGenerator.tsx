"use client";

import React, { useState, useMemo } from "react";
import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";
import { generateMultiTensePDF } from "./multi-tense-generator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MultiTensePDFGeneratorProps {
  className?: string;
}

const MultiTensePDFGenerator: React.FC<MultiTensePDFGeneratorProps> = ({
  className = "",
}) => {
  const [selectedTenses, setSelectedTenses] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Helper function to format tense names for display
  const formatTenseName = (key: string): string => {
    return key
      .split(/[_-]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  // Get all available tenses
  const allTenses = useMemo(() => {
    return Object.keys(tenseDatabase)
      .filter((key) => key !== "createdAt" && key !== "updatedAt")
      .map((key) => ({
        key,
        name: formatTenseName(key),
        data: tenseDatabase[key as keyof typeof tenseDatabase],
      }));
  }, []);

  // Filter tenses based on search term
  const filteredTenses = useMemo(() => {
    if (!searchTerm) return allTenses;

    return allTenses.filter(
      (tense) =>
        tense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tense.key.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allTenses, searchTerm]);

  // Categorize tenses for better organization
  const categorizedTenses = useMemo(() => {
    const categories: { [key: string]: typeof allTenses } = {
      "Present Tenses": [],
      "Past Tenses": [],
      "Future Tenses": [],
      "Perfect Tenses": [],
      "Continuous Tenses": [],
      "Other Tenses": [],
    };

    filteredTenses.forEach((tense) => {
      const name = tense.name.toLowerCase();
      if (name.includes("present")) {
        categories["Present Tenses"].push(tense);
      } else if (name.includes("past")) {
        categories["Past Tenses"].push(tense);
      } else if (name.includes("future")) {
        categories["Future Tenses"].push(tense);
      } else if (name.includes("perfect")) {
        categories["Perfect Tenses"].push(tense);
      } else if (name.includes("continuous") || name.includes("progressive")) {
        categories["Continuous Tenses"].push(tense);
      } else {
        categories["Other Tenses"].push(tense);
      }
    });

    // Remove empty categories
    return Object.entries(categories).filter(
      ([_, tenses]) => tenses.length > 0
    );
  }, [filteredTenses]);

  // Handle tense selection
  const handleTenseToggle = (tenseKey: string) => {
    setSelectedTenses((prev) => {
      if (prev.includes(tenseKey)) {
        return prev.filter((key) => key !== tenseKey);
      } else {
        return [...prev, tenseKey];
      }
    });
  };

  // Handle select all/none for a category
  const handleCategoryToggle = (
    categoryTenses: typeof allTenses,
    selectAll: boolean
  ) => {
    const categoryKeys = categoryTenses.map((t) => t.key);

    if (selectAll) {
      setSelectedTenses((prev) => [...new Set([...prev, ...categoryKeys])]);
    } else {
      setSelectedTenses((prev) =>
        prev.filter((key) => !categoryKeys.includes(key))
      );
    }
  };

  // Handle generate PDF
  const handleGeneratePDF = async () => {
    if (selectedTenses.length === 0) {
      alert("Please select at least one tense to generate the PDF.");
      return;
    }

    setIsGenerating(true);
    try {
      await generateMultiTensePDF(selectedTenses);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Clear all selections
  const handleClearAll = () => {
    setSelectedTenses([]);
  };

  // Select all visible tenses
  const handleSelectAll = () => {
    const allVisibleKeys = filteredTenses.map((t) => t.key);
    setSelectedTenses(allVisibleKeys);
  };

  return (
    <div className={`multi-tense-pdf-generator ${className}`}>
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-3">
          Multi-Tense PDF Generator
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          Select multiple tenses to combine them into one comprehensive PDF
          guide
        </p>
        <p className="text-sm text-gray-500">
          Tạo tài liệu PDF tổng hợp từ nhiều thì tiếng Anh
        </p>
      </div>

      {/* Search and Controls */}
      <div className="mb-6 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Input
            type="text"
            placeholder="Search tenses... / Tìm kiếm thì..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute right-3 top-3 text-gray-400">🔍</div>
        </div>

        {/* Selection Summary and Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold text-blue-800">
              Selected: {selectedTenses.length} tenses
            </span>
            {selectedTenses.length > 0 && (
              <span className="text-sm text-gray-600">
                ({selectedTenses.length} thì đã chọn)
              </span>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleSelectAll}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              disabled={filteredTenses.length === 0}
            >
              Select All Visible
            </Button>
            <Button
              onClick={handleClearAll}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
              disabled={selectedTenses.length === 0}
            >
              Clear All
            </Button>
          </div>
        </div>

        {/* Generate PDF Button */}
        <div className="text-center">
          <Button
            onClick={handleGeneratePDF}
            disabled={selectedTenses.length === 0 || isGenerating}
            className="px-8 py-4 bg-green-600 text-white text-xl font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg"
          >
            {isGenerating
              ? "Generating PDF... / Đang tạo PDF..."
              : `Generate PDF (${selectedTenses.length} tenses) / Tạo PDF (${selectedTenses.length} thì)`}
          </Button>
        </div>
      </div>

      {/* Tense Categories */}
      <div className="space-y-6">
        {categorizedTenses.map(([categoryName, categoryTenses]) => {
          const selectedInCategory = categoryTenses.filter((t) =>
            selectedTenses.includes(t.key)
          ).length;
          const allSelected = selectedInCategory === categoryTenses.length;
          // const someSelected = selectedInCategory > 0 && selectedInCategory < categoryTenses.length; // Removed because unused

          return (
            <div
              key={categoryName}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gray-100 p-4 border-b border-gray-300">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {categoryName}
                    <span className="ml-2 text-sm text-gray-600">
                      ({categoryTenses.length} tenses)
                    </span>
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      {selectedInCategory}/{categoryTenses.length} selected
                    </span>
                    <div className="flex gap-1">
                      <Button
                        onClick={() =>
                          handleCategoryToggle(categoryTenses, true)
                        }
                        className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
                        disabled={allSelected}
                      >
                        All
                      </Button>
                      <Button
                        onClick={() =>
                          handleCategoryToggle(categoryTenses, false)
                        }
                        className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors"
                        disabled={selectedInCategory === 0}
                      >
                        None
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Tenses */}
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {categoryTenses.map((tense) => {
                    const isSelected = selectedTenses.includes(tense.key);
                    return (
                      <div
                        key={tense.key}
                        className={`
                          p-3 border-2 rounded-lg cursor-pointer transition-all duration-200
                          ${
                            isSelected
                              ? "border-blue-500 bg-blue-50 shadow-md"
                              : "border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-25"
                          }
                        `}
                        onClick={() => handleTenseToggle(tense.key)}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`
                            w-5 h-5 rounded border-2 flex items-center justify-center
                            ${
                              isSelected
                                ? "border-blue-500 bg-blue-500"
                                : "border-gray-400"
                            }
                          `}
                          >
                            {isSelected && (
                              <span className="text-white text-xs font-bold">
                                ✓
                              </span>
                            )}
                          </div>

                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800 leading-tight">
                              {tense.name}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              Key: {tense.key}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      {selectedTenses.length > 0 && (
        <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">
            Selected Tenses ({selectedTenses.length}):
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedTenses.map((key) => {
              const tense = allTenses.find((t) => t.key === key);
              return (
                <span
                  key={key}
                  className="px-3 py-1 bg-green-600 text-white text-sm rounded-full"
                >
                  {tense?.name || key}
                </span>
              );
            })}
          </div>
          <p className="text-sm text-green-700 mt-3">
            Your PDF will include comprehensive coverage of all selected tenses
            with theory, usage, examples, common mistakes, and learning tips.
          </p>
        </div>
      )}

      {/* No Results */}
      {filteredTenses.length === 0 && searchTerm && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500 mb-2">
            No tenses found matching &quot;{searchTerm}&quot;
          </p>
          <p className="text-gray-400">
            Try adjusting your search term / Thử điều chỉnh từ khóa tìm kiếm
          </p>
        </div>
      )}
    </div>
  );
};

export default MultiTensePDFGenerator;

import React, { useState } from "react";
import Modal from "@/components/shared/modals/Modal";
import ContentModal from "./content-modal";
import { ComparisonAspects } from "./comparisonResultModal";

export interface TenseItemCompare {
  key: string;
  name: string;
  displayName: string;
  category: CategoryType;
  cefrLevels: string[];
}

export type CategoryType = "tenses" | "grammar" | "conditionals" | "special";

export type { ComparisonAspects };

interface CompareTensesModalProps {
  isOpen: boolean;
  onBack: () => void; // Optional back function for navigation
  availableTenses: TenseItemCompare[];
  bookmarkedTenses: string[];
  showOnlyBookmarked: boolean;
  onShowComparisonResult: (
    topics: TenseItemCompare[],
    aspects: ComparisonAspects
  ) => void;
}

const CompareTensesModal: React.FC<CompareTensesModalProps> = ({
  isOpen,
  availableTenses,
  bookmarkedTenses,
  showOnlyBookmarked,
  onShowComparisonResult,
  onBack,
}) => {
  const [selectedTopics, setSelectedTopics] = useState<{
    topic1: string;
    topic2: string;
    topic3: string;
  }>({ topic1: "", topic2: "", topic3: "" });

  // Helper function to detect which aspects are commonly available in the data
  const getSmartAspectDefaults = (): ComparisonAspects => {
    // Always enable core aspects that should be available for most topics
    const coreAspects = {
      definition: true,
      usage: true,
      structure: true,
      examples: true,
      level: true,
      includeAnalysis: true,
    };

    // Enable additional aspects that are likely to be available
    const commonAspects = {
      mistakes: true,
      tips: true,
      timeMarkers: false, // Not all topics have time markers
      advancedPatterns: false, // Only advanced topics have this
      spellingRules: false, // Specific to certain topics
      grammarRules: true,
      culturalUsage: false, // Limited availability
      practiceExercises: false, // Not always available
      learningProgression: false, // Limited availability
      assessment: false, // Not always available
      research: false, // Limited availability
      citations: false, // Limited availability
      digitalLearning: false, // Limited availability
    };

    return { ...coreAspects, ...commonAspects };
  };

  const [comparisonAspects, setComparisonAspects] = useState<ComparisonAspects>(
    getSmartAspectDefaults()
  );

  const [showThirdTopic, setShowThirdTopic] = useState(false);
  const [activeTab, setActiveTab] = useState<"quick" | "manual" | "advanced">(
    "quick"
  );
  const [currentHintPage, setCurrentHintPage] = useState(0);
  const [hintsPerPage, setHintsPerPage] = useState(6);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onBack}
      title="🔍 Advanced Grammar Topics Comparison"
      classCustomHeader="flex items-center justify-between"
      subtitle={
        showOnlyBookmarked &&
        `Comparing from ${bookmarkedTenses.length} bookmarked topics`
      }
      maxWidth="max-w-7xl"
      headerLayoutMode="classic"
      maxHeightNonFooter="max-h-[calc(95vh-220px)]"
    >
      <ContentModal
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        onClose={onBack}
        onShowComparisonResult={onShowComparisonResult}
        comparisonAspects={comparisonAspects}
        bookmarkedTenses={bookmarkedTenses}
        setSelectedTopics={setSelectedTopics}
        selectedTopics={selectedTopics}
        availableTenses={availableTenses}
        setComparisonAspects={setComparisonAspects}
        showThirdTopic={showThirdTopic}
        hintsPerPage={hintsPerPage}
        currentHintPage={currentHintPage}
        setShowThirdTopic={setShowThirdTopic}
        setCurrentHintPage={setCurrentHintPage}
        setHintsPerPage={setHintsPerPage}
      />
    </Modal>
  );
};

export default CompareTensesModal;

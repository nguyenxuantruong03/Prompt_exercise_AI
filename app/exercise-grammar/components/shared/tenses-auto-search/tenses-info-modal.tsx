import { useState } from "react";
import {
  formatDisplayName,
  findTenseData,
  renderTenseSections,
  type RenderProps,
} from "../../../../../components/shared/format/json_to_html/toggle-tenses";
import Modal from "../../../../../components/shared/modals/Modal";
import { Button } from "@/components/ui/button";

interface TenseInfoModalProps {
  isOpen: boolean;
  tenseName: string;
  onClose: () => void;
  onBackToPanel: () => void;
}

const TenseInfoModal: React.FC<TenseInfoModalProps> = ({
  isOpen,
  tenseName,
  onClose,
  onBackToPanel,
}) => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const [highlightedKeys, setHighlightedKeys] = useState<{
    [key: string]: boolean;
  }>({});

  // Function to toggle section expansion
  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const renderProps: RenderProps = {
    expandedSections,
    highlightedKeys,
    toggleSection,
    isModal: true,
  };

  const headerIcon = (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  );

  const footer = (
    <div className="flex items-center justify-between text-base text-gray-600 dark:text-gray-400">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <span>
          📚 Detailed view of <strong>{formatDisplayName(tenseName)}</strong>{" "}
          grammar reference
        </span>
      </div>
      <Button
        onClick={onBackToPanel}
        className="flex items-center gap-3 px-5 py-3 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-700 dark:text-blue-300 rounded-lg transition-colors duration-200"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0L2 10.414a1 1 0 010-1.414L6.293 4.707a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="hidden md:block">Back to Panel</span>
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={formatDisplayName(tenseName)}
      subtitle="Comprehensive Grammar Reference"
      headerIcon={headerIcon}
      footer={footer}
    >
      {(() => {
        const tenseResult = findTenseData(tenseName);
        return renderTenseSections(tenseResult, tenseName, renderProps);
      })()}
    </Modal>
  );
};

export default TenseInfoModal;

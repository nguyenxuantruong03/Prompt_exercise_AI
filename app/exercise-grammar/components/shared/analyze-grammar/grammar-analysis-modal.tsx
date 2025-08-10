import { useState } from "react";
import Modal from "../../../../../components/shared/modals/Modal";
import { CEFRLevel } from "@/types/grammars/grammars_type";
import { getElementDetails } from "./element/element-detail";
import { GrammarElement } from "@/types/grammar-analysis";
import { getElementColor, getElementLabel } from "./element/element-function";
import { Button } from "@/components/ui/button";

interface AnalyzedSentence {
  originalText: string;
  elements: GrammarElement[];
}

interface GrammarAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  sentence: AnalyzedSentence;
  proficiencyLevel: CEFRLevel;
}

interface ElementModalProps {
  isOpen: boolean;
  onClose: () => void;
  element: GrammarElement;
  proficiencyLevel: CEFRLevel;
}

// Individual grammar element modal
const ElementModal: React.FC<ElementModalProps> = ({
  isOpen,
  onClose,
  element,
  proficiencyLevel,
}) => {
  const details = getElementDetails(element.type, proficiencyLevel);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={details.title}
      subtitle={`Grammar Element Analysis - ${proficiencyLevel} Level`}
      maxWidth="max-w-4xl"
      headerIcon={
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      }
    >
      <div className="space-y-6">
        {/* Selected Element */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Selected Element: &quot;{element.text}&quot;
          </h3>
          <p className="text-blue-700 dark:text-blue-300">
            {details.description}
          </p>
        </div>

        {/* Grammar Rules */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            📚 Grammar Rules
          </h3>
          <div className="grid gap-3">
            {("rules" in details ? details.rules : []).map(
              (rule: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{rule}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Examples */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            💡 Examples for {proficiencyLevel} Level
          </h3>
          <div className="grid gap-2">
            {("examples" in details && Array.isArray(details.examples)
              ? details.examples
              : []
            ).map((example: string, index: number) => (
              <div
                key={index}
                className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800"
              >
                <span className="font-mono text-yellow-800 dark:text-yellow-200">
                  {example}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Description */}
        {element.description && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
              🎯 Context in This Sentence
            </h3>
            <p className="text-green-700 dark:text-green-300">
              {element.description}
            </p>
          </div>
        )}

        {/* ENHANCED: Contextual Analysis Information */}
        {element.contextualInfo && (
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3">
              🔍 Advanced Contextual Analysis
            </h3>
            <div className="grid gap-3">
              <div className="flex items-start gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold min-w-0 flex-shrink-0">
                  Position:
                </span>
                <span className="text-indigo-700 dark:text-indigo-300">
                  {element.contextualInfo.position}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold min-w-0 flex-shrink-0">
                  Function:
                </span>
                <span className="text-indigo-700 dark:text-indigo-300">
                  {element.contextualInfo.grammaticalFunction}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold min-w-0 flex-shrink-0">
                  Role:
                </span>
                <span className="text-indigo-700 dark:text-indigo-300">
                  {element.contextualInfo.semanticRole}
                </span>
              </div>
              {element.contextualInfo.precedingWords && (
                <div className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold min-w-0 flex-shrink-0">
                    Preceding:
                  </span>
                  <span className="text-indigo-700 dark:text-indigo-300 font-mono text-sm">
                    &quot;{element.contextualInfo.precedingWords.trim()}&quot;
                  </span>
                </div>
              )}
              {element.contextualInfo.followingWords && (
                <div className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold min-w-0 flex-shrink-0">
                    Following:
                  </span>
                  <span className="text-indigo-700 dark:text-indigo-300 font-mono text-sm">
                    &quot;{element.contextualInfo.followingWords.trim()}&quot;
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

// Main grammar analysis modal
const GrammarAnalysisModal: React.FC<GrammarAnalysisModalProps> = ({
  isOpen,
  onClose,
  sentence,
  proficiencyLevel,
}) => {
  const [selectedElement, setSelectedElement] = useState<GrammarElement | null>(
    null
  );

  // Create annotated sentence with clickable elements
  const renderAnnotatedSentence = () => {
    if (!sentence.elements || sentence.elements.length === 0) {
      return <span className="text-lg">{sentence.originalText}</span>;
    }

    const sortedElements = [...sentence.elements].sort(
      (a, b) => a.startPos - b.startPos
    );
    const parts = [];
    let lastPos = 0;

    sortedElements.forEach((element, index) => {
      // Add text before this element
      if (element.startPos > lastPos) {
        const beforeText = sentence.originalText.slice(
          lastPos,
          element.startPos
        );
        if (beforeText.trim()) {
          parts.push(
            <span key={`before-${index}`} className="text-lg">
              {beforeText}
            </span>
          );
        }
      }

      // Add the clickable element
      parts.push(
        <div key={`element-${index}`} className="relative inline-block group">
          <Button
            onClick={() => setSelectedElement(element)}
            className={`relative px-2 py-1 rounded text-sm font-semibold cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md ${getElementColor(
              element.type
            )}`}
          >
            {element.text}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold opacity-75">
              {getElementLabel(element.type)}
            </div>
          </Button>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
            Click to learn about {element.type}
          </div>
        </div>
      );

      lastPos = element.endPos;
    });

    // Add remaining text
    if (lastPos < sentence.originalText.length) {
      const remainingText = sentence.originalText.slice(lastPos);
      if (remainingText.trim()) {
        parts.push(
          <span key="remaining" className="text-lg">
            {remainingText}
          </span>
        );
      }
    }

    return (
      <div className="flex flex-wrap items-center gap-x-2 gap-y-8">{parts}</div>
    );
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Grammar Analysis"
        subtitle={`Detailed sentence breakdown for ${proficiencyLevel} level`}
        maxWidth="max-w-6xl"
        headerIcon={
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H16a1 1 0 110 2h-3.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H4a1 1 0 110-2h3.47l.56-2.243a1 1 0 011.213-.727zM8.53 8l-1 4h2.94l1-4H8.53z"
              clipRule="evenodd"
            />
          </svg>
        }
      >
        <div className="space-y-6">
          {/* Instructions */}
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
              🎯 Interactive Grammar Analysis
            </h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Click on the colored words below to learn about different parts of
              the sentence. Each word is labeled with its grammatical function.
            </p>
          </div>

          {/* Annotated Sentence */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              📝 Sentence Analysis
            </h3>
            <div className="text-center py-4">{renderAnnotatedSentence()}</div>
          </div>

          {/* Grammar Elements Legend */}
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              🏷️ Grammar Elements Legend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              {sentence.elements
                .map((element) => (
                  <div key={element.id} className="flex items-center gap-2">
                    <div
                      className={`px-2 py-1 rounded text-xs font-semibold ${getElementColor(
                        element.type
                      )}`}
                    >
                      {getElementLabel(element.type)}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                      {element.type}
                    </span>
                  </div>
                ))
                .filter(
                  (item, index, self) =>
                    self.findIndex((t) => t.key === item.key) === index
                )}
            </div>
          </div>

          {/* Quick Tips */}
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              💡 Learning Tips for {proficiencyLevel} Level
            </h3>
            <ul className="list-disc list-inside space-y-1 text-yellow-700 dark:text-yellow-300 text-sm">
              {proficiencyLevel === "A1" || proficiencyLevel === "A2" ? (
                <>
                  <li>Focus on identifying the main subject and verb first</li>
                  <li>Look for articles (a, an, the) before nouns</li>
                  <li>Notice the word order: Subject + Verb + Object</li>
                </>
              ) : (
                <>
                  <li>Analyze complex sentence structures and clauses</li>
                  <li>
                    Pay attention to how different elements relate to each other
                  </li>
                  <li>
                    Consider the semantic roles beyond basic grammatical
                    functions
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </Modal>

      {/* Element Detail Modal */}
      {selectedElement && (
        <ElementModal
          isOpen={!!selectedElement}
          onClose={() => setSelectedElement(null)}
          element={selectedElement}
          proficiencyLevel={proficiencyLevel}
        />
      )}
    </>
  );
};

export {
  GrammarAnalysisModal,
  ElementModal,
  type AnalyzedSentence,
  type GrammarElement,
};
export default GrammarAnalysisModal;

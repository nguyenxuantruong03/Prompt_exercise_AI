import { Button } from "@/components/ui/button";
import { Question } from "../../../../../types/grammars/grammars_type";
import {
  getInlineElementColor,
  getInlineElementLabel,
} from "./element/element-function";
import { AnalyzedSentence, GrammarElement } from "./grammar-analysis-modal";

export const renderQuestionWithInlineAnalysis = (
  question: Question,
  autoAnalyzedQuestions: Record<number, AnalyzedSentence>,
  autoAnalyzeEnabled: boolean,
  setSelectedElement: (element: GrammarElement) => void,
  setShowElementModal: (show: boolean) => void
) => {
  const analyzed = autoAnalyzedQuestions[question.id];

  if (!autoAnalyzeEnabled || !analyzed) {
    // Return plain text if auto-analysis is disabled or not available
    return `${question.id}. ${question.question}`;
  }

  // Use the inline annotated sentence renderer for the question text
  const annotatedContent = renderInlineAnnotatedSentence(
    analyzed,
    setSelectedElement,
    setShowElementModal
  );

  return (
    <span className="flex items-center gap-2 text-lg mt-3">
      {question.id}. {annotatedContent}
    </span>
  );
};

// Create annotated sentence with clickable elements (exactly like the modal)
const renderInlineAnnotatedSentence = (
  sentence: AnalyzedSentence,
  setSelectedElement: (element: GrammarElement) => void,
  setShowElementModal: (show: boolean) => void
) => {
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
      const beforeText = sentence.originalText.slice(lastPos, element.startPos);
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
          onClick={() => {
            // Open ElementModal directly
            setSelectedElement(element);
            setShowElementModal(true);
          }}
          className={`relative px-2 py-1 rounded text-sm font-semibold cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md ${getInlineElementColor(
            element.type
          )}`}
        >
          {element.text}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold opacity-75">
            {getInlineElementLabel(element.type)}
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

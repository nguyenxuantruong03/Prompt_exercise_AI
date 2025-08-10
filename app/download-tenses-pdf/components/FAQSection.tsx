import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = React.memo(
  ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <Button
          onClick={onToggle}
          className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-800 flex items-start gap-2">
              <span className="text-blue-500">Q:</span>
              {question}
            </h3>
            <span
              className={`transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </div>
        </Button>
        {isOpen && (
          <div className="px-6 pb-6">
            <p className="text-gray-700 leading-relaxed flex items-start gap-2">
              <span className="text-green-500 font-bold">A:</span>
              {answer}
            </p>
          </div>
        )}
      </div>
    );
  }
);

FAQItem.displayName = "FAQItem";

interface FAQSectionProps {
  faqData: ReadonlyArray<{
    readonly question: string;
    readonly answer: string;
  }>;
}

const FAQSection = React.memo(({ faqData }: FAQSectionProps) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
});

FAQSection.displayName = "FAQSection";

export default FAQSection;

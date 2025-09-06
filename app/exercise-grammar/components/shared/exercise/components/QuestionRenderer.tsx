import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Question } from "@/types/grammars/grammars_type";
import ContextMatchingQuestion from "./context-matching-question";
import PassiveActiveMatching from "./passive-active-matching";
import ClauseCombining from "./clause-combining";
import MultiTopicIntegration from "./multi-topic-integration";
import GrammarGeneratorQuestion from "./grammar-generator-question";
import TrueFalseLightningQuestion from "./true-false-lightning-question";

interface QuestionRendererProps {
  question: Question;
  selectedAnswers: { [key: number]: number | string };
  showResults: boolean;
  handleAnswerSelect: (questionId: number, answerIndex: number) => void;
  handleInputAnswer: (questionId: number, answer: string) => void;
  onQuestionComplete?: () => void; // For lightning game
}

const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  selectedAnswers,
  showResults,
  handleAnswerSelect,
  handleInputAnswer,
  onQuestionComplete,
}) => {
  // Grammar Generator questions
  if (question.type === "grammar-generator") {
    return (
      <GrammarGeneratorQuestion
        question={question}
        selectedAnswers={selectedAnswers}
        showResults={showResults}
        handleInputAnswer={handleInputAnswer}
      />
    );
  }

  // True/False Lightning questions
  if (question.type === "true-false-lightning") {
    return (
      <TrueFalseLightningQuestion
        question={question}
        selectedAnswers={selectedAnswers}
        showResults={showResults}
        handleAnswerSelect={handleAnswerSelect}
        onQuestionComplete={onQuestionComplete}
      />
    );
  }
  // Context matching questions
  if (question.type === "context-matching") {
    return (
      <ContextMatchingQuestion
        question={question}
        selectedAnswers={selectedAnswers}
        showResults={showResults}
        handleAnswerSelect={handleAnswerSelect}
      />
    );
  }

  // Passive-Active matching questions
  if (question.type === "passive-active-matching") {
    return (
      <PassiveActiveMatching
        question={question}
        selectedAnswers={selectedAnswers}
        showResults={showResults}
        handleAnswerSelect={handleAnswerSelect}
      />
    );
  }

  // Clause combining questions
  if (question.type === "clause-combining") {
    return (
      <ClauseCombining
        question={question}
        selectedAnswers={selectedAnswers}
        showResults={showResults}
        handleAnswerSelect={handleAnswerSelect}
      />
    );
  }

  // Multi-topic integration questions
  if (question.type === "multi-topic-integration") {
    return (
      <MultiTopicIntegration
        question={question}
        selectedAnswers={selectedAnswers}
        showResults={showResults}
        handleAnswerSelect={handleAnswerSelect}
        handleInputAnswer={handleInputAnswer}
      />
    );
  }

  // Multiple choice questions
  if (
    (question.type === "multiple-choice" ||
      question.type === "cloze-test" ||
      question.type === "transformation" ||
      question.type === "paraphrasing" ||
      question.type === "sentence-building" ||
      question.type === "verb-conjugation" ||
      question.type === "word-formation" ||
      question.type === "sentence-combining" ||
      question.type === "dialogue-completion" ||
      question.type === "punctuation" ||
      question.type === "comparison-exercise") &&
    question.options &&
    question.options.length > 0
  ) {
    return (
      <div className="space-y-2">
        {question.options.map((option: string, index: number) => (
          <label
            key={index}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <Input
              type="radio"
              name={`question-${question.id}`}
              value={index}
              checked={selectedAnswers[question.id] === index}
              onChange={() => handleAnswerSelect(question.id, index)}
              className="w-4 h-4 text-blue-600"
            />
            <span
              className={`${
                showResults
                  ? index === question.correct
                    ? "text-green-600 font-semibold"
                    : selectedAnswers[question.id] === index &&
                      index !== question.correct
                    ? "text-red-600"
                    : "text-gray-700 dark:text-gray-300"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {option}
            </span>
          </label>
        ))}
      </div>
    );
  }

  // Fill-in-blank questions
  if (
    question.type === "fill-in-blank" ||
    question.type === "sentence-completion"
  ) {
    return (
      <div className="space-y-2">
        <Input
          type="text"
          value={(selectedAnswers[question.id] as string) || ""}
          onChange={(e) => handleInputAnswer(question.id, e.target.value)}
          placeholder="Type your answer here..."
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
            showResults
              ? selectedAnswers[question.id] === question.correct
                ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                : "border-red-500 bg-red-50 dark:bg-red-900/20"
              : "border-gray-300 dark:border-gray-600"
          }`}
          disabled={showResults}
        />
        {showResults && (
          <div className="mt-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your answer:{" "}
              <span
                className={
                  selectedAnswers[question.id] === question.correct
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {selectedAnswers[question.id] || "(no answer)"}
              </span>
            </p>
            <p className="text-sm text-green-600">
              Correct answer:{" "}
              <span className="font-semibold">{question.correct}</span>
            </p>
          </div>
        )}
      </div>
    );
  }

  // Reading comprehension questions
  if (question.type === "reading-comprehension") {
    return (
      <div className="space-y-4">
        {question.passage && (
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold mb-2">Reading Passage:</h4>
            <p className="text-gray-800 dark:text-gray-200">
              {question.passage}
            </p>
          </div>
        )}
        {question.options ? (
          <div className="space-y-2">
            {question.options.map((option: string, index: number) => (
              <label
                key={index}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <Input
                  type="radio"
                  name={`question-${question.id}`}
                  value={index}
                  checked={selectedAnswers[question.id] === index}
                  onChange={() => handleAnswerSelect(question.id, index)}
                  className="w-4 h-4 text-blue-600"
                />
                <span
                  className={`${
                    showResults
                      ? index === question.correct
                        ? "text-green-600 font-semibold"
                        : selectedAnswers[question.id] === index &&
                          index !== question.correct
                        ? "text-red-600"
                        : "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
        ) : (
          <Input
            type="text"
            value={(selectedAnswers[question.id] as string) || ""}
            onChange={(e) => handleInputAnswer(question.id, e.target.value)}
            placeholder="Type your answer here..."
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
              showResults
                ? selectedAnswers[question.id] === question.correct
                  ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                  : "border-red-500 bg-red-50 dark:bg-red-900/20"
                : "border-gray-300 dark:border-gray-600"
            }`}
            disabled={showResults}
          />
        )}
      </div>
    );
  }

  // Error correction questions
  if (question.type === "error-correction") {
    return (
      <div className="space-y-4">
        {question.incorrectText && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">
              Find and correct the error(s):
            </h4>
            <p className="text-gray-800 dark:text-gray-200">
              {question.incorrectText}
            </p>
          </div>
        )}
        <Textarea
          value={(selectedAnswers[question.id] as string) || ""}
          onChange={(e) => handleInputAnswer(question.id, e.target.value)}
          placeholder="Write the corrected version here..."
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
            showResults
              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
              : "border-gray-300 dark:border-gray-600"
          }`}
          rows={3}
          disabled={showResults}
        />
        {showResults && (
          <div className="mt-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your correction:{" "}
              <span className="text-blue-600">
                {selectedAnswers[question.id] || "(no answer)"}
              </span>
            </p>
            <p className="text-sm text-green-600">
              Correct version:{" "}
              <span className="font-semibold">{question.correct}</span>
            </p>
          </div>
        )}
      </div>
    );
  }

  // Word order questions
  if (question.type === "word-order") {
    return (
      <div className="space-y-4">
        {question.words && (
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
              Arrange these words in the correct order:
            </h4>
            <div className="flex flex-wrap gap-2">
              {question.words.map((word: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white dark:bg-gray-700 border rounded-lg text-sm"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        )}
        <Input
          type="text"
          value={(selectedAnswers[question.id] as string) || ""}
          onChange={(e) => handleInputAnswer(question.id, e.target.value)}
          placeholder="Write the sentence in correct order..."
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
            showResults
              ? selectedAnswers[question.id] === question.correct
                ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                : "border-red-500 bg-red-50 dark:bg-red-900/20"
              : "border-gray-300 dark:border-gray-600"
          }`}
          disabled={showResults}
        />
        {showResults && (
          <div className="mt-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your answer:{" "}
              <span
                className={
                  selectedAnswers[question.id] === question.correct
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {selectedAnswers[question.id] || "(no answer)"}
              </span>
            </p>
            <p className="text-sm text-green-600">
              Correct order:{" "}
              <span className="font-semibold">{question.correct}</span>
            </p>
          </div>
        )}
      </div>
    );
  }

  // Matching questions
  if (question.type === "matching") {
    return (
      <div className="space-y-4">
        {question.pairs && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Column A:</h4>
              <div className="space-y-2">
                {question.pairs.map((pair, index) => (
                  <div
                    key={index}
                    className="p-2 bg-gray-50 dark:bg-gray-700 rounded"
                  >
                    {index + 1}. {pair.left}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Column B:</h4>
              <div className="space-y-2">
                {question.pairs.map((pair, index) => (
                  <div
                    key={index}
                    className="p-2 bg-gray-50 dark:bg-gray-700 rounded"
                  >
                    {String.fromCharCode(97 + index)}. {pair.right}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <Input
          type="text"
          value={(selectedAnswers[question.id] as string) || ""}
          onChange={(e) => handleInputAnswer(question.id, e.target.value)}
          placeholder="Enter matches (e.g., 1a, 2c, 3b)..."
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
            showResults
              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
              : "border-gray-300 dark:border-gray-600"
          }`}
          disabled={showResults}
        />
        {showResults && (
          <div className="mt-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your matches:{" "}
              <span className="text-blue-600">
                {selectedAnswers[question.id] || "(no answer)"}
              </span>
            </p>
            <p className="text-sm text-green-600">
              Correct matches:{" "}
              <span className="font-semibold">{question.correct}</span>
            </p>
          </div>
        )}
      </div>
    );
  }

  // Text-based questions (sentence-combining, sentence-building, word-formation, verb-conjugation without options)
  if (
    (question.type === "sentence-combining" ||
      question.type === "sentence-building" ||
      question.type === "word-formation" ||
      question.type === "verb-conjugation") &&
    (!question.options || question.options.length === 0)
  ) {
    return (
      <div className="space-y-4">
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
            {question.type === "sentence-combining"
              ? "Combine the sentence parts:"
              : question.type === "sentence-building"
              ? "Build a complete sentence:"
              : question.type === "word-formation"
              ? "Form the correct word:"
              : "Complete the exercise:"}
          </h4>
          <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
            {question.type === "sentence-combining"
              ? "Arrange the fragments into a grammatically correct sentence."
              : question.type === "sentence-building"
              ? "Use the given elements to build a complete sentence."
              : question.type === "word-formation"
              ? "Form the correct word using the root provided."
              : "Complete this grammar exercise."}
          </p>
        </div>
        <Textarea
          value={(selectedAnswers[question.id] as string) || ""}
          onChange={(e) => handleInputAnswer(question.id, e.target.value)}
          placeholder={
            question.type === "sentence-combining"
              ? "Write the complete sentence here..."
              : question.type === "sentence-building"
              ? "Build your sentence here..."
              : question.type === "word-formation"
              ? "Write the formed word here..."
              : "Write your answer here..."
          }
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
            showResults
              ? selectedAnswers[question.id] === question.correct
                ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                : "border-red-500 bg-red-50 dark:bg-red-900/20"
              : "border-gray-300 dark:border-gray-600"
          }`}
          rows={3}
          disabled={showResults}
        />
        {showResults && (
          <div className="mt-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your answer:{" "}
              <span
                className={
                  selectedAnswers[question.id] === question.correct
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {selectedAnswers[question.id] || "(no answer)"}
              </span>
            </p>
            <p className="text-sm text-green-600">
              Correct answer:{" "}
              <span className="font-semibold">{question.correct}</span>
            </p>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default QuestionRenderer;

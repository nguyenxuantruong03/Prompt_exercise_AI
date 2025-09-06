import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Question } from "@/types/grammars/grammars_type";

interface GrammarGeneratorQuestionProps {
  question: Question;
  selectedAnswers: { [key: number]: number | string };
  showResults: boolean;
  handleInputAnswer: (questionId: number, answer: string) => void;
}

const GrammarGeneratorQuestion: React.FC<GrammarGeneratorQuestionProps> = ({
  question,
  selectedAnswers,
  showResults,
  handleInputAnswer,
}) => {
  const [userSentences, setUserSentences] = useState<string[]>([""]);
  const [currentTask, setCurrentTask] = useState<
    "generate" | "evaluate" | "modify"
  >("generate");
  const [showExamples, setShowExamples] = useState(false);

  const generatorData = question.generatorData;
  if (!generatorData) return null;

  const addSentenceField = () => {
    if (userSentences.length < 5) {
      setUserSentences([...userSentences, ""]);
    }
  };

  const updateSentence = (index: number, sentence: string) => {
    const newSentences = [...userSentences];
    newSentences[index] = sentence;
    setUserSentences(newSentences);

    // Update the answer for the parent component
    const allSentences = newSentences.filter((s) => s.trim()).join(" | ");
    handleInputAnswer(question.id, allSentences);
  };

  const removeSentenceField = (index: number) => {
    if (userSentences.length > 1) {
      const newSentences = userSentences.filter((_, i) => i !== index);
      setUserSentences(newSentences);

      // Update the answer
      const allSentences = newSentences.filter((s) => s.trim()).join(" | ");
      handleInputAnswer(question.id, allSentences);
    }
  };

  // Auto-generate a sentence as a hint
  const generateHintSentence = () => {
    if (generatorData.vocabulary.length >= 2) {
      const vocabulary = generatorData.vocabulary;
      let hint = "";

      if (generatorData.grammarRule.toLowerCase().includes("present simple")) {
        hint = `${vocabulary[0]} ${
          vocabulary.length > 1 ? vocabulary[1] : "every day"
        }.`;
      } else if (generatorData.grammarRule.toLowerCase().includes("past")) {
        hint = `Yesterday, ${vocabulary[0]}ed ${
          vocabulary.length > 1 ? vocabulary[1] : "something"
        }.`;
      } else {
        hint = `Try using: ${vocabulary.slice(0, 3).join(", ")} in a sentence.`;
      }

      if (userSentences[0] === "") {
        updateSentence(0, hint);
      } else {
        setUserSentences([...userSentences, hint]);
      }
    }
  };

  return (
    <div className="space-y-4">
      {/* Grammar Rule Display */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
          📝 Grammar Rule: {generatorData.grammarRule}
        </h4>
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">
            Vocabulary:
          </span>
          {generatorData.vocabulary.map((word, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded text-sm"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Task Selection */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant={currentTask === "generate" ? "default" : "outline"}
          size="sm"
          onClick={() => setCurrentTask("generate")}
          disabled={showResults}
        >
          🎯 Generate Sentences
        </Button>
        <Button
          variant={currentTask === "evaluate" ? "default" : "outline"}
          size="sm"
          onClick={() => setCurrentTask("evaluate")}
          disabled={showResults}
        >
          📊 Evaluate Examples
        </Button>
        <Button
          variant={currentTask === "modify" ? "default" : "outline"}
          size="sm"
          onClick={() => setCurrentTask("modify")}
          disabled={showResults}
        >
          ✏️ Modify Sentences
        </Button>
      </div>

      {/* Task Content */}
      {currentTask === "generate" && (
        <div className="space-y-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Create your own sentences using the vocabulary words and the grammar
            rule:
          </p>

          {userSentences.map((sentence, index) => (
            <div key={index} className="flex gap-2 items-center">
              <span className="text-sm font-medium text-gray-500 min-w-[20px]">
                {index + 1}.
              </span>
              <Textarea
                value={sentence}
                onChange={(e) => updateSentence(index, e.target.value)}
                placeholder={`Write sentence ${
                  index + 1
                } using the vocabulary and grammar rule...`}
                className="flex-1 min-h-[60px]"
                disabled={showResults}
              />
              {!showResults && userSentences.length > 1 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeSentenceField(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  ✕
                </Button>
              )}
            </div>
          ))}

          {!showResults && userSentences.length < 5 && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={addSentenceField}
                className="flex-1 border-dashed"
              >
                + Add Another Sentence
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={generateHintSentence}
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                💡 Get Hint
              </Button>
            </div>
          )}
        </div>
      )}

      {currentTask === "evaluate" && (
        <div className="space-y-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Evaluate these AI-generated sentences. Are they grammatically
            correct?
          </p>

          {generatorData.generatedSentences.map((sentence, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-3 rounded border"
            >
              <p className="font-medium mb-2">{sentence}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="text-green-600">
                  ✓ Correct
                </Button>
                <Button size="sm" variant="outline" className="text-red-600">
                  ✗ Incorrect
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {currentTask === "modify" && (
        <div className="space-y-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Improve or modify these sentences to better use the grammar rule:
          </p>

          {generatorData.generatedSentences.map((sentence, index) => (
            <div key={index} className="space-y-2">
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded border">
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Original: {sentence}
                </p>
                <Textarea
                  placeholder="Write your improved version..."
                  className="w-full"
                  disabled={showResults}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show Examples Toggle */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowExamples(!showExamples)}
        className="w-full"
      >
        {showExamples ? "🔼 Hide Examples" : "🔽 Show Example Sentences"}
      </Button>

      {showExamples && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
            💡 Example Sentences:
          </h4>
          <ul className="space-y-1">
            {generatorData.generatedSentences.map((sentence, index) => (
              <li
                key={index}
                className="text-green-700 dark:text-green-300 text-sm"
              >
                • {sentence}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Results Display */}
      {showResults && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
            📋 Your Sentences:
          </h4>
          {userSentences.filter((s) => s.trim()).length > 0 ? (
            <ul className="space-y-1">
              {userSentences
                .filter((s) => s.trim())
                .map((sentence, index) => (
                  <li
                    key={index}
                    className="text-blue-700 dark:text-blue-300 text-sm"
                  >
                    {index + 1}. {sentence}
                  </li>
                ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm italic">
              No sentences created.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default GrammarGeneratorQuestion;

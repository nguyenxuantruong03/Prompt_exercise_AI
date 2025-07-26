import {
  getRelevantSuggestions,
  levelEquivalencies,
} from "@/lib/grammars/grammar";
import { CEFRLevel, TypeExcercise } from "@/types/grammars/grammars_type";
import { Dispatch, SetStateAction } from "react";

interface InputSectionProps {
  activeTab: "generate" | "fix";
  proficiencyLevel: string;
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  exerciseType: string;
  setExerciseType: Dispatch<SetStateAction<TypeExcercise>>; // Adjust type as needed
  numExercises: number;
  setNumExercises: Dispatch<SetStateAction<number>>;
  generateExercise: () => void;
  fixGrammar: () => void;
  resetExercise: () => void;
  loading: boolean;
  showSuggestions: boolean;
  setShowSuggestions: Dispatch<SetStateAction<boolean>>;
  handleSuggestionClick: (suggestion: string) => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  activeTab,
  proficiencyLevel,
  inputText,
  setInputText,
  exerciseType,
  setExerciseType,
  numExercises,
  setNumExercises,
  generateExercise,
  fixGrammar,
  resetExercise,
  loading,
  showSuggestions,
  setShowSuggestions,
  handleSuggestionClick,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {activeTab === "generate"
          ? "Enter a topic or text to generate grammar exercises:"
          : "Enter text to fix grammar errors:"}
      </label>

      {/* Grammar Suggestions - only show for generate tab */}
      {activeTab === "generate" && (
        <div className="mb-3">
          <button
            onClick={() => setShowSuggestions(!showSuggestions)}
            className="flex items-center gap-2 px-3 py-2 text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Grammar Topic Suggestions
            <svg
              className={`w-4 h-4 transition-transform ${
                showSuggestions ? "rotate-180" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {showSuggestions && (
            <div className="mt-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border">
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Suggestions for {proficiencyLevel} Level
                  </span>
                  <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded">
                    {
                      levelEquivalencies[proficiencyLevel as CEFRLevel]
                        .description
                    }
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(getRelevantSuggestions(proficiencyLevel)).map(
                  ([category, suggestions]) => (
                    <div key={category} className="space-y-2">
                      <h4
                        className={`font-semibold text-sm border-b pb-1 ${
                          category.includes("Recommended")
                            ? "text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-600"
                            : "text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
                        }`}
                      >
                        {category.includes("Recommended") && (
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                        )}
                        {category}
                      </h4>
                      <div className="space-y-1">
                        {suggestions.map(
                          (suggestion: string, index: number) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className={`block w-full text-left text-xs px-2 py-1 rounded transition-colors ${
                                category.includes("Recommended")
                                  ? "text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-800 dark:hover:text-blue-200"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
                              }`}
                            >
                              {suggestion}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-600">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  💡 <strong>Blue topics</strong> are recommended for your
                  current level ({proficiencyLevel}). Click any suggestion to
                  use it, or type your own custom topic.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={
          activeTab === "generate"
            ? 'e.g., "past tense verbs" or "conditional sentences" (or use suggestions above)'
            : 'e.g., "I have went to the store yesterday"'
        }
        className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
      />

      {/* Exercise Type Selection - only show for generate tab */}
      {activeTab === "generate" && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Exercise Type:
          </label>

          {/* Basic Exercise Types */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Basic Types
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="multiple-choice"
                  checked={exerciseType === "multiple-choice"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Multiple Choice
                  </div>
                  <div className="text-xs text-gray-500">
                    Choose from options
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="fill-in-blank"
                  checked={exerciseType === "fill-in-blank"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Fill in Blanks
                  </div>
                  <div className="text-xs text-gray-500">
                    Type missing words
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="sentence-completion"
                  checked={exerciseType === "sentence-completion"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Complete Sentences
                  </div>
                  <div className="text-xs text-gray-500">
                    Finish the sentence
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="cloze-test"
                  checked={exerciseType === "cloze-test"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Cloze Test
                  </div>
                  <div className="text-xs text-gray-500">Fill text gaps</div>
                </div>
              </label>
            </div>
          </div>

          {/* Advanced Exercise Types */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Advanced Types
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="transformation"
                  checked={exerciseType === "transformation"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Transformation
                  </div>
                  <div className="text-xs text-gray-500">Rewrite sentences</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="paraphrasing"
                  checked={exerciseType === "paraphrasing"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Paraphrasing
                  </div>
                  <div className="text-xs text-gray-500">Rephrase meaning</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="sentence-combining"
                  checked={exerciseType === "sentence-combining"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Sentence Combining
                  </div>
                  <div className="text-xs text-gray-500">Join sentences</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="sentence-building"
                  checked={exerciseType === "sentence-building"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Sentence Building
                  </div>
                  <div className="text-xs text-gray-500">Build from words</div>
                </div>
              </label>
            </div>
          </div>

          {/* Specialized Exercise Types */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Specialized Types
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="verb-conjugation"
                  checked={exerciseType === "verb-conjugation"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Verb Conjugation
                  </div>
                  <div className="text-xs text-gray-500">Conjugate verbs</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="word-formation"
                  checked={exerciseType === "word-formation"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Word Formation
                  </div>
                  <div className="text-xs text-gray-500">Form new words</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="punctuation"
                  checked={exerciseType === "punctuation"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Punctuation
                  </div>
                  <div className="text-xs text-gray-500">Add punctuation</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="dialogue-completion"
                  checked={exerciseType === "dialogue-completion"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Dialogue Completion
                  </div>
                  <div className="text-xs text-gray-500">
                    Complete dialogues
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Original Exercise Types */}
          <div>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Other Types
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="error-correction"
                  checked={exerciseType === "error-correction"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Error Correction
                  </div>
                  <div className="text-xs text-gray-500">
                    Find and fix errors
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="reading-comprehension"
                  checked={exerciseType === "reading-comprehension"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Reading Comprehension
                  </div>
                  <div className="text-xs text-gray-500">Read and answer</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="word-order"
                  checked={exerciseType === "word-order"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Word Order
                  </div>
                  <div className="text-xs text-gray-500">
                    Arrange words correctly
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="exerciseType"
                  value="matching"
                  checked={exerciseType === "matching"}
                  onChange={(e) =>
                    setExerciseType(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Matching
                  </div>
                  <div className="text-xs text-gray-500">
                    Match items together
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Number of Exercises Selection - only show for generate tab */}
      {activeTab === "generate" && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Number of Exercises:
          </label>
          <div className="flex items-center gap-4">
            <select
              value={numExercises}
              onChange={(e) => setNumExercises(Number(e.target.value))}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              {Array.from({ length: 10 }, (_, i) => (i + 1) * 5).map((num) => (
                <option key={num} value={num}>
                  {num} exercises
                </option>
              ))}
            </select>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              (5-50 exercises, default: 5)
            </span>
          </div>
        </div>
      )}

      <div className="flex gap-3 mt-4">
        {activeTab === "generate" ? (
          <button
            onClick={generateExercise}
            disabled={loading || !inputText.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                Generating...
              </>
            ) : (
              "Generate Exercise"
            )}
          </button>
        ) : (
          <button
            onClick={fixGrammar}
            disabled={loading || !inputText.trim()}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                Fixing...
              </>
            ) : (
              "Fix Grammar"
            )}
          </button>
        )}
        <button
          onClick={resetExercise}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default InputSection;

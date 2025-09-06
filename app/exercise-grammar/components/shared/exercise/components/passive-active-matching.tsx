"use client";

import { useState, useEffect } from "react";
import { Question } from "@/types/grammars/grammars_type";
import { Button } from "@/components/ui/button";

interface PassiveActiveMatchingProps {
  question: Question;
  selectedAnswers: { [key: number]: number | string };
  showResults: boolean;
  handleAnswerSelect: (questionId: number, answerIndex: number) => void;
}

interface MatchPair {
  id: string;
  active: string;
  passive: string;
  tense: string;
}

interface DragState {
  draggedItem: string | null;
  draggedType: 'active' | 'passive' | null;
  draggedIndex: number | null;
}

const PassiveActiveMatching: React.FC<PassiveActiveMatchingProps> = ({
  question,
  selectedAnswers,
  showResults,
  handleAnswerSelect,
}) => {
  const [pairs, setPairs] = useState<MatchPair[]>([]);
  const [shuffledActive, setShuffledActive] = useState<{ text: string; originalIndex: number }[]>([]);
  const [shuffledPassive, setShuffledPassive] = useState<{ text: string; originalIndex: number }[]>([]);
  const [matches, setMatches] = useState<{ [key: number]: number }>({});
  const [dragState, setDragState] = useState<DragState>({
    draggedItem: null,
    draggedType: null,
    draggedIndex: null,
  });

  useEffect(() => {
    if (question.voicePairs) {
      const pairsWithId = question.voicePairs.map((pair, index) => ({
        ...pair,
        id: `pair-${index}`,
      }));
      setPairs(pairsWithId);

      // Shuffle the arrays
      const activeItems = pairsWithId.map((pair, index) => ({
        text: pair.active,
        originalIndex: index,
      }));
      const passiveItems = pairsWithId.map((pair, index) => ({
        text: pair.passive,
        originalIndex: index,
      }));

      setShuffledActive([...activeItems].sort(() => Math.random() - 0.5));
      setShuffledPassive([...passiveItems].sort(() => Math.random() - 0.5));
    }
  }, [question]);

  const handleDragStart = (e: React.DragEvent, text: string, type: 'active' | 'passive', index: number) => {
    setDragState({
      draggedItem: text,
      draggedType: type,
      draggedIndex: index,
    });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetText: string, targetType: 'active' | 'passive', targetIndex: number) => {
    e.preventDefault();
    
    if (!dragState.draggedItem || !dragState.draggedType || dragState.draggedIndex === null) return;
    
    // Only allow matching between different types
    if (dragState.draggedType === targetType) return;

    // Find the correct matching
    const draggedOriginalIndex = dragState.draggedType === 'active' 
      ? shuffledActive[dragState.draggedIndex].originalIndex
      : shuffledPassive[dragState.draggedIndex].originalIndex;
    
    const targetOriginalIndex = targetType === 'active'
      ? shuffledActive.find(item => item.text === targetText)?.originalIndex
      : shuffledPassive.find(item => item.text === targetText)?.originalIndex;

    if (targetOriginalIndex !== undefined) {
      const newMatches = { ...matches };
      
      // Create the match
      if (dragState.draggedType === 'active') {
        newMatches[draggedOriginalIndex] = targetOriginalIndex;
      } else {
        newMatches[targetOriginalIndex] = draggedOriginalIndex;
      }
      
      setMatches(newMatches);
      
      // Update the answer for the parent component
      const matchCount = Object.keys(newMatches).length;
      const correctMatches = Object.entries(newMatches).filter(([active, passive]) => 
        parseInt(active) === parseInt(passive.toString())
      ).length;
      
      handleAnswerSelect(question.id, correctMatches);
    }

    setDragState({
      draggedItem: null,
      draggedType: null,
      draggedIndex: null,
    });
  };

  const removeMatch = (activeIndex: number) => {
    const newMatches = { ...matches };
    delete newMatches[activeIndex];
    setMatches(newMatches);
    
    const correctMatches = Object.entries(newMatches).filter(([active, passive]) => 
      parseInt(active) === parseInt(passive.toString())
    ).length;
    handleAnswerSelect(question.id, correctMatches);
  };

  const isCorrectMatch = (activeIndex: number, passiveIndex: number) => {
    return activeIndex === passiveIndex;
  };

  const getMatchedPassive = (activeIndex: number) => {
    return matches[activeIndex];
  };

  const getMatchedActive = (passiveIndex: number) => {
    return Object.entries(matches).find(([active, passive]) => parseInt(passive.toString()) === passiveIndex)?.[0];
  };

  const totalPairs = pairs.length;
  const correctMatches = Object.entries(matches).filter(([active, passive]) => 
    parseInt(active) === parseInt(passive.toString())
  ).length;

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
          Instructions:
        </h4>
        <p className="text-sm text-blue-700 dark:text-blue-300">
          Drag and drop to match active voice sentences with their passive voice counterparts. 
          The sentences use different tenses - pay attention to the tense structure!
        </p>
        <div className="mt-2 text-sm text-blue-600 dark:text-blue-400">
          Progress: {Object.keys(matches).length}/{totalPairs} pairs matched
          {showResults && ` | Correct: ${correctMatches}/${totalPairs}`}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Active Voice Column */}
        <div className="space-y-3">
          <h4 className="font-semibold text-green-700 dark:text-green-300 text-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
            Active Voice Sentences
          </h4>
          {shuffledActive.map((item, index) => {
            const matchedPassiveIndex = getMatchedPassive(item.originalIndex);
            const isMatched = matchedPassiveIndex !== undefined;
            
            return (
              <div
                key={`active-${index}`}
                className={`p-3 border-2 border-dashed rounded-lg cursor-move transition-all duration-200 ${
                  isMatched
                    ? showResults
                      ? isCorrectMatch(item.originalIndex, matchedPassiveIndex)
                        ? "border-green-400 bg-green-50 dark:bg-green-900/20"
                        : "border-red-400 bg-red-50 dark:bg-red-900/20"
                      : "border-green-400 bg-green-50 dark:bg-green-900/20"
                    : "border-gray-300 dark:border-gray-600 hover:border-green-400"
                }`}
                draggable
                onDragStart={(e) => handleDragStart(e, item.text, 'active', index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, item.text, 'active', index)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      {item.text}
                    </p>
                    {pairs[item.originalIndex] && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Tense: {pairs[item.originalIndex].tense}
                      </p>
                    )}
                  </div>
                  {isMatched && (
                    <Button
                      onClick={() => removeMatch(item.originalIndex)}
                      className="ml-2 p-1 text-red-600 hover:text-red-800 text-xs"
                      variant="ghost"
                      disabled={showResults}
                    >
                      ✕
                    </Button>
                  )}
                </div>
                {isMatched && matchedPassiveIndex !== undefined && (
                  <div className="mt-2 p-2 bg-white dark:bg-gray-700 rounded border">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Matched with: {pairs[matchedPassiveIndex]?.passive}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Passive Voice Column */}
        <div className="space-y-3">
          <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-center p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
            Passive Voice Sentences
          </h4>
          {shuffledPassive.map((item, index) => {
            const matchedActiveIndex = getMatchedActive(item.originalIndex);
            const isMatched = matchedActiveIndex !== undefined;
            
            return (
              <div
                key={`passive-${index}`}
                className={`p-3 border-2 border-dashed rounded-lg cursor-move transition-all duration-200 ${
                  isMatched
                    ? showResults
                      ? isCorrectMatch(parseInt(matchedActiveIndex), item.originalIndex)
                        ? "border-green-400 bg-green-50 dark:bg-green-900/20"
                        : "border-red-400 bg-red-50 dark:bg-red-900/20"
                      : "border-purple-400 bg-purple-50 dark:bg-purple-900/20"
                    : "border-gray-300 dark:border-gray-600 hover:border-purple-400"
                }`}
                draggable
                onDragStart={(e) => handleDragStart(e, item.text, 'passive', index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, item.text, 'passive', index)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      {item.text}
                    </p>
                    {pairs[item.originalIndex] && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Tense: {pairs[item.originalIndex].tense}
                      </p>
                    )}
                  </div>
                </div>
                {isMatched && matchedActiveIndex && (
                  <div className="mt-2 p-2 bg-white dark:bg-gray-700 rounded border">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Matched with: {pairs[parseInt(matchedActiveIndex)]?.active}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {showResults && (
        <div className="mt-6 p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Results Summary:
          </h4>
          <div className="space-y-2">
            {pairs.map((pair, index) => {
              const userMatch = getMatchedPassive(index);
              const isCorrect = userMatch !== undefined && isCorrectMatch(index, userMatch);
              
              return (
                <div
                  key={index}
                  className={`p-2 rounded ${
                    isCorrect
                      ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                      : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium text-green-700 dark:text-green-300">
                        Active: {pair.active}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-700 dark:text-purple-300">
                        Passive: {pair.passive}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Tense: {pair.tense} | {isCorrect ? "✓ Correct" : "✗ Incorrect"}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-4 text-center">
            <p className={`text-lg font-bold ${
              correctMatches === totalPairs 
                ? "text-green-600 dark:text-green-400" 
                : "text-red-600 dark:text-red-400"
            }`}>
              Score: {correctMatches}/{totalPairs} ({Math.round((correctMatches / totalPairs) * 100)}%)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassiveActiveMatching;

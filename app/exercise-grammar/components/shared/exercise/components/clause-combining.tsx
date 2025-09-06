"use client";

import { useState, useEffect } from "react";
import { Question } from "@/types/grammars/grammars_type";
import { Button } from "@/components/ui/button";

interface ClauseCombiningProps {
  question: Question;
  selectedAnswers: { [key: number]: number | string };
  showResults: boolean;
  handleAnswerSelect: (questionId: number, answerIndex: number) => void;
}

interface ClauseItem {
  id: string;
  text: string;
  type: 'main' | 'subordinate' | 'connector';
  originalIndex: number;
}

interface DragState {
  draggedItem: ClauseItem | null;
  dragOverIndex: number | null;
}

const ClauseCombining: React.FC<ClauseCombiningProps> = ({
  question,
  selectedAnswers,
  showResults,
  handleAnswerSelect,
}) => {
  const [clauses, setClauses] = useState<ClauseItem[]>([]);
  const [arrangedClauses, setArrangedClauses] = useState<ClauseItem[]>([]);
  const [dragState, setDragState] = useState<DragState>({
    draggedItem: null,
    dragOverIndex: null,
  });

  useEffect(() => {
    if (question.clauses) {
      const allClauses: ClauseItem[] = [];
      
      question.clauses.forEach((clause, index) => {
        allClauses.push({
          id: `main-${index}`,
          text: clause.mainClause,
          type: 'main',
          originalIndex: index,
        });
        allClauses.push({
          id: `sub-${index}`,
          text: clause.subordinateClause,
          type: 'subordinate',
          originalIndex: index,
        });
        allClauses.push({
          id: `conn-${index}`,
          text: clause.connector,
          type: 'connector',
          originalIndex: index,
        });
      });

      // Shuffle the clauses
      const shuffled = [...allClauses].sort(() => Math.random() - 0.5);
      setClauses(shuffled);
      setArrangedClauses([]);
    }
  }, [question]);

  const handleDragStart = (e: React.DragEvent, item: ClauseItem) => {
    setDragState({
      ...dragState,
      draggedItem: item,
    });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragState({
      ...dragState,
      dragOverIndex: index,
    });
  };

  const handleDragLeave = () => {
    setDragState({
      ...dragState,
      dragOverIndex: null,
    });
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    
    if (!dragState.draggedItem) return;

    const newArranged = [...arrangedClauses];
    
    // Remove item from original position if it was already in arranged clauses
    const existingIndex = newArranged.findIndex(item => item.id === dragState.draggedItem!.id);
    if (existingIndex !== -1) {
      newArranged.splice(existingIndex, 1);
      // Adjust target index if necessary
      if (existingIndex < targetIndex) {
        targetIndex--;
      }
    }
    
    // Insert at new position
    newArranged.splice(targetIndex, 0, dragState.draggedItem);
    setArrangedClauses(newArranged);
    
    // Calculate score
    const score = calculateScore(newArranged);
    handleAnswerSelect(question.id, score);

    setDragState({
      draggedItem: null,
      dragOverIndex: null,
    });
  };

  const handleDropToBank = (e: React.DragEvent) => {
    e.preventDefault();
    
    if (!dragState.draggedItem) return;

    // Remove from arranged clauses
    const newArranged = arrangedClauses.filter(item => item.id !== dragState.draggedItem!.id);
    setArrangedClauses(newArranged);
    
    // Calculate score
    const score = calculateScore(newArranged);
    handleAnswerSelect(question.id, score);

    setDragState({
      draggedItem: null,
      dragOverIndex: null,
    });
  };

  const calculateScore = (arranged: ClauseItem[]): number => {
    if (!question.clauses) return 0;
    
    let correctSentences = 0;
    
    question.clauses.forEach((originalClause, clauseIndex) => {
      // Find the expected pattern for this clause
      const expectedParts = [
        originalClause.mainClause,
        originalClause.connector,
        originalClause.subordinateClause,
      ];
      
      // Check if this pattern exists in the arranged clauses
      const startPositions: number[] = [];
      for (let i = 0; i <= arranged.length - 3; i++) {
        if (arranged[i] && 
            arranged[i+1] && 
            arranged[i+2] &&
            arranged[i].originalIndex === clauseIndex &&
            arranged[i+1].originalIndex === clauseIndex &&
            arranged[i+2].originalIndex === clauseIndex &&
            arranged[i].text === expectedParts[0] &&
            arranged[i+1].text === expectedParts[1] &&
            arranged[i+2].text === expectedParts[2]) {
          correctSentences++;
          break;
        }
      }
    });
    
    return correctSentences;
  };

  const getClauseTypeColor = (type: string) => {
    switch (type) {
      case 'main':
        return 'border-blue-300 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200';
      case 'subordinate':
        return 'border-green-300 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200';
      case 'connector':
        return 'border-purple-300 bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200';
      default:
        return 'border-gray-300 bg-gray-50 dark:bg-gray-900/20 text-gray-800 dark:text-gray-200';
    }
  };

  const getClauseTypeLabel = (type: string) => {
    switch (type) {
      case 'main':
        return 'Main Clause';
      case 'subordinate':
        return 'Subordinate Clause';
      case 'connector':
        return 'Connector';
      default:
        return 'Unknown';
    }
  };

  const availableClauses = clauses.filter(clause => 
    !arrangedClauses.some(arranged => arranged.id === clause.id)
  );

  const score = calculateScore(arrangedClauses);
  const maxScore = question.clauses?.length || 0;

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
          Instructions:
        </h4>
        <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
          Drag and drop the clauses to form correct complex sentences. Each sentence should have:
        </p>
        <div className="grid md:grid-cols-3 gap-2 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-blue-200 dark:bg-blue-800"></div>
            <span>Main Clause</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-purple-200 dark:bg-purple-800"></div>
            <span>Connector</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-green-200 dark:bg-green-800"></div>
            <span>Subordinate Clause</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-blue-600 dark:text-blue-400">
          Progress: {score}/{maxScore} sentences correctly formed
        </div>
      </div>

      {/* Clause Bank */}
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Available Clauses (drag from here):
        </h4>
        <div 
          className="grid gap-2 min-h-[100px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDropToBank}
        >
          {availableClauses.map((clause) => (
            <div
              key={clause.id}
              className={`p-3 border-2 rounded-lg cursor-move transition-all duration-200 hover:shadow-md ${getClauseTypeColor(clause.type)}`}
              draggable
              onDragStart={(e) => handleDragStart(e, clause)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{clause.text}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white dark:bg-gray-800">
                  {getClauseTypeLabel(clause.type)}
                </span>
              </div>
            </div>
          ))}
          {availableClauses.length === 0 && (
            <div className="text-gray-500 dark:text-gray-400 text-center py-4">
              All clauses have been used
            </div>
          )}
        </div>
      </div>

      {/* Construction Area */}
      <div className="border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-lg p-4 bg-blue-50/30 dark:bg-blue-900/10">
        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">
          Construct your sentences here (drag to arrange):
        </h4>
        <div className="space-y-3 min-h-[200px]">
          {arrangedClauses.length === 0 && (
            <div className="text-blue-500 dark:text-blue-400 text-center py-8">
              Drag clauses here to build your sentences
            </div>
          )}
          {arrangedClauses.map((clause, index) => (
            <div key={`arranged-${clause.id}`} className="relative">
              {dragState.dragOverIndex === index && (
                <div className="absolute -top-1 left-0 right-0 h-1 bg-blue-500 rounded"></div>
              )}
              <div
                className={`p-3 border-2 rounded-lg cursor-move transition-all duration-200 hover:shadow-md ${getClauseTypeColor(clause.type)}`}
                draggable
                onDragStart={(e) => handleDragStart(e, clause)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{clause.text}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white dark:bg-gray-800">
                    {getClauseTypeLabel(clause.type)}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {/* Drop area at the end */}
          <div
            className={`h-12 border-2 border-dashed rounded-lg transition-colors ${
              dragState.dragOverIndex === arrangedClauses.length
                ? "border-blue-500 bg-blue-100 dark:bg-blue-900/30"
                : "border-gray-300 dark:border-gray-600"
            }`}
            onDragOver={(e) => handleDragOver(e, arrangedClauses.length)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, arrangedClauses.length)}
          >
            <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
              Drop here to add to the end
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      {arrangedClauses.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Current Construction:
          </h4>
          <p className="text-gray-800 dark:text-gray-200 font-medium">
            {arrangedClauses.map(clause => clause.text).join(' ')}
          </p>
        </div>
      )}

      {showResults && question.clauses && (
        <div className="mt-6 p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Correct Sentences:
          </h4>
          <div className="space-y-3">
            {question.clauses.map((clause, index) => (
              <div
                key={index}
                className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
              >
                <p className="font-medium text-green-800 dark:text-green-200">
                  {clause.combinedSentence}
                </p>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="text-blue-600">Main: </span>{clause.mainClause}
                  <span className="text-purple-600 ml-2">Connector: </span>{clause.connector}
                  <span className="text-green-600 ml-2">Subordinate: </span>{clause.subordinateClause}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className={`text-lg font-bold ${
              score === maxScore 
                ? "text-green-600 dark:text-green-400" 
                : "text-red-600 dark:text-red-400"
            }`}>
              Score: {score}/{maxScore} ({Math.round((score / maxScore) * 100)}%)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClauseCombining;

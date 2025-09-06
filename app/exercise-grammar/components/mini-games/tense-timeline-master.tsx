"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Exercise } from "@/types/grammars/grammars_type";

interface TimelineEvent {
  id: string;
  text: string;
  tense: string;
  timeMarker: string;
  order: number;
  currentPosition: number;
}

interface TenseTimelineGameProps {
  exercise: Exercise;
  onComplete: (results: any) => void;
  onQuestionAnswer: (id: number, answer: string) => void;
  selectedAnswers: { [key: number]: string };
}

const TenseTimelineGame: React.FC<TenseTimelineGameProps> = ({
  exercise,
  onComplete,
  onQuestionAnswer,
  selectedAnswers,
}) => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [draggedEvent, setDraggedEvent] = useState<string | null>(null);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (exercise && exercise.questions) {
      initializeTimeline();
    }
  }, [exercise]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !gameCompleted) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameCompleted]);

  const initializeTimeline = () => {
    const timelineEvents: TimelineEvent[] = [];

    exercise.questions.forEach((question, index) => {
      const correctAnswer =
        question.options && typeof question.correct === "number"
          ? question.options[question.correct]
          : question.question;

      // Create timeline events with different tenses
      const tenses = ["past", "present", "future"];
      const timeMarkers = [
        "yesterday",
        "last week",
        "in 2020",
        "now",
        "today",
        "currently",
        "tomorrow",
        "next week",
        "in 2025",
      ];

      const tense = tenses[index % tenses.length];
      const timeMarker = timeMarkers[index % timeMarkers.length];

      let eventText = correctAnswer;
      let order = index;

      // Modify sentence based on tense
      switch (tense) {
        case "past":
          eventText = convertToPast(correctAnswer);
          order = index;
          break;
        case "present":
          eventText = convertToPresent(correctAnswer);
          order = index + exercise.questions.length;
          break;
        case "future":
          eventText = convertToFuture(correctAnswer);
          order = index + exercise.questions.length * 2;
          break;
      }

      timelineEvents.push({
        id: `event-${index}`,
        text: eventText,
        tense,
        timeMarker,
        order,
        currentPosition: index,
      });
    });

    // Shuffle events
    const shuffledEvents = [...timelineEvents].sort(() => Math.random() - 0.5);
    shuffledEvents.forEach((event, index) => {
      event.currentPosition = index;
    });

    setEvents(shuffledEvents);
  };

  const convertToPast = (text: string): string => {
    // Simple past conversion (basic implementation)
    return text
      .replace(/\bis\b/g, "was")
      .replace(/\bare\b/g, "were")
      .replace(/\bgo\b/g, "went")
      .replace(/\bcome\b/g, "came")
      .replace(/\bsee\b/g, "saw")
      .replace(/\bdo\b/g, "did");
  };

  const convertToPresent = (text: string): string => {
    // Keep in present or make present continuous
    if (text.includes(" will ")) {
      return text.replace(/ will /g, " is ").replace(/\bwill\b/g, "is");
    }
    if (!text.includes("ing")) {
      return text.replace(/\bgo\b/g, "going").replace(/\bcome\b/g, "coming");
    }
    return text;
  };

  const convertToFuture = (text: string): string => {
    // Convert to future tense
    if (!text.includes("will")) {
      return text
        .replace(/\bgo\b/g, "will go")
        .replace(/\bis\b/g, "will be")
        .replace(/\bare\b/g, "will be")
        .replace(/\bcome\b/g, "will come");
    }
    return text;
  };

  const handleDragStart = (eventId: string) => {
    if (!gameStarted) {
      setGameStarted(true);
    }
    setDraggedEvent(eventId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetPosition: number) => {
    if (!draggedEvent) return;

    const draggedEventObj = events.find((e) => e.id === draggedEvent);
    if (!draggedEventObj) return;

    const newEvents = [...events];
    const draggedIndex = newEvents.findIndex((e) => e.id === draggedEvent);
    const targetEvent = newEvents[targetPosition];

    // Swap positions
    newEvents[draggedIndex] = {
      ...newEvents[draggedIndex],
      currentPosition: targetPosition,
    };
    newEvents[targetPosition] = {
      ...targetEvent,
      currentPosition: draggedIndex,
    };

    // Sort by current position
    newEvents.sort((a, b) => a.currentPosition - b.currentPosition);

    setEvents(newEvents);
    setDraggedEvent(null);
  };

  const checkOrder = () => {
    setAttempts((prev) => prev + 1);

    // Check if events are in correct chronological order
    const isCorrectOrder = events.every((event, index) => {
      const expectedOrder = Math.floor(event.order / exercise.questions.length);
      const actualOrder = Math.floor(index / Math.ceil(events.length / 3));
      return expectedOrder === actualOrder;
    });

    if (isCorrectOrder) {
      const finalScore = Math.max(0, 1000 - attempts * 50 - timer + 500);
      setScore(finalScore);
      setGameCompleted(true);
      setShowFeedback(true);

      const results = {
        score: finalScore,
        attempts,
        timeSeconds: timer,
        accuracy: 100,
        correctOrder: true,
      };

      setTimeout(() => onComplete(results), 2000);
    } else {
      // Show which events are in wrong positions
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 3000);
    }
  };

  const resetTimeline = () => {
    initializeTimeline();
    setAttempts(0);
    setShowFeedback(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getTenseColor = (tense: string) => {
    switch (tense) {
      case "past":
        return "bg-red-100 border-red-300 text-red-800";
      case "present":
        return "bg-blue-100 border-blue-300 text-blue-800";
      case "future":
        return "bg-green-100 border-green-300 text-green-800";
      default:
        return "bg-gray-100 border-gray-300 text-gray-800";
    }
  };

  const getTenseIcon = (tense: string) => {
    switch (tense) {
      case "past":
        return "⏪";
      case "present":
        return "⏸️";
      case "future":
        return "⏩";
      default:
        return "⏰";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          ⏰ Tense Timeline Master
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Arrange events in chronological order: Past → Present → Future
        </p>

        {/* Game Stats */}
        <div className="flex justify-center space-x-6 text-sm">
          <div className="text-center">
            <div className="font-bold text-lg text-blue-600">
              {formatTime(timer)}
            </div>
            <div className="text-gray-500">Time</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-purple-600">{attempts}</div>
            <div className="text-gray-500">Attempts</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-green-600">{score}</div>
            <div className="text-gray-500">Score</div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      {!gameStarted && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 border border-blue-200 dark:border-blue-700">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
            How to Play:
          </h3>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>
              • Drag and drop events to arrange them in chronological order
            </li>
            <li>
              • ⏪ <strong>Red</strong> cards = Past tense events
            </li>
            <li>
              • ⏸️ <strong>Blue</strong> cards = Present tense events
            </li>
            <li>
              • ⏩ <strong>Green</strong> cards = Future tense events
            </li>
            <li>• Order should be: Past → Present → Future</li>
          </ul>
        </div>
      )}

      {/* Timeline Section Labels */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-2 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
          <div className="font-semibold text-red-800 dark:text-red-200">
            ⏪ PAST
          </div>
          <div className="text-xs text-red-600">
            Yesterday, Last week, 2020...
          </div>
        </div>
        <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <div className="font-semibold text-blue-800 dark:text-blue-200">
            ⏸️ PRESENT
          </div>
          <div className="text-xs text-blue-600">Now, Today, Currently...</div>
        </div>
        <div className="text-center p-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
          <div className="font-semibold text-green-800 dark:text-green-200">
            ⏩ FUTURE
          </div>
          <div className="text-xs text-green-600">
            Tomorrow, Next week, 2025...
          </div>
        </div>
      </div>

      {/* Timeline Events */}
      <div className="space-y-3 mb-6">
        {events.map((event, index) => (
          <div
            key={event.id}
            draggable
            onDragStart={() => handleDragStart(event.id)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            className={`
              p-4 rounded-lg border-2 cursor-move transition-all duration-200
              ${getTenseColor(event.tense)}
              ${
                draggedEvent === event.id
                  ? "opacity-50 transform scale-95"
                  : "hover:shadow-md"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{getTenseIcon(event.tense)}</div>
                <div className="flex-1">
                  <div className="font-medium">{event.text}</div>
                  <div className="text-xs opacity-75 mt-1">
                    Time marker: {event.timeMarker}
                  </div>
                </div>
              </div>
              <div className="text-xs opacity-50">#{index + 1}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback */}
      {showFeedback && !gameCompleted && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 mb-4 border border-yellow-200 dark:border-yellow-700">
          <div className="text-center">
            <div className="text-2xl mb-2">🤔</div>
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              Not quite right!
            </h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Make sure events are arranged: Past → Present → Future
            </p>
          </div>
        </div>
      )}

      {gameCompleted && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-700 text-center mb-4">
          <div className="text-4xl mb-2">🏆</div>
          <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
            Perfect Timeline!
          </h3>
          <p className="text-green-700 dark:text-green-300 mb-4">
            You've mastered the chronological order of tenses!
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="font-bold text-2xl text-green-600">{score}</div>
              <div className="text-sm text-gray-500">Final Score</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-blue-600">
                {formatTime(timer)}
              </div>
              <div className="text-sm text-gray-500">Time</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-purple-600">
                {attempts}
              </div>
              <div className="text-sm text-gray-500">Attempts</div>
            </div>
          </div>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex justify-center space-x-4">
        <Button onClick={resetTimeline} variant="outline" className="px-6 py-2">
          Reset Timeline
        </Button>
        <Button
          onClick={checkOrder}
          disabled={gameCompleted}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700"
        >
          Check Order
        </Button>
        <Button
          onClick={() =>
            onComplete({
              score,
              attempts,
              timeSeconds: timer,
              accuracy: gameCompleted ? 100 : 0,
              correctOrder: gameCompleted,
            })
          }
          className="px-6 py-2 bg-green-600 hover:bg-green-700"
        >
          Finish Game
        </Button>
      </div>

      {/* Drag and Drop Instructions */}
      <div className="mt-4 text-center text-xs text-gray-500">
        💡 Drag events up and down to reorder them chronologically
      </div>
    </div>
  );
};

export default TenseTimelineGame;

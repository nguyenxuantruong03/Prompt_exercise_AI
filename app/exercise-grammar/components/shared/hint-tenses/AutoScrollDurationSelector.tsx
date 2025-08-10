import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AutoScrollDurationSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  currentDuration: number;
  onDurationChange: (duration: number) => void;
}

const AutoScrollDurationSelector: React.FC<AutoScrollDurationSelectorProps> = ({
  isOpen,
  onClose,
  currentDuration,
  onDurationChange,
}) => {
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customDuration, setCustomDuration] = useState(
    currentDuration.toString()
  );

  // Get recent durations from localStorage
  const getRecentDurations = (): number[] => {
    try {
      const recent = localStorage.getItem("hintTenses-recentDurations");
      return recent ? JSON.parse(recent) : [];
    } catch {
      return [];
    }
  };

  const saveRecentDuration = (duration: number) => {
    const recent = getRecentDurations();
    const filtered = recent.filter((d) => d !== duration);
    const updated = [duration, ...filtered].slice(0, 5); // Keep last 5
    localStorage.setItem("hintTenses-recentDurations", JSON.stringify(updated));
  };

  // Preset duration options (in seconds)
  const presetDurations = [
    { label: "1m", value: 60, description: "1 minute" },
    { label: "5m", value: 300, description: "5 minutes" },
    { label: "8m", value: 480, description: "8 minutes" },
    { label: "10m", value: 600, description: "10 minutes (maximum)" },
  ];

  // Quick preset options (in seconds)
  const quickPresets = [
    { label: "10s", value: 10 },
    { label: "30s", value: 30 },
    { label: "1m", value: 60 },
    { label: "2m", value: 120 },
  ];

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (!isOpen) return;

      // Don't trigger keyboard shortcuts if user is typing or clicking
      const target = event.target as HTMLElement;
      if (target.tagName === "Input" || target.tagName === "TEXTAREA") {
        return;
      }

      // Block Q key when custom Input dialog is open
      if (showCustomInput && (event.key === "q" || event.key === "Q")) {
        event.preventDefault();
        console.log("Q key blocked while custom Input dialog is open");
        return;
      }

      if (event.key === "q" || event.key === "Q") {
        event.preventDefault();
        onClose();
      } else if (
        event.key >= "1" &&
        event.key <= "4" &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
      ) {
        event.preventDefault();
        const index = parseInt(event.key) - 1;
        if (quickPresets[index]) {
          handlePresetSelect(quickPresets[index].value);
        }
      } else if (
        (event.key === "c" || event.key === "C") &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
      ) {
        event.preventDefault();
        handleCustomInput();
      }
    };

    // Global Escape key blocker - prevents ALL Escape key events when modal is open
    const blockEscapeKey = (event: KeyboardEvent) => {
      if (!isOpen) return;

      // Block Escape key always when AutoScrollDurationSelector is open
      // regardless of whether custom Input is shown or not
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        // Show different messages based on state
        const message = showCustomInput
          ? "Escape key blocked while custom Input dialog is open - use Cancel Button or X to close"
          : "Escape key blocked while Auto-Scroll Duration Selector is open";
        console.log(message);
      }
    };

    if (isOpen) {
      // Use keyup instead of keydown to avoid conflicts with Button clicks
      document.addEventListener("keyup", handleKeyUp);

      // Add both keydown and keyup listeners to block Escape at all levels
      document.addEventListener("keydown", blockEscapeKey, true); // Capture phase
      document.addEventListener("keyup", blockEscapeKey, true); // Capture phase
    }

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", blockEscapeKey, true);
      document.removeEventListener("keyup", blockEscapeKey, true);
    };
  }, [isOpen, showCustomInput]);

  const handlePresetSelect = (duration: number) => {
    console.log("Preset selected:", duration); // Debug log
    saveRecentDuration(duration);
    onDurationChange(duration);
    onClose();
  };

  const handleButtonClick = (duration: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("Button clicked for duration:", duration); // Debug log
      handlePresetSelect(duration);
    };
  };

  const handleCustomInput = () => {
    setCustomDuration(currentDuration.toString());
    setShowCustomInput(true);
  };

  const handleCustomConfirm = (value?: string) => {
    if (value) {
      const duration = parseInt(value);
      if (!isNaN(duration) && duration > 0 && duration <= 600) {
        saveRecentDuration(duration);
        onDurationChange(duration);
        onClose();
      } else {
        // Use a more user-friendly notification
        const errorMessage =
          duration > 600
            ? `Duration too long! Maximum allowed is 600 seconds (10 minutes). You entered: ${duration}s`
            : `Invalid duration! Please enter a number between 1 and 600 seconds. You entered: "${value}"`;
        alert(errorMessage);
        return;
      }
    }
    setShowCustomInput(false);
  };

  const getSpeedDescription = (seconds: number): string => {
    if (seconds <= 15) return "⚡ Very Fast";
    if (seconds <= 30) return "🚀 Fast";
    if (seconds <= 60) return "🏃 Normal";
    if (seconds <= 120) return "🚶 Slow";
    if (seconds <= 300) return "🐌 Very Slow";
    return "🐢 Ultra Slow";
  };

  const formatDuration = (seconds: number): string => {
    if (seconds < 60) {
      return `${seconds}s`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return remainingSeconds > 0
        ? `${minutes}m ${remainingSeconds}s`
        : `${minutes}m`;
    } else {
      const hours = Math.floor(seconds / 3600);
      const remainingMinutes = Math.floor((seconds % 3600) / 60);
      return remainingMinutes > 0
        ? `${hours}h ${remainingMinutes}m`
        : `${hours}h`;
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-[95vw] w-full sm:max-w-md overflow-x-hidden">
          <DialogHeader>
            <DialogTitle>Auto-Scroll Duration</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Current duration:{" "}
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  {formatDuration(currentDuration)}
                </span>
                <span className="ml-2 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                  {getSpeedDescription(currentDuration)}
                </span>
              </p>
            </div>

            {/* Recent Durations */}
            {getRecentDurations().length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Recently Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {getRecentDurations()
                    .filter((duration) => duration !== currentDuration)
                    .slice(0, 4)
                    .map((duration) => (
                      <Button
                        key={duration}
                        onClick={handleButtonClick(duration)}
                        variant="outline"
                        size="sm"
                        className="text-sm"
                      >
                        {formatDuration(duration)}
                      </Button>
                    ))}
                </div>
              </div>
            )}

            {/* Quick Presets */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Quick Options
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                  (Press 1-4)
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {quickPresets.map((preset, index) => (
                  <Button
                    key={preset.value}
                    onClick={handleButtonClick(preset.value)}
                    variant={currentDuration === preset.value ? "default" : "outline"}
                    size="sm"
                    className="relative text-sm font-medium"
                  >
                    {preset.label}
                    <span className="absolute -top-1 -right-1 text-xs text-gray-400 bg-white dark:bg-gray-800 rounded-full w-4 h-4 flex items-center justify-center text-[10px] pointer-events-none">
                      {index + 1}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Longer Duration Presets */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Extended Options
              </h3>
              <div className="space-y-2">
                {presetDurations.map((preset) => (
                  <Button
                    key={preset.value}
                    onClick={handleButtonClick(preset.value)}
                    variant={currentDuration === preset.value ? "default" : "outline"}
                    className="w-full p-3 h-auto text-left justify-start"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="text-left">
                        <div className="font-medium">{preset.label}</div>
                        <div className="text-sm opacity-75">
                          {preset.description}
                        </div>
                        <div className="text-xs opacity-60 mt-1">
                          {getSpeedDescription(preset.value)}
                        </div>
                      </div>
                      {currentDuration === preset.value && (
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Custom Duration Input */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Custom Duration
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                  (Press C)
                </span>
              </h3>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleCustomInput();
                }}
                variant="outline"
                className="w-full p-3 h-auto border-dashed"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="text-sm">Enter custom duration (1-600 seconds)</span>
                </div>
              </Button>
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 sm:mb-0 sm:mr-auto">
              💡 Tip: Use Q to close, 1-4 for quick select, C for custom
            </div>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Custom Input Dialog */}
      <Dialog open={showCustomInput} onOpenChange={setShowCustomInput}>
        <DialogContent className="max-w-[95vw] w-full sm:max-w-md overflow-x-hidden">
          <DialogHeader>
            <DialogTitle>Custom Auto-Scroll Duration</DialogTitle>
            <DialogDescription asChild>
              <div className="text-sm leading-relaxed max-h-40 overflow-y-auto">
                <div>
                  <p>Enter duration in seconds (1-600).</p>
                  <p>Current: {formatDuration(currentDuration)}</p>
                  
                  <h4 className="font-medium mt-3 mb-2">Suggested values:</h4>
                  <ul className="space-y-1">
                    <li>• 30s = Fast scrolling</li>
                    <li>• 60s = Normal speed</li>
                    <li>• 120s = Slow reading</li>
                    <li>• 300s = Very slow review</li>
                    <li>• 600s = Maximum (10 minutes)</li>
                  </ul>
                  
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Note: Long durations are useful for lengthy grammar topics.
                  </p>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCustomConfirm(customDuration);
            }}
            className="mt-4"
          >
            <Input
              type="text"
              value={customDuration}
              onChange={(e) => setCustomDuration(e.target.value)}
              placeholder="Enter duration in seconds..."
              autoFocus
            />
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Press Enter to submit • Use Cancel Button or X to close
            </div>
          </form>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowCustomInput(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleCustomConfirm(customDuration)}
              disabled={!customDuration.trim()}
            >
              Set Duration
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AutoScrollDurationSelector;

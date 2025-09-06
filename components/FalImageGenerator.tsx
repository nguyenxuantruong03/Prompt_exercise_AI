import React, { useState, useEffect } from "react";
import {
  Loader,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { callFalAIWithFallback } from "@/lib/ai-providers";

interface FalImageGeneratorProps {
  prompt: string;
  grammarTopic?: string;
  proficiencyLevel?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  style?: "realistic" | "cartoon" | "illustration" | "educational";
  className?: string;
  onImageLoaded?: (imageUrl: string, success: boolean) => void;
  autoGenerate?: boolean;
  showControls?: boolean;
  maxRetries?: number;
}

interface ImageState {
  url: string | null;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  retryCount: number;
  provider: string;
  apiKeyUsed?: number;
}

export const FalImageGenerator: React.FC<FalImageGeneratorProps> = ({
  prompt,
  grammarTopic = "English grammar",
  proficiencyLevel = "intermediate",
  aspectRatio = "square",
  style = "educational",
  className = "",
  onImageLoaded,
  autoGenerate = true,
  showControls = true,
  maxRetries = 3,
}) => {
  const [imageState, setImageState] = useState<ImageState>({
    url: null,
    isLoading: false,
    error: null,
    success: false,
    retryCount: 0,
    provider: "Unknown",
  });

  const generateImage = async (isRetry: boolean = false) => {
    if (imageState.retryCount >= maxRetries && isRetry) {
      setImageState((prev) => ({
        ...prev,
        error: `Max retries (${maxRetries}) reached`,
        isLoading: false,
      }));
      return;
    }

    setImageState((prev) => ({
      ...prev,
      isLoading: true,
      error: null,
      retryCount: isRetry ? prev.retryCount + 1 : 0,
    }));

    try {
      console.log(
        `🎨 Generating image${
          isRetry ? ` (retry ${imageState.retryCount + 1})` : ""
        }...`
      );

      const result = await callFalAIWithFallback(prompt, {
        grammarTopic,
        proficiencyLevel,
        aspectRatio,
        style,
      });

      setImageState((prev) => ({
        ...prev,
        url: result.imageUrl,
        success: result.success,
        isLoading: false,
        error: result.success ? null : result.error || "Generation failed",
        provider: result.provider,
        apiKeyUsed: result.apiKeyUsed,
      }));

      if (onImageLoaded) {
        onImageLoaded(result.imageUrl, result.success);
      }

      if (result.success) {
        console.log(`✅ Image generated successfully with ${result.provider}!`);
      } else {
        console.log(`⚠️ Using fallback image: ${result.error}`);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("Image generation failed:", errorMessage);

      setImageState((prev) => ({
        ...prev,
        error: errorMessage,
        isLoading: false,
        success: false,
        provider: "Error",
      }));

      if (onImageLoaded) {
        const fallbackUrl = `https://via.placeholder.com/512x512/f8f9fa/495057?text=${encodeURIComponent(
          `❌ Error: ${errorMessage}`
        )}`;
        onImageLoaded(fallbackUrl, false);
      }
    }
  };

  useEffect(() => {
    if (autoGenerate && prompt && !imageState.url && !imageState.isLoading) {
      generateImage();
    }
  }, [prompt, autoGenerate]);

  const handleRetry = () => {
    generateImage(true);
  };

  const handleManualGenerate = () => {
    generateImage(false);
  };

  return (
    <div className={`fal-image-generator ${className}`}>
      {/* Image Display */}
      <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600">
        {imageState.isLoading ? (
          <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
            <div className="text-center">
              <Loader className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                🎨 Generating with FAL AI...
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {grammarTopic} • {proficiencyLevel} level
              </div>
              {imageState.retryCount > 0 && (
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                  Retry {imageState.retryCount} of {maxRetries}
                </div>
              )}
            </div>
          </div>
        ) : imageState.url ? (
          <div className="relative">
            <img
              src={imageState.url}
              alt={`AI-generated image for: ${prompt}`}
              className="w-full aspect-square object-cover"
              onError={(e) => {
                console.error("Image failed to load:", imageState.url);
                setImageState((prev) => ({
                  ...prev,
                  error: "Image failed to display",
                  success: false,
                }));
              }}
            />

            {/* Success/Error Badge */}
            <div className="absolute top-2 right-2">
              {imageState.success ? (
                <div className="bg-green-500 bg-opacity-90 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>FAL AI</span>
                  {imageState.apiKeyUsed && (
                    <span>#{imageState.apiKeyUsed}</span>
                  )}
                </div>
              ) : (
                <div className="bg-yellow-500 bg-opacity-90 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>Fallback</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <ImageIcon className="w-16 h-16 mx-auto mb-3 opacity-40" />
              <div className="font-medium">Ready to generate</div>
              <div className="text-sm mt-1">{grammarTopic}</div>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      {showControls && (
        <div className="mt-4 space-y-2">
          {/* Status */}
          <div className="text-center">
            {imageState.error ? (
              <div className="text-red-600 dark:text-red-400 text-sm font-medium">
                ⚠️ {imageState.error}
              </div>
            ) : imageState.success ? (
              <div className="text-green-600 dark:text-green-400 text-sm font-medium">
                ✅ Generated with {imageState.provider}
              </div>
            ) : imageState.url ? (
              <div className="text-yellow-600 dark:text-yellow-400 text-sm font-medium">
                📋 Using placeholder image
              </div>
            ) : null}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-2">
            {!imageState.isLoading && (
              <>
                {!imageState.url ? (
                  <Button
                    onClick={handleManualGenerate}
                    className="bg-blue-500 hover:bg-blue-600"
                    size="sm"
                  >
                    <ImageIcon className="w-4 h-4 mr-2" />
                    Generate Image
                  </Button>
                ) : (
                  <Button
                    onClick={handleRetry}
                    variant="outline"
                    size="sm"
                    disabled={imageState.retryCount >= maxRetries}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    {imageState.retryCount >= maxRetries
                      ? "Max Retries"
                      : "Retry"}
                  </Button>
                )}
              </>
            )}
          </div>

          {/* Generation Info */}
          <div className="text-center text-xs text-gray-500 dark:text-gray-400 space-y-1">
            <div>
              Prompt: "
              {prompt.length > 50 ? prompt.substring(0, 50) + "..." : prompt}"
            </div>
            <div>
              {style} style • {aspectRatio} ratio
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FalImageGenerator;

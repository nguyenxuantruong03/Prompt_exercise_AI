interface LoadingAIGenerateProps {
  title_loading?: string;
  description_loading?: string;
}

const LoadingAIGenerate: React.FC<LoadingAIGenerateProps> = ({ title_loading, description_loading }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-gray-700 dark:text-gray-300">
          {title_loading || "🤖 AI is analyzing your performance..."}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          {description_loading || "Generating personalized feedback and recommendations"}
        </p>
      </div>
    </div>
  );
};

export default LoadingAIGenerate;

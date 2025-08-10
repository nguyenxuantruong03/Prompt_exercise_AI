import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<"generate" | "fix">>;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    // Tab Navigation Component
    <div className="flex mb-6 border-b border-gray-200 dark:border-gray-700">
      <Button
        variant="ghost"
        onClick={() => setActiveTab("generate")}
        className={`px-6 py-3 font-medium rounded-none border-b-2 ${
          activeTab === "generate"
            ? "text-blue-600 border-blue-600"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 border-transparent"
        }`}
      >
        Generate Exercise
      </Button>
      <Button
        variant="ghost"
        onClick={() => setActiveTab("fix")}
        className={`px-6 py-3 font-medium rounded-none border-b-2 ${
          activeTab === "fix"
            ? "text-blue-600 border-blue-600"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 border-transparent"
        }`}
      >
        Fix Grammar
      </Button>
    </div>
  );
};

export default TabNavigation;

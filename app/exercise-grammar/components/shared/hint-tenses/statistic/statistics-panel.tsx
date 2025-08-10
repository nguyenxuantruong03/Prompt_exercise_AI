import { ChartNoAxesColumn } from "lucide-react";
import { TenseItem } from "../hint-tenses";

interface StatisticsProps {
  tenseItems: TenseItem[];
  bookmarkedTenses: string[];
}

const StatisticsPanel: React.FC<StatisticsProps> = ({
  tenseItems,
  bookmarkedTenses,
}) => {
  const getStatistics = () => {
    return {
      total: tenseItems.length,
      bookmarked: bookmarkedTenses.length,
      byLevel: {
        A1: tenseItems.filter((item) => item.cefrLevels.includes("A1")).length,
        A2: tenseItems.filter((item) => item.cefrLevels.includes("A2")).length,
        B1: tenseItems.filter((item) => item.cefrLevels.includes("B1")).length,
        B2: tenseItems.filter((item) => item.cefrLevels.includes("B2")).length,
        C1: tenseItems.filter((item) => item.cefrLevels.includes("C1")).length,
        C2: tenseItems.filter((item) => item.cefrLevels.includes("C2")).length,
      },
      byCategory: {
        tenses: tenseItems.filter((item) => item.category === "tenses").length,
        grammar: tenseItems.filter((item) => item.category === "grammar")
          .length,
        conditionals: tenseItems.filter(
          (item) => item.category === "conditionals"
        ).length,
        special: tenseItems.filter((item) => item.category === "special")
          .length,
      },
      byCEFR: {
        A1: tenseItems.filter((item) => item.cefrLevels.includes("A1")).length,
        A2: tenseItems.filter((item) => item.cefrLevels.includes("A2")).length,
        B1: tenseItems.filter((item) => item.cefrLevels.includes("B1")).length,
        B2: tenseItems.filter((item) => item.cefrLevels.includes("B2")).length,
        C1: tenseItems.filter((item) => item.cefrLevels.includes("C1")).length,
        C2: tenseItems.filter((item) => item.cefrLevels.includes("C2")).length,
      },
    };
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-4 border-b border-gray-200 dark:border-gray-600">
      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
        <ChartNoAxesColumn className="w-5 h-5" />
        Grammar Database Statistics
      </h4>
      {(() => {
        const stats = getStatistics();
        return (
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <div className="font-medium text-gray-800 dark:text-gray-200">
                Total Topics
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {stats.total}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <div className="font-medium text-gray-800 dark:text-gray-200">
                Bookmarked
              </div>
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {stats.bookmarked}
              </div>
            </div>
            <div className="col-span-2 bg-white dark:bg-gray-800 p-3 rounded-lg">
              <div className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                By Category
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span>Tenses:</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {stats.byCategory.tenses}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Grammar:</span>
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    {stats.byCategory.grammar}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Conditionals:</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    {stats.byCategory.conditionals}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Special:</span>
                  <span className="font-semibold text-orange-600 dark:text-orange-400">
                    {stats.byCategory.special}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-white dark:bg-gray-800 p-3 rounded-lg">
              <div className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                By CEFR Level
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="flex justify-between">
                  <span>A1:</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    {stats.byCEFR.A1}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>A2:</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {stats.byCEFR.A2}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>B1:</span>
                  <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                    {stats.byCEFR.B1}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>B2:</span>
                  <span className="font-semibold text-orange-600 dark:text-orange-400">
                    {stats.byCEFR.B2}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>C1:</span>
                  <span className="font-semibold text-red-600 dark:text-red-400">
                    {stats.byCEFR.C1}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>C2:</span>
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    {stats.byCEFR.C2}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default StatisticsPanel;

import React from "react";
import { FileText } from "lucide-react";
import {
  renderVerbCategories,
  renderWordList,
  renderCategoricalList,
} from "./RenderingUtils";

interface GenericDataSectionProps {
  sectionKey: string;
  data: any;
  renderUniversalData: (data: any) => React.ReactNode;
}

const GenericDataSection: React.FC<GenericDataSectionProps> = ({
  sectionKey,
  data,
  renderUniversalData,
}) => {
  if (!data) return null;

  const formatSectionTitle = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  const getSectionId = (key: string) => {
    return key
      .toLowerCase()
      .replace(/([A-Z])/g, "-$1")
      .replace(/^-/, "");
  };

  return (
    <section
      id={getSectionId(sectionKey)}
      className="bg-white rounded-lg border border-gray-200 p-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <FileText className="h-6 w-6" />
        {formatSectionTitle(sectionKey)}
      </h2>
      <div className="space-y-4">
        {typeof data === "string" ? (
          renderVerbCategories(data) ||
          renderWordList(data) ||
          renderCategoricalList(data) || <p className="text-gray-700">{data}</p>
        ) : Array.isArray(data) ? (
          <div className="grid gap-3">
            {data.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                {typeof item === "string" ? (
                  renderVerbCategories(item) ||
                  renderCategoricalList(item) || (
                    <p className="text-gray-700">{item}</p>
                  )
                ) : (
                  <div className="space-y-2">
                    {Object.entries(item || {}).map(([itemKey, itemValue]) => (
                      <div key={itemKey}>
                        <span className="font-medium text-gray-800 capitalize">
                          {itemKey.replace(/([A-Z])/g, " $1").toLowerCase()}:
                        </span>
                        <span className="text-gray-700 ml-2">
                          {Array.isArray(itemValue)
                            ? renderUniversalData(itemValue)
                            : renderUniversalData(itemValue)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : typeof data === "object" ? (
          <div className="space-y-4">
            {Object.entries(data || {}).map(([subKey, subValue]) => (
              <div key={subKey} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 capitalize">
                  {subKey.replace(/([A-Z])/g, " $1").toLowerCase()}
                </h3>
                {typeof subValue === "string" ? (
                  renderVerbCategories(subValue) ||
                  renderWordList(subValue) ||
                  renderCategoricalList(subValue) || (
                    <p className="text-gray-700">{subValue}</p>
                  )
                ) : Array.isArray(subValue) ? (
                  <ul className="space-y-1">
                    {subValue.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-gray-700">
                          {renderUniversalData(item)}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : typeof subValue === "object" && subValue !== null ? (
                  <div className="space-y-2">
                    {Object.entries(subValue).map(([itemKey, itemValue]) => (
                      <div key={itemKey}>
                        <span className="font-medium text-gray-700 capitalize">
                          {itemKey.replace(/([A-Z])/g, " $1").toLowerCase()}:
                        </span>
                        <span className="text-gray-600 ml-2">
                          {Array.isArray(itemValue)
                            ? renderUniversalData(itemValue)
                            : renderUniversalData(itemValue)}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-700">
                    {renderUniversalData(subValue)}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-700">{renderUniversalData(data)}</div>
        )}
      </div>
    </section>
  );
};

export default GenericDataSection;

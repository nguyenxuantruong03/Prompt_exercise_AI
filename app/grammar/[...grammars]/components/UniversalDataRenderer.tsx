"use client";

import React from "react";
import PatternObjectRenderer from "./PatternObjectRenderer";
import { RenderingUtils } from "./RenderingUtils";

interface UniversalDataRendererProps {
  data: any;
}

const UniversalDataRenderer: React.FC<UniversalDataRendererProps> = ({
  data,
}) => {
  // Special render function for arrays that might contain structured objects
  const renderDataArray = (data: any[]) => {
    if (!Array.isArray(data)) return <span className="text-gray-700">{RenderingUtils.safeRender(data)}</span>;

    return (
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index}>
            {typeof item === "string" ? (
              <p className="text-gray-700">{item}</p>
            ) : typeof item === "object" && item !== null ? (
              <PatternObjectRenderer obj={item} />
            ) : (
              <p className="text-gray-700">{RenderingUtils.safeRender(item)}</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Universal render function for any type of data
  const renderUniversalData = (data: any) => {
    if (data === null || data === undefined) {
      return <span className="text-gray-500 italic">No data available</span>;
    }

    if (typeof data === "string") {
      return <span className="text-gray-700">{data}</span>;
    }

    if (typeof data === "number" || typeof data === "boolean") {
      return <span className="text-gray-700">{String(data)}</span>;
    }

    if (Array.isArray(data)) {
      if (data.length === 0) {
        return <span className="text-gray-500 italic">No items available</span>;
      }
      return renderDataArray(data);
    }

    if (typeof data === "object") {
      return <PatternObjectRenderer obj={data} />;
    }

    return <span className="text-gray-700">{RenderingUtils.safeRender(data)}</span>;
  };

  return renderUniversalData(data);
};

export default UniversalDataRenderer;

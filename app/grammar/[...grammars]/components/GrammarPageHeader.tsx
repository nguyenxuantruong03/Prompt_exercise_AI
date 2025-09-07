import React from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Target } from "lucide-react";

interface GrammarPageHeaderProps {
  grammarInfo: any;
  grammarKey: string;
  grammarData: any;
  formatTitle: (key: string) => string;
  formatDate: (dateString: string) => string;
  getProperty: (obj: any, prop: string) => any;
}

const GrammarPageHeader: React.FC<GrammarPageHeaderProps> = ({
  grammarInfo,
  grammarKey,
  grammarData,
  formatTitle,
  formatDate,
  getProperty,
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <span>{grammarInfo.category.icon}</span>
        <span>{grammarInfo.category.title}</span>
        <span>/</span>
        <span className="text-blue-600">{grammarInfo.item.title}</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {formatTitle(grammarKey)}
      </h1>

      {grammarInfo.item.description && (
        <p className="text-xl text-gray-600 mb-6">
          {grammarInfo.item.description}
        </p>
      )}

      {/* Metadata */}
      <div className="flex flex-wrap gap-4 mb-6">
        {getProperty(grammarData, "created") && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>
              Created: {formatDate(getProperty(grammarData, "created"))}
            </span>
          </div>
        )}
        {getProperty(grammarData, "updated") && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>
              Updated: {formatDate(getProperty(grammarData, "updated"))}
            </span>
          </div>
        )}
        <Badge variant="secondary" className="flex items-center gap-1">
          <Target className="h-3 w-3" />
          {grammarInfo.category.title}
        </Badge>
      </div>
    </div>
  );
};

export default GrammarPageHeader;

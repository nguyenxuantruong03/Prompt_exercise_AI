"use client";

import React from "react";
import { notFound } from "next/navigation";
import GrammarLayout from "@/components/navigation/GrammarLayout";
import TableOfContents from "@/components/navigation/TableOfContents";
import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";
import { getGrammarItemByDatabaseKey } from "@/lib/static/grammars/grammar-categories";
import { getDatabaseKey } from "@/lib/utils/grammar-key-mapping";

// Import các component đã tách
import GrammarHomepage from "./components/GrammarHomepage";
import GrammarPageHeader from "./components/GrammarPageHeader";
import DataCompletenessOverview from "./components/DataCompletenessOverview";
import GrammarContentSections from "./components/GrammarContentSections";
import { generateTableOfContentsSections } from "./components/TableOfContentsSections";

interface GrammarPageProps {
  params: Promise<{
    grammars: string[];
  }>;
}

const GrammarPage: React.FC<GrammarPageProps> = ({ params }) => {
  // Convert URL path back to database key format
  // URL: simple-present -> Simple_Present
  const resolvedParams = React.use(params);
  const urlParam = resolvedParams.grammars?.[0];

  // Function to convert URL format to database key format
  const convertUrlToKey = (url: string): string | null => {
    return getDatabaseKey(url);
  };

  const grammarKey = urlParam ? convertUrlToKey(urlParam) : null;

  console.log("🔍 Debug Grammar Page:");
  console.log("  URL Param:", urlParam);
  console.log("  Grammar Key:", grammarKey);

  // Check if the topic is available in the database
  if (urlParam && !grammarKey) {
    console.log("❌ Grammar key not found, redirecting to 404");
    notFound();
  }

  if (!grammarKey) {
    return (
      <GrammarLayout>
        <GrammarHomepage />
      </GrammarLayout>
    );
  }

  // Find the grammar topic in the database
  const grammarData = grammarKey
    ? tenseDatabase[grammarKey as keyof typeof tenseDatabase]
    : null;

  // Get the grammar info using the more flexible function
  const grammarInfo = grammarKey
    ? getGrammarItemByDatabaseKey(grammarKey)
    : null;

  console.log("  Grammar Data exists:", !!grammarData);
  console.log(
    "  Grammar Data keys:",
    grammarData ? Object.keys(grammarData).slice(0, 5) : "None"
  );
  console.log("  Grammar Info exists:", !!grammarInfo);

  if (!grammarData || !grammarInfo) {
    console.log("❌ Data or info not found, redirecting to 404");
    notFound();
  }

  // Type guard to safely access properties
  const getProperty = (obj: any, prop: string) => {
    const result =
      obj && typeof obj === "object" && prop in obj ? obj[prop] : undefined;
    if (prop === "definition" && result) {
      console.log(
        "📋 Definition found:",
        typeof result,
        Object.keys(result || {}).slice(0, 3)
      );
    }
    return result;
  };

  // Generate sections for Table of Contents
  const sections = generateTableOfContentsSections(grammarData, getProperty);

  return (
    <GrammarLayout>
      <style jsx global>{`
        section[id] {
          scroll-margin-top: 120px;
        }
      `}</style>
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Table of Contents - Mobile Top */}
        <div className="lg:hidden">
          <TableOfContents sections={sections} className="mb-6" />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <GrammarPageHeader
            grammarKey={grammarKey}
            grammarInfo={grammarInfo}
            grammarData={grammarData}
            getProperty={getProperty}
          />

          {/* Data Completeness Overview */}
          <DataCompletenessOverview
            grammarData={grammarData}
            getProperty={getProperty}
          />

          {/* Content Sections */}
          <GrammarContentSections
            grammarData={grammarData}
            grammarKey={grammarKey}
            grammarInfo={grammarInfo}
            getProperty={getProperty}
          />

          {/* Navigation to related topics */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {grammarInfo.category.items
                .filter((item: any) => item.key !== grammarKey)
                .slice(0, 5)
                .map((item: any) => (
                  <span
                    key={item.key}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {item.title}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Table of Contents Sidebar - Desktop Only */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <TableOfContents sections={sections} />
        </div>
      </div>
    </GrammarLayout>
  );
};

export default GrammarPage;

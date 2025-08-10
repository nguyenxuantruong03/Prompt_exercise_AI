"use client";

import ContentPDF from "./components/content-pdf";

const DownloadPDF = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto py-8">
        <ContentPDF />
      </div>
    </div>
  );
};

export default DownloadPDF;

import { Button } from "@/components/ui/button";
import { TenseItem } from "../hint-tenses";

interface ExportAllDialogProps {
  loadingDownloadPDF: boolean;
  setShowExportAllDialog: (value: boolean) => void;
  handleGoToDownloadPage: () => void;
  handleDownloadImmediately: () => void;
  tenseItems?: TenseItem[];
}

const ExportAllDialog: React.FC<ExportAllDialogProps> = ({
  loadingDownloadPDF,
  setShowExportAllDialog,
  handleGoToDownloadPage,
  handleDownloadImmediately,
  tenseItems,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        // Close dialog when clicking on backdrop (only if not loading)
        if (e.target === e.currentTarget && !loadingDownloadPDF) {
          setShowExportAllDialog(false);
        }
      }}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-xl p-6 w-[90%] max-w-2xl shadow-2xl space-y-4 relative animate-fade-in border border-gray-200 dark:border-gray-700"
        onKeyDown={(e) => {
          // Close dialog when pressing Escape (only if not loading)
          if (e.key === "Escape" && !loadingDownloadPDF) {
            setShowExportAllDialog(false);
          }
        }}
        tabIndex={-1}
      >
        {/* Close X Button */}
        <Button
          className={`absolute top-3 right-3 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
            loadingDownloadPDF
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
          onClick={() => !loadingDownloadPDF && setShowExportAllDialog(false)}
          disabled={loadingDownloadPDF}
          aria-label="Close dialog"
        >
          &times;
        </Button>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 pr-8">
          📚 Export All Grammar Topics
        </h2>

        <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line font-mono text-sm leading-relaxed max-h-80 overflow-y-auto bg-gray-50 dark:bg-gray-700 p-3 rounded-lg border">
          {`You're about to export all ${
            typeof tenseItems !== "undefined" ? tenseItems.length : "available"
          } grammar topics. Choose your preferred option:

🎯 QUICK OPTION:
──────────────────────────────────
📄 Download PDF immediately with all topics included in a comprehensive format.

🛠️ CUSTOMIZATION OPTION:  
──────────────────────────────────
🌐 Go to the Download PDF page where you can:
• Customize content selection
• Choose specific topics or categories
• Adjust formatting options
• Preview before download
• Access additional export features

💡 RECOMMENDATION:
──────────────────────────────────
For a quick reference guide → Choose "Download Now"
For customized content → Choose "Go to Download Page"
For no action → Choose "Cancel"`}
        </div>

        <div className="flex justify-between items-center gap-3 pt-4 flex-wrap">
          {/* Cancel Button - Just close without action */}
          <Button
            onClick={() => !loadingDownloadPDF && setShowExportAllDialog(false)}
            disabled={loadingDownloadPDF}
            className={`px-4 py-2 rounded-md transition-colors duration-200 order-1 ${
              loadingDownloadPDF
                ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200"
            }`}
            title={
              loadingDownloadPDF
                ? "Cannot close while generating PDF"
                : "Close dialog without any action"
            }
          >
            ❌ Cancel
          </Button>

          <div className="flex gap-2 order-2">
            {/* Go to Download Page Button */}
            <Button
              onClick={handleGoToDownloadPage}
              disabled={loadingDownloadPDF}
              className={`px-4 py-2 rounded-md text-white transition-colors duration-200 font-medium ${
                loadingDownloadPDF
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
              title={
                loadingDownloadPDF
                  ? "Cannot navigate while generating PDF"
                  : "Navigate to the download page for customization options"
              }
            >
              🌐 Go to Download Page
            </Button>

            {/* Download Now Button */}
            <Button
              onClick={handleDownloadImmediately}
              disabled={loadingDownloadPDF}
              className={`px-4 py-2 rounded-md text-white transition-colors duration-200 font-medium ${
                loadingDownloadPDF
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
              title={
                loadingDownloadPDF
                  ? "Generating PDF..."
                  : "Download PDF immediately with all topics"
              }
            >
              {loadingDownloadPDF ? (
                <>
                  <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generating...
                </>
              ) : (
                "📄 Download Now"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportAllDialog;

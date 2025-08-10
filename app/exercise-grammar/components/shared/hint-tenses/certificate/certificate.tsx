import { Button } from "@/components/ui/button";
import { ClipboardList } from "lucide-react";

interface CertificateProps {
  handleIELTSPDF: () => void;
  handleTOEICPDF: () => void;
  handlePTEPDF: () => void;
  handleTOEFLPDF: () => void;
  handleCambridgePDF: () => void;
  handleSATPDF: () => void;
  handleVSTEPPDF: () => void;
  handleAllCertificatesPDF: () => void;
  loadingDownloadPDF: boolean;
}

const Certificate: React.FC<CertificateProps> = ({
  handleIELTSPDF,
  handleTOEICPDF,
  handlePTEPDF,
  handleTOEFLPDF,
  handleCambridgePDF,
  handleSATPDF,
  handleVSTEPPDF,
  handleAllCertificatesPDF,
  loadingDownloadPDF,
}) => {
  return (
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 border-b border-purple-200 dark:border-purple-700">
      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3 flex items-center gap-2">
        <ClipboardList className="w-5 h-5" />
        Certificate Export Options
      </h4>
      <div className="grid grid-cols-2 gap-3">
        <Button
          onClick={handleIELTSPDF}
          disabled={loadingDownloadPDF}
          className="bg-purple-100 hover:bg-purple-200 dark:bg-purple-800 dark:hover:bg-purple-700 text-purple-800 dark:text-purple-200 p-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingDownloadPDF ? "⏳ Generating..." : "IELTS"}
        </Button>
        <Button
          onClick={handleTOEICPDF}
          disabled={loadingDownloadPDF}
          className="bg-purple-100 hover:bg-purple-200 dark:bg-purple-800 dark:hover:bg-purple-700 text-purple-800 dark:text-purple-200 p-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingDownloadPDF ? "⏳ Generating..." : "TOEIC"}
        </Button>
        <Button
          onClick={handlePTEPDF}
          disabled={loadingDownloadPDF}
          className="bg-purple-100 hover:bg-purple-200 dark:bg-purple-800 dark:hover:bg-purple-700 text-purple-800 dark:text-purple-200 p-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingDownloadPDF ? "⏳ Generating..." : "PTE"}
        </Button>
        <Button
          onClick={handleTOEFLPDF}
          disabled={loadingDownloadPDF}
          className="bg-purple-100 hover:bg-purple-200 dark:bg-purple-800 dark:hover:bg-purple-700 text-purple-800 dark:text-purple-200 p-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingDownloadPDF ? "⏳ Generating..." : "TOEFL"}
        </Button>
        <Button
          onClick={handleCambridgePDF}
          disabled={loadingDownloadPDF}
          className="bg-purple-100 hover:bg-purple-200 dark:bg-purple-800 dark:hover:bg-purple-700 text-purple-800 dark:text-purple-200 p-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingDownloadPDF ? "⏳ Generating..." : "Cambridge"}
        </Button>
        <Button
          onClick={handleSATPDF}
          disabled={loadingDownloadPDF}
          className="bg-purple-100 hover:bg-purple-200 dark:bg-purple-800 dark:hover:bg-purple-700 text-purple-800 dark:text-purple-200 p-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingDownloadPDF ? "⏳ Generating..." : "SAT"}
        </Button>
        <Button
          onClick={handleVSTEPPDF}
          disabled={loadingDownloadPDF}
          className="bg-purple-100 hover:bg-purple-200 dark:bg-purple-800 dark:hover:bg-purple-700 text-purple-800 dark:text-purple-200 p-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingDownloadPDF ? "⏳ Generating..." : "VSTEP"}
        </Button>
        <Button
          onClick={handleAllCertificatesPDF}
          disabled={loadingDownloadPDF}
          className="bg-gradient-to-r from-red-100 to-orange-100 hover:from-red-200 hover:to-orange-200 dark:from-red-800 dark:to-orange-800 dark:hover:from-red-700 dark:hover:to-orange-700 text-red-800 dark:text-red-200 p-3 rounded-lg text-sm font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed border-2 border-red-300 dark:border-red-600"
        >
          {loadingDownloadPDF ? "⏳ Generating..." : "ALL 7 CERTIFICATES "}
        </Button>
      </div>
    </div>
  );
};

export default Certificate;

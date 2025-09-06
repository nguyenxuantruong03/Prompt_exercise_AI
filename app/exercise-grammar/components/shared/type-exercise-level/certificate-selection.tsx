import { Button } from "@/components/ui/button";
import { CertificateType } from "@/types/grammars/grammars_type";

interface CertificateSelectionProps {
  selectedCertificate: CertificateType | null;
  setSelectedCertificate: (certificate: CertificateType | null) => void;
}

const certificateInfo = {
  IELTS: {
    fullName: "International English Language Testing System",
    description: "Academic & General Training",
    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200"
  },
  TOEIC: {
    fullName: "Test of English for International Communication",
    description: "Business English Assessment",
    color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
  },
  PTE: {
    fullName: "Pearson Test of English",
    description: "Computer-based Assessment",
    color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-200"
  },
  TOEFL: {
    fullName: "Test of English as a Foreign Language",
    description: "Academic English Proficiency",
    color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
  },
  Cambridge: {
    fullName: "Cambridge English Qualifications",
    description: "KET, PET, FCE, CAE, CPE",
    color: "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-200"
  },
  SAT: {
    fullName: "Scholastic Assessment Test",
    description: "College Entrance Exam",
    color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200"
  },
  VSTEP: {
    fullName: "Vietnamese Standardized Test of English Proficiency",
    description: "Vietnam English Standard",
    color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-200"
  }
} as const satisfies Record<CertificateType, { fullName: string; description: string; color: string }>;

const CertificateSelection: React.FC<CertificateSelectionProps> = ({
  selectedCertificate,
  setSelectedCertificate,
}) => {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Target Certificate Type (Optional):
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Select a certificate to generate exercises tailored for that specific test format
          </p>
        </div>
        {selectedCertificate && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedCertificate(null)}
            className="text-xs"
          >
            Clear Selection
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {(Object.entries(certificateInfo) as [CertificateType, typeof certificateInfo[CertificateType]][]).map(([certificate, info]) => (
          <Button
            key={certificate}
            variant="outline"
            onClick={() => setSelectedCertificate(selectedCertificate === certificate ? null : certificate)}
            className={`p-4 h-auto text-left transition-all duration-200 hover:shadow-md ${
              selectedCertificate === certificate
                ? `${info.color} border-2 shadow-md transform scale-105`
                : "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <div>
                <div className="font-bold text-sm">{certificate}</div>
                <div className="text-xs opacity-75 font-normal leading-tight">
                  {info.description}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>

      {selectedCertificate && (
        <div className="mt-4 p-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
          <div className="flex items-start gap-3">
            <div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-200">
                {certificateInfo[selectedCertificate].fullName}
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                Exercises will be tailored for {selectedCertificate} format and requirements.
                This includes appropriate question types, difficulty levels, and assessment criteria.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateSelection;

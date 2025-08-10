import { useEffect, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface ModalProps {
  classCustomHeader?: string;
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  headerIcon?: ReactNode;
  headerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  modalClassName?: string;
  maxWidth?: string;
  maxHeight?: string;
  showCloseButton?: boolean;
  closeButtonText?: string;
  preventBackgroundClose?: boolean;
  headerLayoutMode?: "modern" | "classic"; // New prop to control header layout
  maxHeightNonFooter?: string;
  maxHeightFooter?: string; // Deprecated, use maxHeightNonFooter
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  headerIcon,
  headerClassName = "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white",
  contentClassName = "",
  footerClassName = "bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/30 dark:to-purple-900/30 border-t border-gray-200 dark:border-gray-600",
  modalClassName = "bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-600",
  maxWidth = "max-w-7xl",
  maxHeight = "max-h-[90vh]",
  showCloseButton = true,
  closeButtonText = "Close",
  preventBackgroundClose = false,
  headerLayoutMode = "modern", // Default to modern layout,
  maxHeightNonFooter = "max-h-[calc(95vh-120px)]",
  classCustomHeader,
  maxHeightFooter = "max-h-[calc(90vh-180px)]", // Deprecated, use maxHeightNonFooter
}) => {
  // Toggle body scroll when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !preventBackgroundClose) {
      onClose();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full ${maxWidth} ${maxHeight} ${modalClassName} overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className={`sticky top-0 z-10 ${
            headerLayoutMode === "classic" ? "p-4" : "p-3"
          } ${headerClassName}`}
        >
          {headerLayoutMode === "classic" ? (
            // Classic layout - more like the old modal header
            <div className={`${classCustomHeader ? classCustomHeader : ""}`}>
              <div className="items-center gap-3">
                {headerIcon && (
                  <span className="text-lg md:text-2xl">{headerIcon}</span>
                )}
                <div>
                  <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
                  {subtitle && (
                    <div className="text-indigo-100 text-xs md:text-sm mt-1 md:mt-2">
                      {subtitle}
                    </div>
                  )}
                </div>
              </div>

              {showCloseButton && (
                <Button
                  variant="ghost"
                  onClick={onClose}
                  className="ml-4 p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  title="Close modal (Esc)"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Button>
              )}
            </div>
          ) : (
            // Modern layout - current structure
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  {headerIcon && (
                    <div className="p-1 md:p-3 bg-white/20 rounded-lg">
                      {headerIcon}
                    </div>
                  )}
                  <div>
                    <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
                    {subtitle && (
                      <div className="text-blue-100 mt-2 text-sm md:text-lg">
                        {subtitle}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {showCloseButton && (
                <Button
                  variant="ghost"
                  onClick={onClose}
                  className="flex items-center gap-3 px-5 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg hidden md:block">
                    {closeButtonText}
                  </span>
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Modal Content */}
        <div
          className={`modal-content-scroll overflow-y-auto ${
            footer ? maxHeightFooter : maxHeightNonFooter
          }`}
        >
          <div className={`p-2 ${contentClassName}`}>{children}</div>
        </div>

        {/* Modal Footer */}
        {footer && (
          <div className={`sticky z-50 bottom-0 p-2 ${footerClassName}`}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

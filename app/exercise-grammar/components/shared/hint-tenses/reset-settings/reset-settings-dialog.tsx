import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ResetSettingDialogProps {
  showResetDialog: boolean;
  handleResetConfirm: () => void;
  handleResetCancel: () => void;
  bookmarkedTenses: string[];
  showModalExtensions: boolean;
  selectedCEFRLevel: string;
  selectedCategory: string;
  sortMode: string;
  showOnlyBookmarked: boolean;
  autoScroll: boolean;
  autoScrollDuration: number;
  modalViewMode: string;
  fontSizeMode: string;
  allTenseKeys: string[];
}

const ResetSettingDialog: React.FC<ResetSettingDialogProps> = ({
  showResetDialog,
  handleResetConfirm,
  handleResetCancel,
  bookmarkedTenses,
  showModalExtensions,
  selectedCEFRLevel,
  selectedCategory,
  sortMode,
  showOnlyBookmarked,
  autoScroll,
  autoScrollDuration,
  allTenseKeys,
  modalViewMode,
  fontSizeMode,
}) => {
  return (
    <Dialog open={showResetDialog} onOpenChange={(open) => !open && handleResetCancel()}>
      <DialogContent className="max-w-[95vw] w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
        <DialogHeader>
          <DialogTitle>🔄 Reset All Settings</DialogTitle>
          <DialogDescription asChild>
            <div className="whitespace-pre-line text-left">
              <div>
                <p>Are you sure you want to reset all settings to default?</p>
                
                <h3 className="font-semibold mt-4 mb-2">📊 CURRENT STATUS:</h3>
                <div className="border-b border-gray-300 dark:border-gray-600 mb-2"></div>
                <ul className="space-y-1">
                  <li>• Bookmarked Tenses: {bookmarkedTenses.length} items</li>
                  <li>• Modal Extensions: {showModalExtensions ? "✅ Enabled" : "❌ Disabled"}</li>
                  <li>• CEFR Filter: {selectedCEFRLevel}</li>
                  <li>• Category Filter: {selectedCategory.toUpperCase()}</li>
                  <li>• Sort Mode: {
                    sortMode === "low_to_high"
                      ? `Low to High (1→${allTenseKeys.length})`
                      : sortMode === "high_to_low"
                      ? `High to Low (${allTenseKeys.length}→1)`
                      : sortMode === "level_a1_c2"
                      ? "Level A1→C2 (Beginner to Certificate)"
                      : sortMode === "level_c2_a1"
                      ? "Level C2→A1 (Certificate to Beginner)"
                      : sortMode === "name_a_z"
                      ? "Name A→Z (Alphabetical)"
                      : "Name Z→A (Reverse Alphabetical)"
                  }</li>
                  <li>• Bookmarked View: {showOnlyBookmarked ? "✅ Active" : "❌ Inactive"}</li>
                  <li>• Auto Scroll: {autoScroll ? "✅ Enabled" : "❌ Disabled"}</li>
                  <li>• Auto Scroll Duration: {autoScrollDuration}s</li>
                  <li>• Modal View Mode: {modalViewMode.toUpperCase()}</li>
                  <li>• Font Size: {fontSizeMode.toUpperCase()}</li>
                </ul>

                <h3 className="font-semibold mt-4 mb-2">💾 LOCALSTORAGE DATA TO BE CLEARED:</h3>
                <div className="border-b border-gray-300 dark:border-gray-600 mb-2"></div>
                <ul className="space-y-1">
                  <li>• hintTenses-bookmarks: {bookmarkedTenses.length > 0 ? `${bookmarkedTenses.length} items` : "Empty"}</li>
                  <li>• hintTenses-sortMode: {sortMode}</li>
                  <li>• hintTenses-selectedCategory: {selectedCategory}</li>
                  <li>• hintTenses-autoScrollDuration: {autoScrollDuration}s</li>
                  <li>• showModalExtensions: {showModalExtensions ? "true" : "false"}</li>
                </ul>

                <h3 className="font-semibold mt-4 mb-2">🔄 WHAT WILL BE RESET:</h3>
                <div className="border-b border-gray-300 dark:border-gray-600 mb-2"></div>
                <ul className="space-y-1">
                  <li>✓ Clear all bookmarked tenses ({bookmarkedTenses.length} items)</li>
                  <li>✓ Reset CEFR level filter to "ALL"</li>
                  <li>✓ Reset category filter to "ALL"</li>
                  <li>✓ Reset sort mode to "Low to High"</li>
                  <li>✓ Disable "Show Only Bookmarked" view</li>
                  <li>✓ Enable modal extensions</li>
                  <li>✓ Reset auto scroll settings to defaults</li>
                  <li>✓ Reset view mode to "detailed"</li>
                  <li>✓ Reset font size to "normal"</li>
                  <li>✓ Clear all localStorage data</li>
                  <li>✓ Reset all modal states and preferences</li>
                </ul>

                <div className="mt-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded">
                  <p className="text-yellow-800 dark:text-yellow-200 font-medium">⚠️ WARNING: This action cannot be undone!</p>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={handleResetCancel}>
            ❌ Cancel
          </Button>
          <Button variant="destructive" onClick={handleResetConfirm}>
            🔄 Yes, Reset Everything
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResetSettingDialog;

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BookmarkDialogProps {
  showClearBookmarksDialog: boolean;
  setShowClearBookmarksDialog: (value: boolean) => void;
  handleClearBookmarksConfirm: () => void;
  bookmarkedTenses: string[];
}

const BookmarkDialog: React.FC<BookmarkDialogProps> = ({
    showClearBookmarksDialog,
    setShowClearBookmarksDialog,
    handleClearBookmarksConfirm,
    bookmarkedTenses,
}) => {
    return ( 
        <Dialog open={showClearBookmarksDialog} onOpenChange={setShowClearBookmarksDialog}>
          <DialogContent className="max-w-[95vw] w-full sm:max-w-2xl overflow-x-hidden">
            <DialogHeader>
              <DialogTitle>🗑️ Clear All Bookmarks</DialogTitle>
              <DialogDescription asChild>
                <div className="text-left">
                  <div>
                    <p>Are you sure you want to clear all bookmarked tenses?</p>
                    
                    <h3 className="font-semibold mt-4 mb-2">📚 BOOKMARKED TENSES TO BE DELETED:</h3>
                    <div className="border-b border-gray-300 dark:border-gray-600 mb-2"></div>
                    {bookmarkedTenses.length === 0 ? (
                      <p className="text-gray-500">❌ No bookmarks found</p>
                    ) : (
                      <ol className="space-y-1 max-h-32 overflow-y-auto">
                        {bookmarkedTenses.map((bookmark, index) => (
                          <li key={index}>{index + 1}. {bookmark}</li>
                        ))}
                      </ol>
                    )}

                    <h3 className="font-semibold mt-4 mb-2">📊 SUMMARY:</h3>
                    <div className="border-b border-gray-300 dark:border-gray-600 mb-2"></div>
                    <ul className="space-y-1">
                      <li>• Total bookmarks: {bookmarkedTenses.length} items</li>
                      <li>• Storage location: localStorage (hintTenses-bookmarks)</li>
                    </ul>

                    <div className="mt-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded">
                      <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                        ⚠️ WARNING: This action cannot be undone!
                      </p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
                        All your carefully selected tense references will be permanently removed.
                      </p>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => setShowClearBookmarksDialog(false)}
              >
                ❌ Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleClearBookmarksConfirm}
              >
                🗑️ Yes, Clear All Bookmarks
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
     );
}
 
export default BookmarkDialog;
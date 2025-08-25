import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import postServices from "@/services/postServices";
import { useToast } from "@/context/ToastContext";

export function DeletePostDialog({ postId }) {
  const { showSuccess, showError } = useToast();

  const handleDelete = async () => {
    try {
      const response = postServices.deletePost(postId);
      if (response) {
        showSuccess("Post deleted successfully");
      } else {
        showError("Couldn't delete the post");
      }
    } catch (error) {
      showError("Server Error...");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button>Delete</button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            post.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

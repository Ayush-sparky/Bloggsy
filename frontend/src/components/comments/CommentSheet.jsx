import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useComment } from "@/context/CommentProvider";
import { MessageCircle } from "lucide-react";
import { CommentCard } from "./CommentCard";

export default function CommentSheet({ postId }) {
  const { getComments, loading, comments } = useComment();

  const fetchComments = async () => {
    await getComments(postId);
  };

  return (
    <Sheet onOpenChange={(open) => open && fetchComments()}>
      <SheetTrigger asChild>
        <button className="flex items-center space-x-2 text-slate-600 hover:text-blue-500 p-2 rounded-md transition-colors">
          <MessageCircle className="w-4 h-4" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Comments</SheetTitle>
          <SheetDescription>
            Join the discussion for this post.
          </SheetDescription>
        </SheetHeader>

        {loading ? (
          // <div className="space-y-2">
          //   <Skeleton className="h-12 w-full" />
          //   <Skeleton className="h-12 w-full" />
          // </div>
          <h1>Loading...</h1>
        ) : comments && comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard key={comment._id} comment={comment} />
          ))
        ) : (
          <div className="flex justify-center items-center h-screen text-slate-500">
            <div>
              <MessageCircle className="mx-auto h-6 w-6 mb-2" />
              <p>No comments yet. Be the first to comment!</p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}


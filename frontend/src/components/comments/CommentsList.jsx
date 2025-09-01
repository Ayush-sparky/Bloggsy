import { ScrollArea } from "@/components/ui/scroll-area";
import { useComment } from "@/context/CommentProvider";
import { CommentSkeleton } from "./CommentSkeleton";
import { MessageCircle } from "lucide-react";
import { CommentCard } from "./CommentCard";

export function CommentsList() {
  const { comments, loading } = useComment();
//   const loading = true

  return (
    <ScrollArea className=" min-h-96 rounded-md border">
      {loading ? (
        <div className=" p-4 space-y-4">
          <CommentSkeleton />
          <div className=" ml-8">
            <CommentSkeleton />
          </div>
          <CommentSkeleton />
          <CommentSkeleton />
          <CommentSkeleton />
        </div>
      ) : comments && comments.length > 0 ? (
        <div className="p-4">
          {comments.map((comment) => (
            <CommentCard key={comment._id} comment={comment} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-96 justify-center items-center text-slate-500">
          <div>
            <MessageCircle className="mx-auto h-6 w-6 mb-2" />
            <p>No comments yet. Be the first to comment!</p>
          </div>
        </div>
      )}
    </ScrollArea>
  );
}

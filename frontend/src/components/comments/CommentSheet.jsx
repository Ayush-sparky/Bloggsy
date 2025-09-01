import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useComment } from "@/context/CommentProvider";
import { MessageCircle, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { CommentsList } from "./CommentsList";
import { Button } from "../ui/button";
import { commentServices } from "@/services/commentServices";

const initialDataState = {
  content: "",
  postId: null,
  parentCommentId: null,
};

export default function CommentSheet({ postId }) {
  const { getComments } = useComment();
  const [form, setForm] = useState(initialDataState);

  useEffect(() => {
    if (postId) {
      setForm((prev) => ({ ...prev, postId }));
    }
  }, [postId]);

  const postComment = async () => {
    await commentServices.postCommentOrReply(form);
    setForm((prev) => ({ ...prev, content: "" }));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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
        <SheetHeader className="py-2">
          <SheetTitle>Comments</SheetTitle>
          <SheetDescription>
            Join the discussion for this post.
          </SheetDescription>
        </SheetHeader>

        <CommentsList />

        <div className="px-4 py-6">
          <div className="relative">
            <input
              type="text"
              name="content" 
              onChange={handleChange}
              value={form.content}
              placeholder="Type your message..."
              className="w-full px-4 py-3 pr-12 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
            />
            <Button
              type="submit"
              size="sm"
              onClick={postComment} 
              disabled={!form.content.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

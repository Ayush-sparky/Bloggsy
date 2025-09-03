import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, MoreHorizontal, Send } from "lucide-react";
import { useTimeAgo } from "@/hooks/useTimeAgo";
import { useEffect, useState } from "react";
import { commentServices } from "@/services/commentServices";

const initialDataState = {
  content: "",
  postId: null,
  parentCommentId: null,
};

export function CommentCard({ comment, isReply = false }) {
  const [isReplying, setIsReplying] = useState(false);
  const [form, setForm] = useState(initialDataState);

  useEffect(() => {
    if (comment._id && comment.post) {
      setForm((prev) => ({
        ...prev,
        postId: comment.post,
        parentCommentId: comment._id,
      }));
    }
  }, [comment._id, comment.post]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const postComment = async () => {
    await commentServices.postCommentOrReply(form);
    setForm((prev) => ({ ...prev, content: "" }));
    setIsReplying(false);
  };

  const timeAgo = useTimeAgo(comment.createdAt);

  return (
    <Card className={`${isReply ? "ml-8 border-l-2 border-l-muted" : ""}`}>
      <CardContent className="p-4">
        <div className="flex gap-3">
          {/* Avatar */}
          <Avatar className="h-8 w-8 flex-shrink-0">
            <AvatarFallback className="text-xs font-medium">
              {comment.author.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          {/* Comment Content */}
          <div className="flex-1 space-y-2">
            {/* Header */}
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-foreground">
                {comment.author.username}
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{timeAgo}</span>
              {comment.updatedAt !== comment.createdAt && (
                <>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">edited</span>
                </>
              )}
            </div>

            {/* Comment Text */}
            <p className="text-sm text-foreground leading-relaxed text-pretty">
              {comment.content}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-1 pt-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-muted-foreground hover:text-foreground"
              >
                <Heart className="h-3 w-3 mr-1" />
                <span className="text-xs">Like</span>
              </Button>

              {!comment.parentComment && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                   setIsReplying(true)
                  }}
                  className="h-7 px-2 text-muted-foreground hover:text-foreground"
                >
                  <MessageCircle className="h-3 w-3 mr-1" />
                  <span className="text-xs">Reply</span>
                </Button>
              )}

              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0 ml-auto text-muted-foreground hover:text-foreground"
              >
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </div>

            {isReplying && (
              <div className="px-4 py-6">
                <div className="relative">
                  <input
                    type="text"
                    autoFocus
                    name="content"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        postComment;
                      }
                    }}
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
            )}
          </div>
        </div>
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 space-y-3">
            {comment.replies.map((reply) => (
              <CommentCard key={reply._id} comment={reply} isReply={true} />
            ))}
          </div>
        )}
        {comment.repliesCount > (comment.replies?.length ?? 0) && (
          <div className="mt-3 ml-11">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs text-muted-foreground hover:text-foreground"
            >
              View {comment.repliesCount - (comment.replies?.length ?? 0)} more{" "}
              {comment.repliesCount - (comment.replies?.length ?? 0) === 1
                ? "reply"
                : "replies"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

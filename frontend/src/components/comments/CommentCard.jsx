import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, MoreHorizontal } from "lucide-react";
import { useTimeAgo } from "@/hooks/useTimeAgo";

export function CommentCard({ comment, isReply = false }) {
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

              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-muted-foreground hover:text-foreground"
              >
                <MessageCircle className="h-3 w-3 mr-1" />
                <span className="text-xs">Reply</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0 ml-auto text-muted-foreground hover:text-foreground"
              >
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </div>
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

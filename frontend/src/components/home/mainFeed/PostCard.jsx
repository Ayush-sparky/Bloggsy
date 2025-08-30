import CommentSheet from "@/components/comments/CommentSheet";
import { PostUpDel } from "@/components/dropdowns/PostUpDel";
import { useTimeAgo } from "@/hooks/useTimeAgo";
import {
  Heart,
  Share2,
  Bookmark,
} from "lucide-react";

export default function PostCard({ post, ownPost = false }) {
  const PostTime = post.createdAt || "2025-08-22T03:29:35.746Z";
  const timeAgo = useTimeAgo(PostTime);
  // console.log(post._id)

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      {/* Post Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-800 flex justify-center items-center rounded-full overflow-hidden">
              {post.author.profile_image ? (
                <img
                  className="h-full w-full rounded-full"
                  src={`http://localhost:3030${post.author.profile_image}`}
                />
              ) : post.author.username ? (
                <h2 className=" text-lg font-medium text-white">
                  {post.author.username.charAt(0).toUpperCase()}
                </h2>
              ) : (
                <h2 className=" text-lg font-medium text-white">?</h2>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">
                {post.author.username}
              </h4>
              <p className="text-sm text-slate-500">
                {post.username} • {timeAgo || "1 day"}
              </p>
            </div>
          </div>
          {ownPost && <PostUpDel postId={post._id} />}
        </div>

        <h2 className="font-serif font-bold text-xl text-slate-800 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
          {post.title}
        </h2>
        <p className="text-slate-600 mb-4 leading-relaxed">{post.content}</p>
      </div>

      {/* Post Image */}
      <div className="px-6 pb-4">
        <img
          src={`http://localhost:3030${post.coverImage}` || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Post Actions */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-slate-600 hover:text-red-500 p-2 rounded-md transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">123</span>
            </button>
            <CommentSheet postId={post._id} />
            <button className="flex items-center space-x-2 text-slate-600 hover:text-green-500 p-2 rounded-md transition-colors">
              <Share2 className="w-4 h-4" />
              <span className="text-sm">6</span>
            </button>
          </div>
          <button className="text-slate-600 hover:text-blue-600 p-2 rounded-md transition-colors">
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

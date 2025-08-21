import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

export function MainFeed() {
  const posts = [
    {
      id: 1,
      author: "Alex Chen",
      username: "@alexchen",
      avatar: "/tech-blogger-avatar.png",
      time: "2h ago",
      title: "The Future of Web Development: What to Expect in 2025",
      excerpt:
        "As we move into 2025, the landscape of web development continues to evolve at breakneck speed. From AI-powered development tools to new frameworks...",
      image: "/futuristic-web-development-coding.png",
      tags: ["Technology", "Web Dev", "AI"],
      likes: 142,
      comments: 23,
      shares: 8,
    },
    {
      id: 2,
      author: "Sarah Johnson",
      username: "@sarahj",
      avatar: "/design-blogger-avatar.png",
      time: "4h ago",
      title: "Minimalist Design Principles That Actually Work",
      excerpt:
        "Less is more - but how do you achieve that perfect balance? In this post, I explore the core principles of minimalist design that create maximum impact...",
      image: "/minimalist-workspace.png",
      tags: ["Design", "UX", "Minimalism"],
      likes: 89,
      comments: 15,
      shares: 12,
    },
    {
      id: 3,
      author: "Jack Admas",
      username: "@jacky",
      avatar: "/tech-blogger-avatar.png",
      time: "2h ago",
      title: "The Future of Web Development: What to Expect in 2025",
      excerpt:
        "As we move into 2025, the landscape of web development continues to evolve at breakneck speed. From AI-powered development tools to new frameworks...",
      image: "/futuristic-web-development-coding.png",
      tags: ["Technology", "Web Dev", "AI"],
      likes: 142,
      comments: 23,
      shares: 8,
    },
    {
      id: 4,
      author: "Shruti Gurung",
      username: "@shrutiLovesC",
      avatar: "/tech-blogger-avatar.png",
      time: "2h ago",
      title: "The Future of Web Development: What to Expect in 2025",
      excerpt:
        "As we move into 2025, the landscape of web development continues to evolve at breakneck speed. From AI-powered development tools to new frameworks...",
      image: "/futuristic-web-development-coding.png",
      tags: ["Technology", "Web Dev", "AI"],
      likes: 142,
      comments: 23,
      shares: 8,
    },
    {
      id: 5,
      author: "Ashika Mandal",
      username: "@ashikaCodes",
      avatar: "/tech-blogger-avatar.png",
      time: "2h ago",
      title: "The Land of Dawn: What to Expect in 2025",
      excerpt:
        "As we move into 2025, the landscape of web development continues to evolve at breakneck speed. From AI-powered development tools to new frameworks...",
      image: "/futuristic-web-development-coding.png",
      tags: ["Technology", "Web Dev", "AI"],
      likes: 142,
      comments: 23,
      shares: 8,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Create Post */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/diverse-user-avatars.png"
              alt="You"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <button className="w-full text-left text-slate-500 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md px-4 py-2 transition-colors">
              What's on your mind? Share your thoughts...
            </button>
          </div>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Post Header */}
          <div className="p-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={post.avatar || "/placeholder.svg"}
                    alt={post.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {post.author}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {post.username} • {post.time}
                  </p>
                </div>
              </div>
              <button className="p-2 hover:bg-slate-100 rounded-md transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            <h2 className="font-serif font-bold text-xl text-slate-800 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
              {post.title}
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                /* Replaced shadcn Badge with plain span */
                <span
                  key={tag}
                  className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full hover:bg-blue-100 cursor-pointer transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Post Image */}
          <div className="px-6 pb-4">
            <img
              src={post.image || "/placeholder.svg"}
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
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-slate-600 hover:text-blue-500 p-2 rounded-md transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-slate-600 hover:text-green-500 p-2 rounded-md transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">{post.shares}</span>
                </button>
              </div>
              <button className="text-slate-600 hover:text-blue-600 p-2 rounded-md transition-colors">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

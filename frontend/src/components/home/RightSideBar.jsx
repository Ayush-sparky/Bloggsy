import { TrendingUp, Users, Hash } from "lucide-react"

export default function RightSidebar() {
  const trendingTopics = [
    { tag: "WebDevelopment", posts: "2.1k posts" },
    { tag: "AI", posts: "1.8k posts" },
    { tag: "Design", posts: "1.5k posts" },
    { tag: "Startup", posts: "892 posts" },
    { tag: "Productivity", posts: "743 posts" },
  ]

  const suggestedCreators = [
    {
      name: "Mike Rodriguez",
      username: "@mikerod",
      bio: "Full-stack developer sharing coding tips",
      avatar: "/developer-avatar.png",
      followers: "12.5k",
    },
    {
      name: "Emma Wilson",
      username: "@emmaw",
      bio: "UX designer passionate about accessibility",
      avatar: "/diverse-designer-avatars.png",
      followers: "8.2k",
    },
    {
      name: "David Park",
      username: "@davidp",
      bio: "Entrepreneur building the future",
      avatar: "/entrepreneur-avatar.png",
      followers: "15.1k",
    },
  ]

  return (
    <div className="sticky top-20 space-y-6">
      {/* Trending Topics */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="font-serif font-bold text-slate-800">Discover What's Hot</h3>
        </div>
        <div className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div
              key={topic.tag}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-sm font-bold text-slate-400">#{index + 1}</span>
                <div>
                  <p className="font-medium text-slate-800">#{topic.tag}</p>
                  <p className="text-xs text-slate-500">{topic.posts}</p>
                </div>
              </div>
              <Hash className="w-4 h-4 text-slate-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Creators */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-5 h-5 text-blue-600" />
          <h3 className="font-serif font-bold text-slate-800">Meet Our Community Stars</h3>
        </div>
        <div className="space-y-4">
          {suggestedCreators.map((creator) => (
            <div key={creator.username} className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={creator.avatar || "/placeholder.svg"}
                  alt={creator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-slate-800 truncate">{creator.name}</h4>
                <p className="text-xs text-slate-500 mb-1">{creator.username}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-2">{creator.bio}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{creator.followers} followers</span>
                  <button className="text-xs h-7 px-3 border border-slate-200 rounded-md hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 bg-transparent transition-colors">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 rounded-xl p-6">
        <div className="text-center">
          <h3 className="font-serif font-bold text-slate-800 mb-2">Join Us Today</h3>
          <p className="text-sm text-slate-600 mb-4">Share Your Story!</p>
          <button className="w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md transition-colors">
            Start Writing
          </button>
        </div>
      </div>
    </div>
  )
}

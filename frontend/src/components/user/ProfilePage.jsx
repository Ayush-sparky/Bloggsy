import UserProfileCard from "./UserProfileCard";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <UserProfileCard />

        {/* Posts Section */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200">
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Posts</h2>
          </div>

          <div className="divide-y divide-slate-200">
            {/* Post 1 */}
            <div className="p-6">
              <div className="flex items-start space-x-3">
                <img
                  src="/professional-profile.png"
                  alt="John Doe"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-slate-900">John Doe</h3>
                    <span className="text-slate-500">•</span>
                    <span className="text-sm text-slate-500">2 hours ago</span>
                  </div>
                  <p className="text-slate-700 mt-2">
                    Just finished reading an amazing book on productivity! The
                    key insights about time management have completely changed
                    how I approach my daily routine. Highly recommend it to
                    anyone looking to optimize their workflow.
                  </p>
                  <img
                    src="/productivity-book-desk.png"
                    alt="Post image"
                    className="mt-3 rounded-lg w-full max-w-md"
                  />
                  <div className="flex items-center space-x-6 mt-4 text-sm text-slate-500">
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <span>👍</span>
                      <span>24 Likes</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <span>💬</span>
                      <span>8 Comments</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <span>🔄</span>
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="p-6">
              <div className="flex items-start space-x-3">
                <img
                  src="/professional-profile.png"
                  alt="John Doe"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-slate-900">John Doe</h3>
                    <span className="text-slate-500">•</span>
                    <span className="text-sm text-slate-500">1 day ago</span>
                  </div>
                  <p className="text-slate-700 mt-2">
                    Working on a new blog post about the future of web
                    development. The landscape is changing so rapidly with new
                    frameworks and tools emerging every month. What are your
                    thoughts on the current state of frontend development?
                  </p>
                  <div className="flex items-center space-x-6 mt-4 text-sm text-slate-500">
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <span>👍</span>
                      <span>42 Likes</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <span>💬</span>
                      <span>15 Comments</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <span>🔄</span>
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 3 */}
            <div className="p-6">
              <div className="flex items-start space-x-3">
                <img
                  src="/professional-profile.png"
                  alt="John Doe"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-slate-900">John Doe</h3>
                    <span className="text-slate-500">•</span>
                    <span className="text-sm text-slate-500">3 days ago</span>
                  </div>
                  <p className="text-slate-700 mt-2">
                    Beautiful sunset from my morning walk today. Sometimes the
                    best inspiration comes from stepping away from the screen
                    and connecting with nature. How do you find your creative
                    spark?
                  </p>
                  <img
                    src="/beautiful-sunset-landscape.png"
                    alt="Sunset"
                    className="mt-3 rounded-lg w-full max-w-md"
                  />
                  <div className="flex items-center space-x-6 mt-4 text-sm text-slate-500">
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <span>👍</span>
                      <span>67 Likes</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <span>💬</span>
                      <span>12 Comments</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <span>🔄</span>
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

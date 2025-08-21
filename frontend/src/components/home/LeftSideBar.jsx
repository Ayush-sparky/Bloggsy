import { BookOpen, Users, TrendingUp, Heart } from "lucide-react";
import { useAuth } from "../../context/authContext";

export function LeftSidebar() {
  const categories = [
    { name: "Technology", count: 1234, icon: BookOpen },
    { name: "Design", count: 856, icon: Heart },
    { name: "Business", count: 642, icon: TrendingUp },
    { name: "Lifestyle", count: 423, icon: Users },
  ];

  const { user } = useAuth();

  return (
    <div className="sticky top-20 space-y-6">
      {/* Profile Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto flex justify-center items-center bg-blue-800 mb-4 rounded-full">
            {user ? (
              <h2 className=" text-2xl font-bold text-white">{user.username.charAt(0).toUpperCase()}</h2>
            ) : (
              <p>{"Not Found"}</p>
            )}
          </div>
          <h3 className="font-serif font-bold text-slate-800 mb-1">
            {user ? user.username : "Not Found"}
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            Creative Writer & Tech Enthusiast
          </p>
          <div className="flex justify-center space-x-4 text-sm text-slate-600 mb-4">
            <div>
              <span className="font-semibold text-slate-800">127</span>
              <p>Posts</p>
            </div>
            <div>
              <span className="font-semibold text-slate-800">2.4k</span>
              <p>Followers</p>
            </div>
            <div>
              <span className="font-semibold text-slate-800">892</span>
              <p>Following</p>
            </div>
          </div>
          <button className="w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md transition-colors">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Favorite Categories */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-serif font-bold text-slate-800 mb-4">
          Your Categories
        </h3>
        <div className="space-y-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">
                    {category.name}
                  </span>
                </div>
                <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

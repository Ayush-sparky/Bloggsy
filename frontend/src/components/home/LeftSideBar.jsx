import { BookOpen, Users, TrendingUp, Heart } from "lucide-react";
import { useAuth } from "../../context/authContext";
import ProfileCard from "./left/ProfileCard";

export function LeftSidebar() {
  const categories = [
    { name: "Technology", count: 1234, icon: BookOpen },
    { name: "Design", count: 856, icon: Heart },
    { name: "Business", count: 642, icon: TrendingUp },
    { name: "Lifestyle", count: 423, icon: Users },
  ];

  return (
    <div className="sticky top-20 space-y-6">
      <ProfileCard />

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

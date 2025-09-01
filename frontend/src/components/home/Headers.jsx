import { Search, Bell, MessageCircle, User } from "lucide-react";
import CreatePostDialog from "../dialogs/CreatePostDialog";
import { useAuth } from "@/context/authContext";
import { UserControl } from "../dropdowns/UserControl";

export function Header() {
  const { user } = useAuth();
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-serif font-bold text-blue-600">
              bloggsy
            </h1>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                placeholder="Search posts, topics, or creators..."
                className="pl-10 bg-slate-50 border-slate-200 w-full h-9 rounded-md border px-3 py-1 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-md transition-colors">
              <MessageCircle className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-md transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-md transition-colors">
              {/* <User className="w-5 h-5" /> */}
              {user && (
                <UserControl />
              )}
            </button>
            <CreatePostDialog />
          </div>
        </div>
      </div>
    </header>
  );
}

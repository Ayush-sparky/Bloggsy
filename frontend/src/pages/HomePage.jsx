import { Header } from "../components/home/Headers";
import { LeftSidebar } from "../components/home/LeftSideBar";
import { MainFeed } from "../components/home/MainFeed";
import RightSidebar from "../components/home/RightSideBar";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-300">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            <LeftSidebar />
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-6">
            <MainFeed />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

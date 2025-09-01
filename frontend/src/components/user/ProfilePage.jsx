import { ProfileFeed } from "./ProfileFeed";
import UserProfileCard from "./UserProfileCard";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <UserProfileCard />

        {/* Posts Section */}
        <ProfileFeed />
      </div>
    </div>
  );
}

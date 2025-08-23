import { useAuth } from "../../context/authContext";

export default function UserProfileCard() {
  const { user, loading } = useAuth();

  if(loading){
    return <div className=" min-h-screen flex justify-center items-center">
            <h1 className=" text-2xl font-bold">Loading...</h1>
    </div>
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 mb-6">
      {/* Cover Photo */}
      <div
        className="h-48 bg-gradient-to-r from-blue-400 flex items-center
       justify-center to-blue-600 rounded-t-lg relative"
      >
        <h3 className=" text-lg text-white">Cover Image</h3>
      </div>

      {/* Profile Info */}
      <div className="px-6 pb-6 pt-4">
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-6 -mt-8 sm:-mt-12">
          {/* Profile Picture */}
          <div className="relative mb-4 sm:mb-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg">
              {user ? (
                <h2 className=" text-2xl font-bold text-white">
                  {user.username.charAt(0).toUpperCase()}
                </h2>
              ) : (
                <p>{"?"}</p>
              )}
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1 text-center sm:text-left mt-6 sm:mt-8">
            <div className="mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {user ? user.username : "user not found"}
              </h1>
              <p className="text-slate-600 mt-1">
                {user ? user.email : "notFound@notFound.com"}
              </p>
              <p className="text-slate-700 mt-3 max-w-2xl mx-auto sm:mx-0">
                Passionate blogger sharing insights about technology, lifestyle,
                and personal growth. Always learning, always writing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start mb-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Edit Profile
              </button>
              <button className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                Share Profile
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
              <div className="text-center">
                <div className="text-xl font-bold text-slate-900">127</div>
                <div className="text-sm text-slate-600">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-slate-900">2.4k</div>
                <div className="text-sm text-slate-600">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-slate-900">892</div>
                <div className="text-sm text-slate-600">Following</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-slate-900">45</div>
                <div className="text-sm text-slate-600">Likes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

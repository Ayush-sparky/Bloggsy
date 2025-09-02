import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

export default function ProfileCard() {
  const { user } = useAuth();
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto flex justify-center items-center bg-blue-800 mb-4 rounded-full">
          {user.profile_image ? (
            <img
              className=" w-full h-full rounded-full"
              src={`http://localhost:3030${user.profile_image}`}
            />
          ) : (
            <h2 className=" text-2xl font-bold text-white">
              {user.username.charAt(0).toUpperCase()}
            </h2>
          )}
        </div>
        <h3 className="font-serif font-bold text-slate-800 mb-1">
          @ {user ? user.username : "Not Found"}
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
        <Link
          to="/profile"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

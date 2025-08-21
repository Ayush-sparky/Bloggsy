import { useAuth } from "../../../context/authContext";

export default function CreatePost() {
  const { user } = useAuth();
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="w-10 bg-blue-800 h-10 flex justify-center items-center rounded-full overflow-hidden">
          {user ? (
            <h2 className=" text-xl font-medium text-white">
              {user.username.charAt(0).toUpperCase()}
            </h2>
          ) : (
            <p>{"?"}</p>
          )}
        </div>
        <div className="flex-1">
          <button className="w-full text-left text-slate-500 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md px-4 py-2 transition-colors">
            What's on your mind? Share your thoughts...
          </button>
        </div>
      </div>
    </div>
  );
}

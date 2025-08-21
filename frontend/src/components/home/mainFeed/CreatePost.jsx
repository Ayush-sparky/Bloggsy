export default function CreatePost() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="/diverse-user-avatars.png"
            alt="You"
            className="w-full h-full object-cover"
          />
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

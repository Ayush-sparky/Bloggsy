import { useEffect, useState } from "react";
import PostCard from "../home/mainFeed/PostCard";
import postServices from "@/services/postServices";

export function ProfileFeed() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const resPosts = await postServices.getMyPosts(currentPage, limit);

      setPosts(resPosts.posts);
      setTotalPages(resPosts.totalPages);
    };

    fetchAllPosts();
  }, [currentPage]);

  return (
    <div className="space-y-6">
      {posts.length === 0 ? (
        <h1>No Posts Found</h1>
      ) : (
        posts.map((post) => (
          <PostCard ownPost={true} key={post._id} post={post} />
        ))
      )}

      {parseInt(totalPages) > 1 && (
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={`${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-gray-50 text-black"
              } w-6 h-6 p-1 flex justify-center items-center`}
              key={page}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

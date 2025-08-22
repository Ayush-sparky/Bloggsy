import PostCard from "./mainFeed/PostCard";
import CreatePost from "./mainFeed/CreatePost";
import postServices from "../../services/postServices";
import { useEffect, useState } from "react";

export function MainFeed() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const resPosts = await postServices.getAllPosts(currentPage, limit);

      const allPosts = resPosts.allPosts;
      // const resCurrPage = resPosts.currentPage;
      const resTotalPages = resPosts.totalPages;

      setPosts(allPosts);
      // setCurrentPage(resCurrPage);
      setTotalPages(resTotalPages);
    };

    fetchAllPosts();
  }, [currentPage]);

  return (
    <div className="space-y-6">
      <CreatePost />

      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}

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
    </div>
  );
}

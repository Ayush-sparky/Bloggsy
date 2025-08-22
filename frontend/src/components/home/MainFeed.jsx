import PostCard from "./mainFeed/PostCard";
import CreatePost from "./mainFeed/CreatePost";
import postServices from "../../services/postServices";
import { useEffect, useState } from "react";

export function MainFeed() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const resPosts = await postServices.getAllPosts();
      const allPosts = resPosts.allPosts;
      const resCurrPage = resPosts.currentPage;
      const resTotalPages = resPosts.totalPages;

      console.log(resTotalPages);
      console.log(resCurrPage);

      setPosts(allPosts);
      setCurrentPage(resCurrPage);
      setTotalPages(resTotalPages);
    };

    fetchAllPosts();
  }, []);

  return (
    <div className="space-y-6">
      <CreatePost />

      {/* {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))} */}

      <div>
        {posts.map((post) => {
          const username = post.author.username;
          return (
            <div
              key={username}
              className=" flex items-center justify-center flex-col"
            >
              <h3>@{username}</h3>
              <h1>{post.title}</h1>
              <h2>{post.content}</h2>
            </div>
          );
        })}
      </div>

      <div className="flex items-center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <p
            className={`${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-gray-50 text-black"
            } w-6 h-6 p-1 flex justify-center items-center gap-2`}
            key={page}
          >
            {page}
          </p>
        ))}
      </div>
    </div>
  );
}

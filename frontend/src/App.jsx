import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "http://localhost:3030/api/posts?page=1&limit=5"
        );
        const data = await res.json();
        setPosts(data.allPosts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Hello This is a fullstack blog App </h1>
      <ul>
        {posts.map((post) => {
          return <li>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

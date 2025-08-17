import React, { useEffect, useState } from "react";
import RegisterForm from "./components/auth/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginPage";

function App() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const res = await fetch(
  //         "http://localhost:3030/api/posts?page=1&limit=5"
  //       );
  //       const data = await res.json();
  //       setPosts(data.allPosts);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchPosts();
  // }, []);
  // return (
  //   <div>
  //     <h1>Hello This is a fullstack blog App </h1>
  //     <ul>
  //       {posts.map((post) => {
  //         return (
  //           <div className="max-w-sm mx-auto mb-20 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
  //             {/* Cover Image */}
  //             {post.coverImage && post.coverImage.startsWith("/uploads") ? (
  //               <div>
  //                 <img
  //                   src={`http://localhost:3030${post.coverImage}`}
  //                   alt="CoverImage"
  //                 />
  //               </div>
  //             ) : (
  //               <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
  //                 <div className="text-white text-center">
  //                   <div className="text-4xl mb-2">📰</div>
  //                   <div className="text-sm opacity-75">Cover Image</div>
  //                 </div>
  //               </div>
  //             )}

  //             {/* Card Content */}
  //             <div className="p-6">
  //               {/* Title */}
  //               <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
  //                 {post.title}
  //               </h2>

  //               {/* Content Preview */}
  //               <p className="text-gray-600 text-sm mb-4 leading-relaxed">
  //                 {post.content}
  //               </p>

  //               {/* Author and Actions */}
  //               <div className="flex items-center justify-between">
  //                 <div className="flex items-center">
  //                   <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
  //                     {post.author.username.charAt(0).toUpperCase()}
  //                   </div>
  //                   <div className="ml-3">
  //                     <p className="text-sm font-medium text-gray-900">
  //                       {post.author.username}
  //                     </p>
  //                     <p className="text-xs text-gray-500">Author</p>
  //                   </div>
  //                 </div>

  //                 <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors duration-200">
  //                   Read More
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hey this is the home page</h1>} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;

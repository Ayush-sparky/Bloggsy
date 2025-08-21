import PostCard from "./mainFeed/PostCard";
import CreatePost from "./mainFeed/CreatePost";
import postServices from "../../services/postServices";

export function MainFeed() {
  const posts = [
    {
      id: 1,
      author: "Alex Chen",
      username: "@alexchen",
      avatar: "/tech-blogger-avatar.png",
      time: "2h ago",
      title: "The Future of Web Development: What to Expect in 2025",
      excerpt:
        "As we move into 2025, the landscape of web development continues to evolve at breakneck speed. From AI-powered development tools to new frameworks...",
      image: "/futuristic-web-development-coding.png",
      tags: ["Technology", "Web Dev", "AI"],
      likes: 142,
      comments: 23,
      shares: 8,
    },
    {
      id: 2,
      author: "Sarah Johnson",
      username: "@sarahj",
      avatar: "/design-blogger-avatar.png",
      time: "4h ago",
      title: "Minimalist Design Principles That Actually Work",
      excerpt:
        "Less is more - but how do you achieve that perfect balance? In this post, I explore the core principles of minimalist design that create maximum impact...",
      image: "/minimalist-workspace.png",
      tags: ["Design", "UX", "Minimalism"],
      likes: 89,
      comments: 15,
      shares: 12,
    },
    {
      id: 3,
      author: "Jack Admas",
      username: "@jacky",
      avatar: "/tech-blogger-avatar.png",
      time: "2h ago",
      title: "The Future of Web Development: What to Expect in 2025",
      excerpt:
        "As we move into 2025, the landscape of web development continues to evolve at breakneck speed. From AI-powered development tools to new frameworks...",
      image: "/futuristic-web-development-coding.png",
      tags: ["Technology", "Web Dev", "AI"],
      likes: 142,
      comments: 23,
      shares: 8,
    },
    {
      id: 4,
      author: "Shruti Gurung",
      username: "@shrutiLovesC",
      avatar: "/tech-blogger-avatar.png",
      time: "2h ago",
      title: "The Future of Web Development: What to Expect in 2025",
      excerpt:
        "As we move into 2025, the landscape of web development continues to evolve at breakneck speed. From AI-powered development tools to new frameworks...",
      image: "/futuristic-web-development-coding.png",
      tags: ["Technology", "Web Dev", "AI"],
      likes: 142,
      comments: 23,
      shares: 8,
    },
    {
      id: 5,
      author: "Ashika Mandal",
      username: "@ashikaCodes",
      avatar: "/tech-blogger-avatar.png",
      time: "2h ago",
      title: "The Land of Dawn: What to Expect in 2025",
      excerpt:
        "As we move into 2025, the landscape of web development continues to evolve at breakneck speed. From AI-powered development tools to new frameworks...",
      image: "/futuristic-web-development-coding.png",
      tags: ["Technology", "Web Dev", "AI"],
      likes: 142,
      comments: 23,
      shares: 8,
    },
  ];

  const fetchAllPosts = async () => {
    const posts = await postServices.getAllPosts();
    console.log(posts);
  };

  return (
    <div className="space-y-6">
      <button onClick={fetchAllPosts}>Fetch All Posts</button>
      <CreatePost />

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

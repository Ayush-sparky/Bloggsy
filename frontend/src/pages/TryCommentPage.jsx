import { useComment } from "@/context/CommentProvider";
import { useState } from "react";

const initialDataState = {
  content: "",
  postId: "",
  parentCommentId: "",
};

export default function TryCommentPage() {
  const [data, setData] = useState(initialDataState);
  const [postId, setPostId] = useState("");
  const { comments, error, loading, postComment, getComments } = useComment();
  // const [commentsList, setCommentsList] = useState([]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const fetchComments = async (id) => {
    await getComments(id);
  };

  const handleSubmit = async () => {
    try {
      await postComment(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={() => fetchComments(postId)}>Fetch Comments</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data.content}
          name="content"
          onChange={handleChange}
          placeholder="Enter your Comment"
          required
        />

        <input
          type="text"
          value={data.postId}
          name="postId"
          onChange={handleChange}
          placeholder="Enter PostId"
          required
        />

        <input
          type="text"
          value={data.parentCommentId}
          name="parentCommentId"
          onChange={handleChange}
          placeholder="Enter ParentCommentId"
        />
        <button type="submit">Post Comment</button>
      </form>

      <div>
        <ul>
          {loading ? (
            <p>Loading Comments......</p>
          ) : comments ? (
            comments.map((c) => <li key={c._id}>{c.content}</li>)
          ) : (
            <p>{error}</p>
          )}
        </ul>
      </div>
    </div>
  );
}

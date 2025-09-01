import { commentReducer, initialCommentState } from "@/reducers/commentReducer";
import { commentServices } from "@/services/commentServices";
import { createContext, useContext, useReducer } from "react";

const CommentContext = createContext();

export default function CommentProvider({ children }) {
  const [state, dispatch] = useReducer(commentReducer, initialCommentState);

  const postComment = async (data) => {
    try {
      dispatch({ type: "POST_OR_FETCH_COMMENTS_START" });
      const response = await commentServices.postCommentOrReply(data);
      dispatch({ type: "POST_COMMENT_SUCCESS" });
      return response
    } catch (error) {
      return error;
    }
  };

  const getComments = async (postId) => {
    try {
      dispatch({ type: "POST_OR_FETCH_COMMENTS_START" });
      const response = await commentServices.getCommentsOfaPost(postId);
      dispatch({ type: "FETCH_COMMENTS_SUCCESS", payload: response });
    } catch (error) {
      dispatch({ type: "FETCH_COMMENTS_FAILURE", payload: error });
    }
  };

  return (
    <CommentContext.Provider value={{ ...state, postComment, getComments }}>
      {children}
    </CommentContext.Provider>
  );
}

export const useComment = () => {
  const context = useContext(CommentContext);

  if (!context) {
    throw new Error("useComment must be used within an CommentProvider");
  }
  return context;
};

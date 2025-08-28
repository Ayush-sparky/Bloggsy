import { api } from "./api";

export const commentServices = {
  postCommentOrReply: async (data) => {
    try {
      const response = await api.post("/api/comments/post", data);
      return response.data;
    } catch (error) {
      throw new Error("Error commenting");
    }
  },

  getCommentsOfaPost: async (postId) => {
    try {
      const response = await api.get(`/api/comments/${postId}`);
      console.log(response.data.commentsWithReplies);
      return response.data.commentsWithReplies;
    } catch (error) {
      throw new Error("Error fetching comments");
    }
  },
};

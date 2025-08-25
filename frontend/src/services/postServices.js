import { api } from "./api";

const postServices = {
  getAllPosts: async (page, limit) => {
    try {
      const response = await api.get(
        `/api/posts/others?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  createAPost: async (formData) => {
    try {
      const response = await api.post("/api/posts/create", formData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  getMyPosts: async (page, limit) => {
    try {
      const response = await api.get(
        `/api/posts/my?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  updateAPost: async (postId, formData) => {
    try {
      const response = await api.put(`/api/posts/update/${postId}`, formData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  deletePost: async (postId) => {
    try {
      const response = await api.delete(`/api/posts/delete/${postId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  },
};

export default postServices;

import { api } from "./api";

const postServices = {
  getAllPosts: async (page, limit) => {
    try {
      const response = await api.get(`/api/posts?page=${page}&limit=${limit}`);
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
};

export default postServices;

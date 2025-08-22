import { api } from "./api";

const postServices = {
  getAllPosts: async (page,limit) => {
    try {
      const response = await api.get(`/api/posts?page=${page}&limit=${limit}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export default postServices;

import { api } from "./api";

const TOKEN_KEY = "blog_token";

const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const authServices = {
  registerUser: async (userData) => {
    try {
      const response = await api.post("/api/users/register", userData);

      setToken(response.data.token);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.error ||
          "Something went wrong, please try again.",
        status: error.response?.status || 500,
      };
    }
  },

  loginUser: async (userData) => {
    try {
      const response = await api.post("/api/users/login", userData);
      const { token, user } = response.data;
      setToken(token);
      return {
        success: true,
        user,
        token,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.error ||
          "Something went wrong, please try again.",
        status: error.response?.status || 500,
      };
    }
  },

  logout: () => {
    removeToken();
  },

  getCurrentUser: async () => {
    try {
      const res = await api.get("/api/users/current_user");
      return res.data.user;
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.error ||
          "Something went wrong, please try again.",
        status: error.response?.status || 500,
      };
    }
  },
};

export default authServices;

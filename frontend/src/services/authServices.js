import { api } from "./api";

const TOKEN_KEY = "blog_token";

const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const getToken = () => {
  localStorage.getItem(TOKEN_KEY);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const authServices = {
  registerUser: async (userData) => {
    try {
      const response = await api.post("/api/users/register", userData);
      return response.data;
    } catch (err) {
      return err;
    }
  },

  loginUser: async (userData) => {
    try {
      const response = await api.post("/api/users/login", userData);
      const { token, user } = response.data;

      setToken(token);
      return {
        message: response.data.message,
        user,
      };
    } catch (err) {
      return err;
    }
  },

  logout: () => {
    removeToken();
  },
};

export default authServices;

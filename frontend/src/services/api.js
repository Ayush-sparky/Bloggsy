import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3030",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // 🔹 Attach token if available
    const token = localStorage.getItem("blog_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // 🔹 If FormData, remove Content-Type so browser sets it correctly
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => Promise.reject(error)
);

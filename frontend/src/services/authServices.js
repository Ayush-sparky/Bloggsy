import { api } from "./api";

const authServices = {
  registerUser: async (userData) => {
    try {
      const response = await api.post("/api/users/register", userData);
      console.log(response)
      return response.message
    } catch (err) {
      return err
    }
  },
};

export default authServices;
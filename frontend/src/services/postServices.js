import { api } from "./api";

const postServices = {
    getAllPosts : async () => {
       try {
         const response = await api.get("/api/posts");
         return response.data;
       } catch (err) {
        throw new Error(err)
       }
    }
}

export default postServices
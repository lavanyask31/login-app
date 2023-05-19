import { Resource } from "./ResourceVariable";
import { apiAuth } from "../../Authenticate";
export const ApiHandler = {
  getUser: async (userId) => {
    const response = await apiAuth.getApiwithoutAuth(
      Resource.url.getUser(userId)
    );
    return response?.data;
  },

  updateUser: async (userId, formData) => {
    const response = await apiAuth.putApiwithoutAuth(
      Resource.url.updateUser(userId),
      formData
    );
    console.log("done");
    return response?.data;
  },
};

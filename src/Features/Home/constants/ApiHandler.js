import { Resource } from "./ResourceVariable";
import { apiAuth } from "../../Authenticate";
export const ApiHandler = {
  getAllUser: async () => {
    const response = await apiAuth.getApiwithoutAuth(Resource.url.getAllUser);
    return response?.data;
  },

  deleteUser: async (userId) => {
    console.log("2", Resource.url.deleteUser(userId));
    const response = await apiAuth.deleteApiwithoutAuth(
      Resource.url.deleteUser(userId)
    );
    console.log("end");
    return response?.data;
  },
};

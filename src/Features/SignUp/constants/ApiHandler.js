import { Resource } from "./ResourceVariable";
import { apiAuth } from "../../Authenticate";
export const ApiHandler = {
  createUser: async (userData) => {
    const response = await apiAuth.postApiwithoutAuth(
      Resource.url.createUser,
      userData
    );

    return response?.data;
  },
};

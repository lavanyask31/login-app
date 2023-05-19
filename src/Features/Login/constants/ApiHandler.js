import { Resource } from "./ResourceVariable";
import { apiAuth } from "../../Authenticate";
export const ApiHandler = {
  getUser: async (email, password) => {
    const response = await apiAuth.getApiwithoutAuth(
      Resource.url.getUser(email, password)
    );

    return response?.data;
  },
};

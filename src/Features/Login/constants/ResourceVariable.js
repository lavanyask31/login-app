export const Resource = {
  url: {
    getUser: (email, password) => `/users?email=${email}&password=${password}`,
  },
};

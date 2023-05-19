export const Resource = {
  url: {
    getUser: (userId) => `/users/${userId}`,
    createUser: `/users/create`,
    updateUser: (userId) => `/users/${userId}`,
  },
};

import axios from "axios";
export const apiAuth = {
  getApiwithoutAuth: async (url) => {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}${url}`);
  },
  postApiwithoutAuth: async (url, data) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}${url}`, data);
  },
  putApiwithoutAuth: async (url, data) => {
    return await axios.put(`${process.env.REACT_APP_BASE_URL}${url}`, data);
  },
  deleteApiwithoutAuth: async (url) => {
    console.log("axios:=", url);
    return await axios.delete(`${process.env.REACT_APP_BASE_URL}${url}`);
  },
};

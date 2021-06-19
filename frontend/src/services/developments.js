import axiosClient from "./";

export const getDevelopments = (callback, queries = "") => {
  return axiosClient
    .get(`/development?${queries}`)
    .then((res) => callback(res.data));
};

import axiosClient from "./";

export const getDevelopers = (callback, queries = "") => {
  return axiosClient
    .get(`/developer?${queries}`)
    .then((res) => callback(res.data));
};

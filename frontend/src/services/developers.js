import axiosClient from "./";

export const getDevelopers = (callback, errorCallback, queries = "") => {
  return axiosClient
    .get(`/developer?${queries}`)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

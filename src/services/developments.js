import axiosClient from "./";

export const getDevelopments = (callback, errorCallback, queries = "") => {
  return axiosClient
    .get(`/development?${queries}`)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

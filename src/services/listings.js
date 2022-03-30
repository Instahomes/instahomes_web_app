import axiosClient from "./";

export const getListings = (callback, errorCallback, queries = "") => {
  return axiosClient
    .get(`/listing?${queries}`)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

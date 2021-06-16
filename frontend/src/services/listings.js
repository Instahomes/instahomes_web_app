import axiosClient from "./";

export const getListings = (callback, queries = "") => {
  return axiosClient
    .get(`/listing?${queries}`)
    .then((res) => callback(res.data));
};

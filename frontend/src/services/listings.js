import axiosClient from "./";

export const getListings = (queries = "") => {
  return axiosClient.get(`/listing?${queries}`);
};

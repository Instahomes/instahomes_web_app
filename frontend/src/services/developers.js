import axiosClient from "./";

export const getDevelopers = (queries = "") => {
  return axiosClient.get(`/developer?${queries}`);
};

import axiosClient from "./";

export const getDevelopments = (queries = "") => {
  return axiosClient.get(`/development?${queries}`);
};

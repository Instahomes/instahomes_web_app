import axiosClient from "./";

export const createGuidance = (guidance, callback, errorCallback) => {
  return axiosClient
    .post(`/guidance/`, guidance)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

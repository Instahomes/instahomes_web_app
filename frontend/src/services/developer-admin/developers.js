import axiosClient from "./";

export const getDeveloperById = (id, callback, errorCallback) => {
  return axiosClient
    .get(`/developers/${id}/`)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const updateDeveloper = (id, data, callback, errorCallback) => {
  return axiosClient
    .put(`/developers/${id}/`, data)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

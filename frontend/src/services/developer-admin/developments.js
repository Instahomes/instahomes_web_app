import axiosClient from "./";

export const getDevelopments = (callback, errorCallback) => {
  return axiosClient
    .get(`/developments/`)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const getDevelopmentById = (id, callback, errorCallback) => {
  return axiosClient
    .get(`/developments/${id}/`)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const updateDevelopment = (id, data, callback, errorCallback) => {
  return axiosClient
    .put(`/developments/${id}/`, data)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const createDevelopment = (data, callback, errorCallback) => {
  return axiosClient
    .post(`/developments/`, data)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

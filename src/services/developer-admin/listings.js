import axiosClient from "./";

export const getListings = (callback, errorCallback) => {
  return axiosClient
    .get(`/listings/`)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const getListingById = (id, callback, errorCallback) => {
  return axiosClient
    .get(`/listings/${id}/`)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const updateListing = (id, data, callback, errorCallback) => {
  return axiosClient
    .patch(`/listings/${id}/`, data)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const createListing = (data, callback, errorCallback) => {
  return axiosClient
    .post(`/listings/`, data)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const deleteListing = (id, callback, errorCallback) => {
  return axiosClient
    .delete(`/listings/${id}/`)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

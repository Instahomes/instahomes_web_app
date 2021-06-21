import axiosClient from "./";

export const updateWishlist = (listing, is_liked, callback, errorCallback) => {
  return axiosClient
    .post(`/wishlist/create/`, { listing, is_liked })
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

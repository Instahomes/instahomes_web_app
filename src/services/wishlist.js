import axiosClient from "./";
import ReactPixel from "react-facebook-pixel";

export const updateWishlist = (listing, is_liked, callback, errorCallback) => {
  if (is_liked == true) {
    ReactPixel.track("AddToWishlist", { content_ids: [listing] });
  }

  return axiosClient
    .post(`/wishlist/create/`, { listing, is_liked })
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

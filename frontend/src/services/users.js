import axiosClient from "./";
import ReactPixel from "react-facebook-pixel";

export const createUser = (
  contactNumber,
  email,
  password,
  callback,
  errorCallback
) => {
  ReactPixel.track("CompleteRegistration", { content_name: contactNumber });

  return axiosClient
    .post(`/user/create/`, {
      contact_number: contactNumber,
      email: email || null,
      password,
    })
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const createProfile = (profile, inquiry, callback, errorCallback) => {
  ReactPixel.track("Lead", {
    name: profile.name,
    listing: inquiry.listing,
    category: inquiry.category,
  });

  return axiosClient
    .post(`/profile/`, { profile, inquiry })
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const createUserWithProfile = (
  contactNumber,
  email,
  password,
  profile,
  inquiry,
  callback,
  errorCallback
) => {
  ReactPixel.track("CompleteRegistration", { content_name: contactNumber });
  ReactPixel.track("Lead", {
    content_name: inquiry.listing,
    content_category: inquiry.category,
  });

  return axiosClient
    .post(`/user/create/profile/`, {
      contact_number: contactNumber,
      email,
      password,
      profile,
      inquiry,
    })
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const createInquiry = (inquiry, callback, errorCallback) => {
  ReactPixel.track("Lead", {
    content_name: inquiry.listing,
    content_category: inquiry.category,
  });

  return axiosClient
    .post(`/inquire/`, inquiry)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const getCurrentUser = (callback, errorCallback) => {
  return axiosClient
    .get(`/user/current/`)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

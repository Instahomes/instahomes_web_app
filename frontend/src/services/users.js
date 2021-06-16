import axiosClient from "./";

export const createUser = (
  contactNumber,
  email,
  password,
  callback,
  errorCallback
) => {
  return axiosClient
    .post(`/user/create/`, {
      contactNumber,
      email,
      password,
    })
    .then((res) => callback(res.data));
};

export const createProfile = (profile, inquiry, callback, errorCallback) => {
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

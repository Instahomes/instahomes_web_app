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
      contact_number: contactNumber,
      email: email || null,
      password,
    })
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
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

export const createInquiry = (inquiry, callback, errorCallback) => {
  return axiosClient
    .post(`/inquire/`, inquiry)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

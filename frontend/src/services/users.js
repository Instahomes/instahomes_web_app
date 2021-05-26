import axiosClient from "./";

export const createUser = (email, username, password) => {
  return axiosClient.post(`/user/create`, {
    email,
    username,
    password,
  });
};

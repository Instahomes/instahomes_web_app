import axiosClient from "./";

export const obtainToken = (username, password) => {
  return axiosClient.post("/token/obtain/", {
    username,
    password,
  });
};

export const refreshToken = (refresh) => {
  return axiosClient.post("/token/refresh/", {
    refresh,
  });
};

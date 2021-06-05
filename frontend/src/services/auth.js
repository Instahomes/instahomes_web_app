import axiosClient from "./";

const LOCAL_STORAGE_TOKEN = "token";
const LOCAL_STORAGE_REFRESH_TOKEN = "refresh_token";

export const login = (email, password, callback, errorCallback) => {
  return axiosClient
    .post("/token/obtain/", {
      username: email,
      password,
    })
    .then((response) => {
      const { refresh, access } = response.data;
      storeToken(access);
      storeRefreshToken(refresh);

      callback();
    })
    .catch((err) => {
      errorCallback();
    });
};

export const refreshToken = (refresh) => {
  return axiosClient.post("/token/refresh/", {
    refresh,
  });
};

export const isAuthenticated = () => {
  return getToken() !== null;
};

export const getAuthentication = () => {
  return {
    headers: { Authorization: "JWT " + this.getToken() },
  };
};

export const getNewToken = () => {
  return new Promise((resolve, reject) => {
    refreshToken(getRefreshToken())
      .then((response) => {
        storeToken(response.data.token);
        storeRefreshToken(response.data.refresh_token);

        resolve(response.data.token);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const storeToken = (token) => {
  localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
  axiosClient.defaults.headers.common["Authorization"] = "JWT " + token;
};

export const storeRefreshToken = (refreshToken) => {
  localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN, refreshToken);
};

export const clear = () => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN);
  axiosClient.defaults.headers.common["Authorization"] = null;
};

export const getRefreshToken = () => {
  return localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN);
};

export const getToken = () => {
  return localStorage.getItem(LOCAL_STORAGE_TOKEN);
};

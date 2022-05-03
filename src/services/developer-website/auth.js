import axiosClient from "./";

const LOCAL_STORAGE_TOKEN = "devadmin_token";
const LOCAL_STORAGE_REFRESH_TOKEN = "devadmin_refresh_token";
const LOCAL_STORAGE_PROFILE = "devadmin_profile";

export const login = (contactNumber, password, callback, errorCallback) => {
  return axiosClient
    .post("/login/", {
      contact_number: contactNumber,
      password,
    })
    .then((response) => {
      if (response.data.user_type != "seller") {
        errorCallback("You are not allowed to access this section.");
      } else {
        storeToken(response.data.access);
        storeRefreshToken(response.data.refresh);
        storeProfile({
          developer: response.data.developer,
          contactNumber: response.data.contact_number,
          email: response.data.email,
          user_id: response.data.user_id,
        });

        callback();
      }
    })
    .catch((err) => {
      errorCallback("Please input your correct credentials.");
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

export const hasProfile = () => {
  return !!getProfile().name;
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
        storeToken(response.data.access);
        storeRefreshToken(response.data.refresh);

        resolve(response.data.access);
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

export const storeProfile = (profile) => {
  if (profile)
    localStorage.setItem(LOCAL_STORAGE_PROFILE, JSON.stringify(profile));
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

export const getProfile = () => {
  const profile = localStorage.getItem(LOCAL_STORAGE_PROFILE);
  return profile ? JSON.parse(profile) : null;
};

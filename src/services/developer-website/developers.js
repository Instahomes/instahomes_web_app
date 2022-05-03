import axiosClient from "./";

const LOCAL_STORAGE_DEVELOPER_PROFILE = "developer_profile";
const LOCAL_STORAGE_DEVELOPER_NAME = "developer_name";

export const hasDeveloperProfile = (route) => {
  const currentDev = localStorage.getItem(LOCAL_STORAGE_DEVELOPER_NAME) || "";
  return currentDev == route && !!getDeveloperProfile().name;
};

export const storeDeveloperProfile = (profile, route) => {
  if (profile) {
    localStorage.setItem(
      LOCAL_STORAGE_DEVELOPER_PROFILE,
      JSON.stringify(profile)
    );
    localStorage.setItem(LOCAL_STORAGE_DEVELOPER_NAME, route);
  }
};

export const getDeveloperProfile = () => {
  const profile = localStorage.getItem(LOCAL_STORAGE_DEVELOPER_PROFILE);
  return profile ? JSON.parse(profile) : null;
};

export const getDevelopers = (callback, errorCallback, queries = "") => {
  return axiosClient
    .get(`/developer/?${queries}`)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const updateDeveloper = (id, data, callback, errorCallback) => {
  return axiosClient
    .patch(`/developers/${id}/`, data)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

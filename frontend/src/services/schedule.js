import axiosClient from "./";

export const getSchedules = (developer, callback, errorCallback) => {
  return axiosClient
    .get(`/developer/schedules/${developer}/`)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

export const bookSchedule = (data, callback, errorCallback) => {
  return axiosClient
    .post(`/create_schedule/`, data)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

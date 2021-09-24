import axiosClient from "./";

export const bookSchedule = (data, callback, errorCallback) => {
  return axiosClient
    .post(`/create_schedule/`, data)
    .then((res) => callback(res.data))
    .catch((err) => errorCallback(err));
};

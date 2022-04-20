import axios from "axios";
import { clear, getNewToken, getToken, isAuthenticated } from "./auth";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosClient.interceptors.request.use(function (config) {
  if (isAuthenticated() && config.url != "/token/refresh/") {
    config.headers.Authorization = "JWT " + getToken();
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    // Return a successful response back to the calling service
    return response;
  },
  (error) => {
    // Return any error which is not due to authentication back to the calling service
    if (error.response && error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    // Logout user if token refresh didn't work
    if (error.config.url == "/token/refresh/") {
      clear();

      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    // Try request again with new token
    return getNewToken()
      .then((token) => {
        // New request with new token
        const config = error.config;
        config.headers["Authorization"] = `JWT ${token}`;

        return new Promise((resolve, reject) => {
          axios
            .request(config)
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              reject(error);
            });
        });
      })
      .catch((error) => {
        Promise.reject(error);
      });
  }
);

export default axiosClient;

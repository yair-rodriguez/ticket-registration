import axios from "axios";

const BASE_URL = "https://localhost:44354/api/v1"; // "https://api.anconaautopartes.com/api/v1.0";
// const DEV_TOKEN = "";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 60000,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    withCredentials: true
});

axiosInstance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);
axiosInstance.interceptors.request.use(
    (response) => response,
    (error) => Promise.reject(error)
);
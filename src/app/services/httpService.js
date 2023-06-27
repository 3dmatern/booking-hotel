import axios from "axios";
import { toast } from "react-toastify";
import configFile from "../config.json";
import { httpAuth } from "../hooks/useAuth";
import localStorageService from "./localStorageService";

const http = axios.create({
    baseURL: configFile.apiEndpoint,
});

http.interceptors.request.use(
    async function (config) {
        const expiresData = localStorageService.getExpiresToken();
        const refreshToken = localStorageService.getRefreshToken();
        const isExpired = refreshToken && expiresData < Date.now();
        if (isExpired) {
            const { data } = await httpAuth.post("token", {
                grantType: "refreshToken",
                refreshToken: refreshToken,
            });
            localStorageService.setTokens(data);
        }
        const accessToken = localStorageService.getAccessToken();
        if (accessToken) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${accessToken}`,
            };
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (res) => {
        res.data = { content: res.data };
        return res;
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
        if (!expectedErrors) {
            toast.error("то-то пошло не так. Попробуйте позже");
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get,
    post: http.post,
    patch: http.patch,
    delete: http.delete,
};

export default httpService;

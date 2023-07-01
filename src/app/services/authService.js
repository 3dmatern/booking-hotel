import axios from "axios";
import config from "../config.json";
import localStorageService from "./localStorageService";

const httpAuth = axios.create({
    baseURL: config.apiEndpoint + "/auth/",
});

const authService = {
    register: async (payload) => {
        const { data } = await httpAuth.post("signUp", payload);
        return data;
    },
    login: async ({ email, password }) => {
        const { data } = await httpAuth.post("signIn", { email, password });
        return data;
    },
    refresh: async () => {
        const { data } = await httpAuth.post("token", {
            grant_type: "refreshToken",
            refresh_token: localStorageService.getRefreshToken(),
        });
        return data;
    },
};

export default authService;

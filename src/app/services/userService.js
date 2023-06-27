import httpService from "./httpService";
import localStorageService from "./localStorageService";

const userEndpoint = "/user/";

const userService = {
    get: async () => {
        const { data } = await httpService.get(userEndpoint);
        return data;
    },
    getCurrentUser: async () => {
        const { data } = await httpService.get(
            userEndpoint + localStorageService.getUserId()
        );
        return data;
    },
    update: async (id, payload) => {
        const { data } = await httpService.patch(userEndpoint + id, payload);
        return data;
    },
};

export default userService;

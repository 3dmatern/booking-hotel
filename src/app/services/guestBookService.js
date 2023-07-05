import httpService from "./httpService";

const guestBookEndpoint = "/guest/";

const roomService = {
    fetchAll: async () => {
        const { data } = await httpService.get(guestBookEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(guestBookEndpoint, payload);
        return data;
    },
    get: async (id) => {
        const { data } = await httpService.get(guestBookEndpoint + id);
        return data;
    },
    update: async (id, payload) => {
        const { data } = await httpService.patch(
            guestBookEndpoint + id,
            payload
        );
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(guestBookEndpoint + id);
        return data;
    },
};
export default roomService;

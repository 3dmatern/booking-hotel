import httpService from "./httpService";

const roomEndpoint = "/room/";

const roomService = {
    fetchAll: async () => {
        const { data } = await httpService.get(roomEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(roomEndpoint, payload);
        return data;
    },
    get: async (id) => {
        const { data } = await httpService.get(roomEndpoint + id);
        return data;
    },
    update: async (id, payload) => {
        const { data } = await httpService.patch(roomEndpoint + id, payload);
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(roomEndpoint + id);
        return data;
    },
};
export default roomService;

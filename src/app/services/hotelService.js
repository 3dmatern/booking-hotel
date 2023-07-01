import httpService from "./httpService";

const hotelEndpoint = "/hotel/";

const hotelService = {
    fetchAll: async () => {
        const { data } = await httpService.get(hotelEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(hotelEndpoint, payload);
        return data;
    },
    get: async (id) => {
        const { data } = await httpService.get(hotelEndpoint + id);
        return data;
    },
    update: async (id, payload) => {
        const { data } = await httpService.patch(hotelEndpoint + id, payload);
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(hotelEndpoint + id);
        return data;
    },
};
export default hotelService;

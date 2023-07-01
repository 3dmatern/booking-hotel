import httpService from "./httpService";

const bookingEndpoint = "/booking/";

const bookingService = {
    get: async () => {
        const { data } = await httpService.get(bookingEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(bookingEndpoint, payload);
        return data;
    },
    update: async (id, payload) => {
        const { data } = await httpService.patch(bookingEndpoint + id, payload);
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(bookingEndpoint + id);
        return data;
    },
};

export default bookingService;

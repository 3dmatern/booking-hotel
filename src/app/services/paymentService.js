import httpService from "./httpService";

const paymentEndpoint = "/payment/";

const paymentService = {
    get: async () => {
        const { data } = await httpService.get(paymentEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(paymentEndpoint, payload);
        return data;
    },
    update: async (id, payload) => {
        const { data } = await httpService.patch(paymentEndpoint + id, payload);
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(paymentEndpoint + id);
        return data;
    },
};

export default paymentService;

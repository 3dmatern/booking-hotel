import httpService from "./httpService";

const facilitiEndpoint = "/faciliti/";

const facilitiService = {
    get: async () => {
        const { data } = await httpService.get(facilitiEndpoint);
        return data;
    },
};

export default facilitiService;

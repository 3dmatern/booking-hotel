import httpService from "./httpService";

const reviewEndpoint = "comment/";

const reviewService = {
    fetchAll: async () => {
        const { data } = await httpService.get(reviewEndpoint);
        return data;
    },
    createComment: async (payload) => {
        const { data } = await httpService.post(reviewEndpoint, payload);
        return data;
    },
    getComments: async (postId) => {
        const { data } = await httpService.get(reviewEndpoint, {
            params: {
                orderBy: "postId",
                equalTo: `${postId}`,
            },
        });
        return data;
    },
    update: async (id, payload) => {
        const { data } = await httpService.patch(reviewEndpoint + id, payload);
        return data;
    },

    removeComment: async (id) => {
        const { data } = await httpService.delete(reviewEndpoint + id);
        return data;
    },
};
export default reviewService;

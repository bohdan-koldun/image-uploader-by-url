import api from '../adapter';

export default {
    fetchAllImages: () => {
        return api.makeRequest(`/api/image`, api.requestType.GET);
    },
    uploadImage: recipe => {
        return api.makeRequest(`/api/image`, api.requestType.POST, recipe);
    },
    fetchImage: id => {
        return api.makeRequest(`//api/image/${id}`, api.requestType.GET);
    }
};
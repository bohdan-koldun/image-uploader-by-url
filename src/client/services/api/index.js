import axios from 'axios';

const baseURL = 'http://localhost:3001';

export default {
  fetchAllImages: () => {
    return axios.get(`${baseURL}/api/image`);
  },
  fetchFilteredImages: (filter) => {
    return axios.post(`${baseURL}/api/image/filter`, filter);
  },
  uploadImage: (url) => {
    return axios.post(`${baseURL}/api/image`, url);
  },
  fetchImage: (id) => {
    return axios.get(`${baseURL}/api/image/${id}`);
  }
};
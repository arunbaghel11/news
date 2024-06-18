import axios from 'axios';

const API_KEY = 'da5585cee4b64fd1a3d32e1244c83926';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (category = 'general', page = 1) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      category,
      page,
      apiKey: API_KEY,
    },
  });
  return response.data;
};

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://supreme-meme-5gp6gx47rwv3vgwp-4010.app.github.dev/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default apiClient;
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://turbo-goldfish-wwxqx6r5wwwc5x99-4010.app.github.dev',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default apiClient;
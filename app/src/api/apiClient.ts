import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:4010', // APIのベースURL
  timeout: 10000,                     // タイムアウト時間を設定
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,              // Cookieを含めるための設定
});

// リクエストインターセプター（ここでは必要最低限の設定に留めています）
apiClient.interceptors.request.use(
  (config) => {
    // リクエスト前のカスタマイズが必要ならここで設定
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// レスポンスインターセプター（エラーハンドリング用）
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(`API Error: ${error.response.status}`, error.response.data);
    } else {
      console.error('Network Error', error);
    }
    return Promise.reject(error);
  }
);

export default apiClient;

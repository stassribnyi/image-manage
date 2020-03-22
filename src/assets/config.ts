import { AxiosRequestConfig } from 'axios';

const baseRequestConfig: AxiosRequestConfig = Object.freeze({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000'
      : 'https://image-manager-api.herokuapp.com/'
});

export default baseRequestConfig;

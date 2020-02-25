import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.interceptors.request.use(async config => {
  config.params.APPID = process.env.REACT_APP_API_ID;
  config.params.units = 'metric';

  return config;
}, error => {
  return Promise.reject(error);
});

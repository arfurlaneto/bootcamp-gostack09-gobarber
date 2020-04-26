import axios from 'axios';

export const baseURL = 'http://localhost:3333';

export const baseURLify = url => {
  return `${baseURL}${
    !baseURL.endsWith('/') && !url.startsWith('/') ? '/' : ''
  }${url}`;
};

const api = axios.create({
  baseURL,
});

export default api;

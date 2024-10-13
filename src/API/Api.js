import axios from "axios";

// Create an Axios instance with default settings (base URL, headers)
const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000
  });

  export const getData = (endpoint) => apiClient.get(endpoint);

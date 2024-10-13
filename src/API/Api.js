import axios from "axios";

// Create an Axios instance with default settings (base URL, headers)
const apiClient = axios.create({
	baseURL: "http://localhost:8080",
	timeout: 10000,
    // 'Content-Type': 'application/json',
});


//expose the (GET,PUT,CREATE,DELETE ) functions to the global application.
export const getData = (endpoint) => apiClient.get(endpoint);
export const createUser = (userData) => apiClient.post("/users", userData);
export const updateUser = (userId, userData) =>
	apiClient.put(`/users/${userId}`, userData);
export const deleteUser = (userId) => apiClient.delete(`/users/${userId}`);

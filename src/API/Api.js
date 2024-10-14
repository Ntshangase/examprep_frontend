import axios from "axios";

// Create an Axios instance with default settings (base URL, headers)
const apiClient = axios.create({
	baseURL: "http://localhost:8080",
	timeout: 10000,
	headers: {		//important when sending data to backend.
		'Accept': 'application/json'
	}
});


//expose the (GET,PUT,CREATE,DELETE ) functions to the global application.
export const getData = (endpoint) => apiClient.get(endpoint);

//User related ENDPOINTS
export const createUser = (userData) => apiClient.post("/users", userData);
export const updateUser = (userId, userData) =>
	apiClient.put(`/users/${userId}`, userData);
export const deleteUser = (userId) => apiClient.delete(`/users/${userId}`);

//COURSE RELATED ENDPOINTS
export const createCourse = (courseData) => apiClient.post("/api/courses", courseData);

import axios from "axios";

// Create an Axios instance with default settings (base URL)
const apiClient = axios.create({
	baseURL: "http://localhost:8080",
	timeout: 10000,
});

//LOGIN RELATED ENDPOINTS
export const validateLogin = (email, password) => apiClient.post(`/api/users/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
//`login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`

//expose the (GET,PUT,CREATE,DELETE ) functions to the global application.
export const getData = (endpoint) => apiClient.get(endpoint);
export const updateData = (endpoint, courseData) => apiClient.put(endpoint, courseData);
export const deleteData = (endpoint) => apiClient.delete(endpoint);

//User related ENDPOINTS
export const createUser = (userData) => apiClient.post("/api/users/register", userData, {headers: {
	'Content-Type': 'multipart/form-data',
}});
export const updateUser = (userId, userData) =>
	apiClient.put(`/api/users/update/${userId}`, userData, {headers: {
		'Content-Type': 'multipart/form-data',
	}});
export const deleteUser = (userId) => apiClient.delete(`api/users/delete/${userId}`);
export const getAllUser = () => apiClient.get("api/users/all");
export const getUserById = (userId) => apiClient.get(`/api/users/${userId}`);
export const getAllLectures = () => apiClient.get("/api/users/lecturers");

//COURSE RELATED ENDPOINTS
export const createCourse = (courseData) => apiClient.post("/api/courses/saveCourse", courseData,{headers: {
      'Content-Type': 'multipart/form-data',
    }});
export const getCourse = () => apiClient.get("/api/courses");
export const updateCourse = (endpoint, courseData) => apiClient.put(endpoint, courseData, {headers: {
	'Content-Type': 'multipart/form-data',
}})
export const getSingleCourse = (courseId) => apiClient.get(`/api/courses/classes/${courseId}`);

//CLASS RELATED ENDPOINTS
export const getClasses = (endpoint) => apiClient.get(endpoint);
export const getCourseWithClasses = (courseId) => apiClient.get(`/api/courses/classes/${courseId}`);
export const deleteClass = (endpoint) => apiClient.delete(endpoint);
export const createClass = (courseId, classData) => apiClient.post(`/api/classes/${courseId}/addClassAndStudents`, classData, {headers: { 'Content-Type': 'multipart/form-data', }});
export const editClass = (classId,classData) => apiClient.put(`/api/classes/with-students/${classId}`, classData);
export const getClassDetails = (classId) => apiClient.get(`/api/classes/with-students/${classId}`);

//LECTURE RELATED ENDPOINTS
export const getLectureClasses = (lecturerId) => apiClient.get(`/api/classes/${lecturerId}/details`);

//DATA CAPTURE RELATED ENDPOINTS  && MODERATOR
export const addQuestion = (questionData) => apiClient.post("/api/questions/add", questionData, {headers: {
	'Content-Type': 'multipart/form-data',
}});
export const getUnmoderatedCourseQuestions = ( courseId ) => apiClient.get(`/api/questions/unmoderated/${courseId}`);
export const getUnmoderatedQuestion = ( questionId ) => apiClient.get(`/api/questions/question/${questionId}`);
export const updateQuestion = (questionId, questionUpdateData) => apiClient.put(`/api/questions/update/${questionId}`, questionUpdateData, {headers : {
	'Content-Type': 'multipart/form-data',
}});

//INDEPENDENT STUDENT ENDPOINTS
export const getIndependentStudentCourses = (studentId) => apiClient.get(`/api/tests/${studentId}/courses`);
export const postIndStudentGeneratetest=(studentId,testData)=>apiClient.post(`/api/tests?studentId=${studentId}`,testData);
export const getCourseById=(courseId)=>apiClient.get(`/api/courses/${courseId}`);
export const getGeneratedTest=(testId,studentId)=>apiClient.get(`/api/tests/${testId}/start?studentId=${studentId}`);
 
//ENROLLED STUDENT ENDPOINTS   /api/tests/32/start?studentId=33
export const getEnrolledStudentClasses = (studentId) => apiClient.get(`/api/students/${studentId}/details`);
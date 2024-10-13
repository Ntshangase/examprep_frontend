import React, { useState } from 'react';
import './AddUser.css';
import "../../Styles/global.css";
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const links = [
    { path: "/AdminLanding", pathName: "Home" },
    { path: "/ManageUser", pathName: "Manage Users" },
    { path: "/ManageCourse", pathName: "Manage Courses" },
    { path: "/ManageClass", pathName: "Manage Classes" }
  ];

  const [formData, setFormData] = useState({
    title: '', // Add title field here
    firstName: '',
    lastName: '',
    username: '',
    role: '',
    picture: null,
    selectedCourses: []
  });

  const [courseSearch, setCourseSearch] = useState('');
  const availableCourses = ["Aws", "Comptia", "Networking+", "Databases"]; // Dummy data for courses

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      picture: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log('User Data:', formData);
  };

  const handleCourseSearch = (e) => {
    setCourseSearch(e.target.value);
  };

  const handleSelectCourse = (course) => {
    if (!formData.selectedCourses.includes(course)) {
      setFormData({
        ...formData,
        selectedCourses: [...formData.selectedCourses, course]
      });
    }
  };

  const handleRemoveCourse = (course) => {
    setFormData({
      ...formData,
      selectedCourses: formData.selectedCourses.filter((c) => c !== course)
    });
  };

  const navigate = useNavigate();

  return (
    <div className="add-user-page">
      <Sidebar links={links} />

      <div className="main-content">
        <h1 className="form-title">Add User</h1>
        <form className="add-user-form" onSubmit={handleSubmit}>
          {/* Title Field */}
          <div className="form-group">
            <label>Title</label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>Select title</option>
              <option value="Prof">Prof</option>
              <option value="Dr">Dr</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
            </select>
          </div>

          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Surname"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="email"
              name="username"
              placeholder="Enter email"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>Select role</option>
              <option value="Lecturer">Lecturer</option>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
              <option value="DataCapture">Data Capture</option>
              <option value="Moderator">Moderator</option>
            </select>
          </div>

          {/* Conditionally render the search field for Student, Data Capture, Moderator */}
          {(formData.role === 'Student' || formData.role === 'DataCapture' || formData.role === 'Moderator') && (
            <div className="form-group">
              <label>Search Courses</label>
              <input
                type="text"
                value={courseSearch}
                onChange={handleCourseSearch}
                placeholder="Search for courses"
              />

              {courseSearch && (
                <ul className="add-user-course-list">
                  {availableCourses
                    .filter((course) =>
                      course.toLowerCase().includes(courseSearch.toLowerCase())
                    )
                    .map((course, index) => (
                      <li key={index} onClick={() => handleSelectCourse(course)}>
                        {course}
                      </li>
                    ))}
                </ul>
              )}

              <div className="add-user-selected-courses">
                {formData.selectedCourses.map((course, index) => (
                  <span key={index} className="add-user-selected-course">
                    {course}
                    <button
                      type="button"
                      className="remove-course-btn"
                      onClick={() => handleRemoveCourse(course)}
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="form-group">
            <label>Upload Image</label>
            <input
              type="file"
              name="picture"
              accept="image/*"
              onChange={handleFileChange}
              className="upload-image"
            />
          </div>

          <button type="submit" onClick={() => navigate("/ManageUser")} className="add-user-btn">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;

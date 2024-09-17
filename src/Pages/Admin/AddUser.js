import React, { useState } from 'react';
import './AddUser.css';

function AddUser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    role: 'Lecturer',
    picture: null,
  });

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

  return (
    <div className="add-user-page">
      <div className="sidebar">
        <img src="/logo.png" alt="Africa College of Technology" className="logo" />
        <nav>
          <ul>
            <li>Navigation</li>
            <li><a href="/">Home</a></li>
            <li><a href="/add-user">Add User</a></li>
            <li><a href="/manage-class">Manage Class</a></li>
            <li><a href="/manage-course">Manage Course</a></li>
          </ul>
        </nav>
        <div className="user-info">
          <p>Effort Zulu</p>
          <p>zulu@gmail.com</p>
        </div>
      </div>

      <div className="main-content">
        <h1>Add User</h1>
        <form className="add-user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>first name</label>
            <input type="text" name="firstName" placeholder="Enter Name" value={formData.firstName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>last name</label>
            <input type="text" name="lastName" placeholder="Enter Surname" value={formData.lastName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>username</label>
            <input type="email" name="username" placeholder="Enter email" value={formData.username} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>User Role</label>
            <select name="role" value={formData.role} onChange={handleChange} required>
              <option value="Lecturer">Lecturer</option>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
              <option value="DataCapture">Data Capture</option>
              <option value="Moderator">Moderator</option>
            </select>
          </div>

          <div className="form-group">
          <label>Upload Picture:</label>
          <input type="file" name="picture" accept="image/*" onChange={handleFileChange}/>
          </div>

          <button type="submit" className="add-user-btn">Add User</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;

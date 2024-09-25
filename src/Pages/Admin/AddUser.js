import React, { useState } from 'react';
import './AddUser.css';
import "../../Styles/global.css";
import AdminSidebar from '../../Components/Sidebar/AdminSidebar';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    role: '',
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

  const navigate = useNavigate();

  return (
    <div className="add-user-page">
      <AdminSidebar />

      <div className="main-content">
        <h1 className="form-title">Add User</h1>
        <form className="add-user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>first name</label>
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
            <label>last name</label>
            <input type="text" name="lastName" placeholder="Enter Surname" value={formData.lastName} onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>username</label>
            <input type="email" name="username" placeholder="Enter email" value={formData.username} onChange={handleChange} required/>
          </div>

          <div className="form-group">
          <label>Role</label>
              <select name="role" value={formData.role} onChange={handleChange} required>
                <option value="" disabled selected>
                  Select role
                </option>
                <option value="Lecturer">Lecturer</option>
                <option value="Student">Student</option>
                <option value="Admin">Admin</option>
                <option value="DataCapture">Data Capture</option>
                <option value="Moderator">Moderator</option>
              </select>
          </div>

          <div className="form-group">
            <label>Upload Image</label>
            <input type="file" name="picture" accept="image/*" onChange={handleFileChange} className="upload-image" />
          </div>

          <button type="submit" onClick={() => {navigate("/ManageUser")}} className="add-user-btn">Add User</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;

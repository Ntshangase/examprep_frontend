import React, { useState } from 'react';
import './EditCourse.css';

export default function EditCourse() {
  const [courseName, setCourseName] = useState('aws solutions architect');
  const [courseDescription, setCourseDescription] = useState(
    'The course intends to prepare individuals to function as Cloud Administrators who are responsible for overseeing cloud platforms and computing resources. The curriculum emphasizes ensuring seamless cloud service delivery and maintaining security protocols to safeguard against unauthorized access, threats, and other risks.'
  );
  const [domains, setDomains] = useState(['Domain A', 'Domain B', 'Domain C', 'Domain D']);

  const handleCourseNameChange = (e) => setCourseName(e.target.value);
  const handleCourseDescriptionChange = (e) => setCourseDescription(e.target.value);

  const handleUpdateCourse = () => {
    alert('Course updated!');
  };

  const handleRemoveCourse = () => {
    alert('Course removed!');
  };

  const handleImageUpload = () => {
    alert('Image upload triggered!');
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <img src="/assets/logo.png" alt="Africa College of Technology" className="logo" />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/AddUser">Add User</a></li>
            <li><a href="/ManageClass">Manage Class</a></li>
            <li><a href="/EditCourse">Manage Course</a></li>
          </ul>
        </nav>
      </aside>

      <main className="main">
        <h1>Edit Course</h1>
        <div className="content">
          <form className="form">
            <div className="input-group">
              <label>Course Name</label>
              <input
                type="text"
                value={courseName}
                onChange={handleCourseNameChange}
                disabled
              />
            </div>

            <div className="input-group">
              <label>Course Description</label>
              <textarea
                value={courseDescription}
                onChange={handleCourseDescriptionChange}
                rows="5"
              />
            </div>

            <div className="input-group">
              <label>Edit Domain Name</label>
              <div className="domain-list">
                {domains.map((domain, index) => (
                  <button key={index} className="domain-button">{domain}</button>
                ))}
              </div>
            </div>
          </form>

          <div className="image-upload">
            <img src="/assets/aws.png" alt="AWS" className="course-image" />
            <button onClick={handleImageUpload} className="upload-button">Upload Image</button>
          </div>
        </div>

        <div className="buttons">
          <button onClick={handleUpdateCourse} className="update-button">Update</button>
          <button onClick={handleRemoveCourse} className="remove-button">Remove</button>
        </div>
      </main>
    </div>
  );
}

import React, { useState } from 'react';
import './EditClass.css';

export default function EditClass() {
  const [className, setClassName] = useState('January Intake AWS: Solutions Architect');
  const [lecturer, setLecturer] = useState('Dr. S Ntshangase');
  const [startDate, setStartDate] = useState('2024-06-01');
  const [endDate, setEndDate] = useState('2024-09-01');
  const [studentsEnrolled, setStudentsEnrolled] = useState(25);

  const handleClassNameChange = (e) => setClassName(e.target.value);
  const handleLecturerChange = (e) => setLecturer(e.target.value);
  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);

  const handleUpdateClass = () => {
    alert('Class updated!');
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <img src="/assets/logo.png" alt="Africa College of Technology" className="logo" />
        <nav>
          <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/AddUser">Add User</a></li>
          <li><a href="/ManageUser">Manage User</a></li>
          <li><a href="/EditClass">Manage Class</a></li>
          <li><a href="/EditCourse">Manage Course</a></li>
          </ul>
        </nav>
      </aside>

      <main className="main">
        <h1>Edit Class</h1>
        <div className="content">
          <form className="form">
            <div className="input-group">
              <label>Class Name</label>
              <input type="text" value={className} onChange={handleClassNameChange} disabled />
            </div>

            <div className="input-group">
              <label>Assign Lecturer</label>
              <input type="text" value={lecturer} onChange={handleLecturerChange} />
            </div>

            <div className="input-group">
              <label>From</label>
              <input type="date" value={startDate} onChange={handleStartDateChange} />
            </div>

            <div className="input-group">
              <label>To</label>
              <input type="date" value={endDate} onChange={handleEndDateChange} />
            </div>

            <div className="buttons">
              <button type="button" className="cancel-button">Cancel</button>
              <button type="button" className="update-button" onClick={handleUpdateClass}>Update Class</button>
            </div>
          </form>

          <div className="students-enrolled">
            <span>{studentsEnrolled} Students Enrolled</span>
          </div>
        </div>
      </main>
    </div>
  );
}

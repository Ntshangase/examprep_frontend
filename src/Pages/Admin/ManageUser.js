import React from 'react';
import './ManageUser.css';

const ManageUser = () => {
  const users = [
    { name: 'John Smith', role: 'Lecture', img: 'path-to-img' },
    { name: 'John Ngubo', role: 'Lecturer', img: 'path-to-img' },
    { name: 'Mbali Zulu', role: 'Data Capture', img: 'path-to-img' },
    
  ];

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <div className="logo-container">
          <img src="path-to-logo" alt="Logo" />
        </div>
        <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/AddUser">Add User</a></li>
          <li><a href="/ManageUser">Manage User</a></li>
          <li><a href="/ManageClass">Manage Class</a></li>
          <li><a href="/ManageCourse">Manage Course</a></li>
        </ul>
      </nav>
      </aside>

      <main className="main-content">
        <h1>Manage Users</h1>
        <div className="user-grid">
          {users.map((user, index) => (
            <div key={index} className="user-card">
              <img src={user.img} alt={user.name} className="profile-pic" />
              <div className="user-details">
                <p>{user.name}</p>
                <p>{user.role}</p>
                <div className="actions">
                  <button className="view-btn">👁</button>
                  <button className="delete-btn">❌</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ManageUser;

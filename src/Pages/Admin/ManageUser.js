import React from 'react';
import './ManageUser.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusCircle,} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ManageUser = () => {
  const users = [
    { name: 'John Smith', role: 'Lecture', img: '/assets/images.jpeg' },
    { name: 'John Ngubo', role: 'Lecturer', img: '/assets/images.jpeg' },
    { name: 'Mbali Zulu', role: 'Data Capture', img: '/assets/images.jpeg' },
    { name: 'Sipho Mtshali', role: 'Moderator', img: '/assets/images.jpeg' },
    { name: 'Simphiwe Ntshangase', role: 'Lecturer', img: '/assets/images.jpeg' },
    { name: 'Mondli Zulu', role: 'Data Capture', img: '/assets/images.jpeg' },
    
  ];

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <div className="logo-container">
        <img src="/assets/logo.png" alt="Africa College of Technology" className="logo" />
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
        <div className='manage-user-heading'>
        <h1>Manage Users</h1>
        <div className="link-div">
					<Link to="/AddUser">
						<FontAwesomeIcon icon={faPlusCircle} className="icon-plus" />
					</Link>
          </div>
				</div>
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

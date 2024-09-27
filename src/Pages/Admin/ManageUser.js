import React from 'react';
import './ManageUser.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusCircle,} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AdminSidebar from '../../Components/Sidebar/AdminSidebar';

const ManageUser = () => {
  const users = [
    { name: 'John Smith', role: 'Lecture', img: '/assets/images.jpeg' },
    { name: 'John Ngubo', role: 'Lecturer', img: '/assets/images.jpeg' },
    { name: 'Mbali Zulu', role: 'Data Capture', img: '/assets/images.jpeg' },
    { name: 'Sipho Mtshali', role: 'Moderator', img: '/assets/images.jpeg' },
    { name: 'Simmi Zulu', role: 'Lecturer', img: '/assets/images.jpeg' },
    { name: 'Mondli Zulu', role: 'Data Capture', img: '/assets/images.jpeg' },

  ];

  return (
    <div className="admin-container">
      <AdminSidebar />

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

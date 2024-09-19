import React from 'react';
import "../../Styles/global.css";

export default function AdminSideBar() {
  return (
    <div className="sidebar">
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
    </div>
  );
}

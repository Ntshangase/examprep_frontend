import React from 'react'
import './AdminSideBar.css'
import "../../Styles/global.css";

export default function AdminSideBar() {
  return (
    <div>
         <div className="sidebar">
        <img src="/assets/logo.png" alt="Africa College of Technology" className="logo" />
        <nav>
          <ul>
            <li>Navigation</li>
            <li><a href="/">Home</a></li>
            <li><a href="/add-user">Add User</a></li>
            <li><a href="/manage-class">Manage Class</a></li>
            <li><a href="/manage-course">Manage Course</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

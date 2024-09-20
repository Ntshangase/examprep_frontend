import React from 'react';
import './EditClass.css'
import AdminSidebar from '../../Components/Sidebar/AdminSidebar';

export default function EditClass() {
  return (
    <div className='edit-course-container'>
      <AdminSidebar />
      <div className='edit-course-content'>
        <h2>EditClass</h2>
      </div>
    </div>
  )
}

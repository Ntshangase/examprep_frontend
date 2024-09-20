import React from 'react';
import './CreateClass.css'
import AdminSidebar from '../../Components/Sidebar/AdminSidebar';

export default function CreateClass() {
  return (
    <div className='create-class-container'>
      <AdminSidebar />
      <div className='create-class-content'>
        <h2>Create Class</h2>
      </div>
    </div>
  )
}

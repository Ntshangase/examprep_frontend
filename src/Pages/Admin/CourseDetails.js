import React from 'react';
import './CourseDetails.css'
import AdminSidebar from '../../Components/Sidebar/AdminSidebar';

export default function CourseDetails() {
  return (
    <div className='course-details-container'>
      <AdminSidebar />
      <div>
        <h2>Course Details</h2>
        <div>
          <></>
          <p>title</p>
        </div>
        <h4>Active Classes</h4>
        <div className='classese'></div>
      </div>
    </div>
  )
}

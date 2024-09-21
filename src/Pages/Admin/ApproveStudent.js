import React from 'react';
import './ApproveStudent.css';
import AdminSidebar from '../../Components/Sidebar/AdminSidebar';

function ApproveStudent() {
  return (
    <div className='approve-student-container'>
        <AdminSidebar />
        <div className='approve-student-content'>
            <h2>Approve Students</h2>
            <div className='approve-student-content-dody'>
                <p>Display list of students here</p>
                <p>Display list of students here</p>
            </div>
        </div>
    </div>
  )
}

export default ApproveStudent
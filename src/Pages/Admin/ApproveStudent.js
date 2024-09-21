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
                <div>
                    <p>Khethokwakhe Mhlaba</p>
                    <p>hlulekaUzamile@gmail.com</p>
                </div>
                <div className='button-approve-decline'>
                    <button className='button-approve'>approve</button>
                    <button className='button-decline'>decline</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ApproveStudent
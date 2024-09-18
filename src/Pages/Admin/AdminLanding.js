import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import AdminSideBar from './AdminSideBar';

function AdminLanding() {
  return (
    <div>
      <Navbar />
      <AdminSideBar />
      <h1>Welcome to Admin Dashboard</h1>
    </div>
  )
}

export default AdminLanding;

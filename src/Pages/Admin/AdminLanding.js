import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import AdminSidebar from '../../Components/Sidebar/AdminSidebar';

export default function AdminLanding() {
  return (
    <div>
      <Navbar />
      <AdminSidebar />
      <h1>Welcome to Admin Dashboard</h1>
    </div>
  );
}

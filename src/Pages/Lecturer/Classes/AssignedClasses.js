import React from "react"; 
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";

const LecturerDashboard = () => {
    return (
        <div className="lecturer-dashboard">
        <Navbar />
        <div className="dashboard-content">
          <Sidebar />
          <div className="content-area">
            <h1>Classes</h1>
           
          </div>
        </div>
      </div>
    );
};

export default LecturerDashboard;
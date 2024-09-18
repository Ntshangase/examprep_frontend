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
            
           
          </div>
        </div>
      </div>
    );
};

export default LecturerDashboard;
import React from "react";
import AdminSidebar from "./AdminSidebar";
import Navbar from "../admin/navbar/index";

const Analytics = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <h1>AllPatients</h1>
      </div>
    </div>
  );
};

export default Analytics;



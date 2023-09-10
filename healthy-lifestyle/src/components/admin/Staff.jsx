import React from "react";
import AdminSidebar from "./AdminSidebar";
import Navbar from "../admin/navbar/index";
const Staff = () => {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <h1>Staff</h1>
    </div>
  </div>
  );
};

export default Staff;

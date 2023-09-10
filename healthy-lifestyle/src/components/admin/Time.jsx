import React from "react";
import AdminSidebar from "./AdminSidebar";
import Navbar from "../admin/navbar/index";
const Time = () => {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <h1>Time</h1>
    </div>
  </div>
  );
};

export default Time;

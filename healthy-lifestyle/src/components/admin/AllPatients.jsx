import React from "react";
import AdminSidebar from "./AdminSidebar";
import Navbar from "../admin/navbar/index";

const AllPatients = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div style={{ display: "flex" , backgroundColor : "#F7FAFC"}}>
        <AdminSidebar />
        <h1>AllPatients</h1>
      </div>
    </div>
  );
};

export default AllPatients;

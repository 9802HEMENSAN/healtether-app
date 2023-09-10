import React from 'react'
import AdminSidebar from './AdminSidebar'
import Navbar from "../admin/navbar/index";
const GoogleProfile = () => {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <h1>Google Profile</h1>
    </div>
  </div>
  )
}

export default GoogleProfile
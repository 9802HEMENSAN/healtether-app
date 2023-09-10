import React from 'react'
import AdminSidebar from './AdminSidebar'
import Navbar from "../admin/navbar/index";
const CreateSlot = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <h1>Create slot</h1>
      </div>
    </div>
  )
}

export default CreateSlot
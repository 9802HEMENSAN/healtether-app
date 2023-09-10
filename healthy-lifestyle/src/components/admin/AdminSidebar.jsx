import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div style={{ 
      display : "flex", 
      gap : "50px", 
      width : "16%",
      height :  "89.7vh",
      flexDirection : "column", 
      backgroundColor : "black",
      color : "white"
    }}> 
      
       <Link bg="red" to="/admin/time">Time</Link>
       <Link to="/admin/allPatients">patients</Link>
       <Link to="/admin/chat">chat</Link>
       <Link to="/admin/dashboard">dashboard</Link>
       <Link to="/admin/staff">staff</Link>
       <Link to="/admin/CreateSlot">CreateSlot</Link>
       <Link to="/admin/marketing">marketing</Link>
       <Link to="/admin/analytics">analytics</Link>
       <Link to="/admin/google-profile">google-profile</Link>
    </div>
  )
}

export default AdminSidebar

{/* <Route path="time" element={<Time />}></Route>
<Route path="patients" element={<AllPatients />}></Route>
<Route path="chat" element={<Whatsapp />}></Route> */}
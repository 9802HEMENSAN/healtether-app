import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import AdminPanel from "../Pages/AdminPanel";
import { RiDashboardLine } from "react-icons/ri";
import { BiBasket } from "react-icons/bi";
import {
  HiOutlineCalendar,
  HiOutlineChat,
  HiOutlineFolder,
} from "react-icons/hi";
import AllPatients from "../components/admin/AllPatients/AllPatients";
import Time from "../components/admin/Time";
 
 
import Staff from "../components/admin/Staff/Staff";
import CreateSlot from "../components/admin/CreateSlot";
import Marketting from "../components/admin/Marketting";
import GoogleProfile from "../components/admin/GoogleProfile";
import Analytics from "../components/admin/Analytics";
import Revenue from "../components/admin/Revenue";
import Dashboard from "../components/admin/DashBoard/Dashboard";
import Whatsapp from "../components/admin/WhatsApp/Whatsapp";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/admin">
          <Route path="dashboard" element={<Dashboard/>}></Route>
          <Route path="chat" element={<Whatsapp/>}></Route>
          <Route path="staff" element={<Staff/>}></Route>
          <Route path="time" element={<Time/>}></Route>
          <Route path="CreateSlot" element={<CreateSlot/>}></Route>
          <Route path="allPatients" element={<AllPatients/>}></Route>
          <Route path="marketing" element={<Marketting/>}></Route>
          <Route path="analytics" element={<Analytics/>}></Route>
          <Route path="revenue" element={<Revenue/>}></Route>
          <Route
            path="google-profile"
            element={<GoogleProfile/>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;

 

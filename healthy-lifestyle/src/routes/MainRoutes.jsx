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
import AllPatients from "../components/admin/AllPatients";
import Time from "../components/admin/Time";
import Whatsapp from "../components/admin/Whatsapp";
import Dashboard from "../components/admin/Dashboard";
import Staff from "../components/admin/Staff";
import CreateSlot from "../components/admin/CreateSlot";
import Marketting from "../components/admin/Marketting";
import GoogleProfile from "../components/admin/GoogleProfile";
import Analytics from "../components/admin/Analytics";

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

export const routes = [
  { name: "Dashboard", href: "/", icon: RiDashboardLine },
  { name: "WhatsApp", href: "/chat", icon: HiOutlineChat, count: 3 },
  { name: "Timings", href: "/CreateSlot", icon: HiOutlineCalendar },
  { name: "All Patients", href: "/allPatients", icon: HiOutlineFolder },
  { name: "Staff", href: "/staff", icon: BiBasket },
  { name: "Marketting", href: "/marketing", icon: BiBasket },
  { name: "Analytics", href: "/analytics", icon: BiBasket },
  { name: "Customise Form", href: "/customise-form", icon: BiBasket },
  { name: "Google Profile", href: "/google-profile", icon: BiBasket },
];

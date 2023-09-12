import React from "react";
import { Link } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaClipboard } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { AiOutlineLineChart} from "react-icons/ai";
import { SiGoogleforms} from "react-icons/si";
import { FcSearch } from "react-icons/fc";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import "./AdminSidebar.css"
const AdminSidebar = () => {
  return (
    <Box
      style={{
        display: "flex",
        padding: "20px",
        gap : "2rem",
        maxHeight: "100vh",
        width: "17%",
        height: "89.7vh",
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "flex-start",
        paddingLeft: "20px",
        fontFamily : "Open Sans",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        position : "sticky",
        top : "70px",
        fontFamily : "Open Sans, sans-serif",
        fontWeight : "500",
        color : "rgba(0, 0, 0, 0.7)"
      }}
    
    >
      <Link to="/admin/dashboard">
        <Flex className="sidebar-link">
          <MdSpaceDashboard fontSize={"x-large"} color="blue" />
          <Text fontSize={"large"}>Dashboard</Text>
        </Flex>
      </Link>
      <Link to="/admin/chat">
        <Flex className="sidebar-link">
          <RiWhatsappFill fontSize={"x-large"} color="green" />
          <Text fontSize={"large"}>WhatsApp</Text>
        </Flex>
      </Link>
      {/* <Link to="/admin/time"> */}
      <Link bg="red" to="/admin/time">
        <Flex className="sidebar-link">
          <BiTimeFive fontSize={"x-large"} color="orange" />

          <Text fontSize={"large"}>Timings</Text>
        </Flex>
      </Link>
      {/*  */}
      <Link to="/admin/allPatients">
        <Flex className="sidebar-link">
          <FaClipboard fontSize={"x-large"} color="red" />

          <Text fontSize={"large"}>All Patients</Text>
        </Flex>
      </Link>
 
      <Link to="/admin/staff">
        <Flex className="sidebar-link">
         < FaUserNurse fontSize={"x-large"} color="purple" />
          <Text fontSize={"large"}>Staff</Text>
        </Flex>
        </Link>
      <Link to="/admin/marketing"> 
      <Flex className="sidebar-link">
         < HiSpeakerphone fontSize={"x-large"} color="blue" />
          <Text fontSize={"large"}>Marketing</Text>
        </Flex>
      </Link>
      <Link to="/admin/analytics"> 
      <Flex className="sidebar-link">
         <AiOutlineLineChart fontSize={"x-large"} color="green" />
          <Text fontSize={"large"}>Analytics</Text>
        </Flex>
      </Link>
      <Link to="/admin/revenue"> 
      <Flex className="sidebar-link">
         <BsCreditCard2FrontFill fontSize={"x-large"} color="teal" />
          <Text fontSize={"large"}>Revenue</Text>
        </Flex>
      </Link>
      <Link to="/admin/customize-form"> 
      <Flex className="sidebar-link">
         <SiGoogleforms fontSize={"x-large"} color="purple" />
          <Text fontSize={"large"}>Customise Form</Text>
        </Flex>
      </Link>
      <Link to="/admin/google-profile"> 
      <Flex className="sidebar-link">
         <FcSearch fontSize={"large"} color="pink" />
          <Text fontSize={"large"}>Google-profile</Text>
        </Flex>
      </Link>
    </Box>
  );
};

export default AdminSidebar;

 
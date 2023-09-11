import React from "react";
import { Link } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { Flex, Text } from "@chakra-ui/react";
import { FaClipboard } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { AiOutlineLineChart} from "react-icons/ai";
import { SiGoogleforms} from "react-icons/si";
import { FcSearch } from "react-icons/fc";
import { BsCreditCard2FrontFill } from "react-icons/bs";
const AdminSidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        gap : "2rem",
        width: "14%",
        height: "89.7vh",
        flexDirection: "column",
        backgroundColor: "#FFEDED",
        color: "black",
        alignItems: "flex-start",
        paddingLeft: "20px",
      }}
    >
      <Link to="/admin/dashboard">
        <Flex justify={"center"} alignItems={"center"} gap={3}>
          <MdSpaceDashboard fontSize={"x-large"} color="blue" />
          <Text fontSize={"large"}>Dashboard</Text>
        </Flex>
      </Link>
      {/* <Link to="/admin/time"> */}
      <Link bg="red" to="/admin/time">
        <Flex justify={"center"} alignItems={"center"} gap={3}>
          <BiTimeFive fontSize={"x-large"} color="orange" />

          <Text fontSize={"large"}>Time</Text>
        </Flex>
      </Link>
      {/*  */}
      <Link to="/admin/allPatients">
        <Flex justify={"center"} alignItems={"center"} gap={3}>
          <FaClipboard fontSize={"x-large"} color="red" />

          <Text fontSize={"large"}>Patients</Text>
        </Flex>
      </Link>
      <Link to="/admin/chat">
        <Flex justify={"center"} alignItems={"center"} gap={3}>
          <RiWhatsappFill fontSize={"x-large"} color="green" />
          <Text fontSize={"large"}>WhatsApp</Text>
        </Flex>
      </Link>
      <Link to="/admin/staff">
        <Flex justify={"center"} alignItems={"center"} gap={3}>
         < FaUserNurse fontSize={"x-large"} color="purple" />
          <Text fontSize={"large"}>Staff</Text>
        </Flex>
        </Link>
      <Link to="/admin/marketing"> 
      <Flex justify={"center"} alignItems={"center"} gap={3}>
         < HiSpeakerphone fontSize={"x-large"} color="blue" />
          <Text fontSize={"large"}>Marketing</Text>
        </Flex>
      </Link>
      <Link to="/admin/analytics"> 
      <Flex justify={"center"} alignItems={"center"} gap={3}>
         <AiOutlineLineChart fontSize={"x-large"} color="green" />
          <Text fontSize={"large"}>Analytics</Text>
        </Flex>
      </Link>
      <Link to="/admin/revenue"> 
      <Flex justify={"center"} alignItems={"center"} gap={3}>
         <BsCreditCard2FrontFill fontSize={"x-large"} color="teal" />
          <Text fontSize={"large"}>Revenue</Text>
        </Flex>
      </Link>
      <Link to="/admin/google-profile"> 
      <Flex justify={"center"} alignItems={"center"} gap={3}>
         <SiGoogleforms fontSize={"x-large"} color="purple" />
          <Text fontSize={"large"}>Customise Form</Text>
        </Flex>
      </Link>
      <Link to="/admin/CreateSlot"> 
      <Flex justify={"center"} alignItems={"center"} gap={3}>
         <FcSearch fontSize={"x-large"} color="pink" />
          <Text fontSize={"large"}>Google-profile</Text>
        </Flex>
      </Link>
    </div>
  );
};

export default AdminSidebar;

{
  /* <Route path="time" element={<Time />}></Route>
<Route path="patients" element={<AllPatients />}></Route>
<Route path="chat" element={<Whatsapp />}></Route> */
}

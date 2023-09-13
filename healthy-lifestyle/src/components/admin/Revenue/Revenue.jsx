import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Navbar from "../navbar/index";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";

const Revenue = () => {
  return (
    <div>
      <div   style={{ position : "sticky", top : "0" }}>
        <Navbar />
      </div>
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <Box fontFamily={"Open Sans"} p={5} width={"100%"} m={5} justifyContent={"space-around"} position={"relative"} ml={["1%","18%"]}  >
          {/* Revenue Box */}
          <Flex flexDirection={["column","row"]} gap={10} h={"auto"}  boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" p={10}>
            <Flex flexDirection={"column"} align={"start"}>
              <Heading fontWeight={"600"} fontSize={["2xl", "3xl", "3xl"]} >
                Online Revenue : <span color="blue">₹0</span>
              </Heading>
              <Text color="#525f7f" fontSize={["small", "medium", "large"]}>
                Revenue collected from online appointments and online  invoices
              </Text>
            </Flex>
            <Flex flexDirection={"column"} align={"start"}>
              <Heading fontWeight={"600"} fontSize={["2xl", "3xl", "3xl"]} >
              Expected Revenue: <span color="blue">₹0</span>
              </Heading>
              <Text color="#525f7f" fontSize={["small", "medium", "large"]}>
              Revenue you can retreive from app
              </Text>
            </Flex>
            <Flex flexDirection={"column"} align={"start"}>
              <Heading fontWeight={"600"} fontSize={["xl", "2xl", "3xl"]} >
              Total Appointments: <span color="blue">₹0</span>
              </Heading>
              <Text color="#525f7f" fontSize={["small", "medium", "large"]}>
              Number of total appointment till now
              </Text>
            </Flex>
          </Flex>

          {/* Past Transactions */}
          <Box boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" p={10} >
            <Flex align="start" direction={"column"}>
            <Heading fontWeight={"600"} fontSize={["md", "md", "2xl"]} >
              Past Transactions
            </Heading>
            <Text >PAST ONLINE TRANSACTIONS</Text>
            </Flex>
             
            <Divider py={5}/>
            <Flex justifyContent={"center"} gap={5} fontWeight={"600"} fontSize={["sm", "md", "xl"]}  >
              No Data Found
            </Flex>
          </Box>

        </Box>
      </div>
    </div>
  );
};

export default Revenue;

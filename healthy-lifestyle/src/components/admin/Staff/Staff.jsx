import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Navbar from "../navbar/index";
import { Box, Button, Divider, Flex, Heading, Select } from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi";
 
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { RiWhatsappFill } from "react-icons/ri";

const Staff = () => {
  return (
    <div   style={{ position : "sticky", top : "0" }}>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex", backgroundColor: "#F7FAFC" }}>
        <AdminSidebar />

        <Box fontFamily={"Open Sans"}   width={"auto"}   position={"relative"} ml={["0%","18%"]} >
          {/* Top side */}
          <Flex 
            m={["1%","2%","5%"]}
            align={["left"]}
            flexDirection={["column","column","row"]}
            justifyContent={"space-evenly"}
            gap={[2,4,6]}
          >
            <Heading fontSize={["2xl", "3xl", "3xl"]}>Clinic Staff:</Heading>

          
            <Button
              colorScheme="facebook"
              leftIcon={<HiOutlinePlus fontSize={["large","x-large"]} />}
              bg={"#5E72E4"}
              width={"auto"}
            >
              Add Staff
            </Button>
          </Flex>
          {/* Table Box */}
          <Divider my={[5,10,15]}/>
          <TableContainer  size={["sm", "md", "lg"]} >
            <Table size={["sm", "md", "lg"]}>
              <Thead>
                <Tr>
                  <Th>NAME</Th>
                  <Th>PHONE</Th>
                  <Th>EMAIL</Th>
                  <Th>EDIT PROFILE</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Arjun</Td>
                  <Td>11111111239 </Td>
                  <Td>example@gmail.com</Td>
                  <Td> 
                    <Button>Edit</Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </div>
  );
};

export default Staff;

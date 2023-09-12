import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Navbar from "../navbar/index";
import { Box, Button, Flex, Heading, Select } from "@chakra-ui/react";
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
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex", backgroundColor: "#F7FAFC" }}>
        <AdminSidebar />

        <Box fontFamily={"Open Sans"} p={5} width={"100%"}   position={"relative"} ml={["1%","18%"]} >
          {/* Top side */}
          <Flex 
          m={[5, 10, 15]}
            align="left"
            flexDirection={"row"}
            justifyContent={"space-between"}
            gap={6}
          >
            <Heading fontSize={[12, 23, 35]}>Clinic Staff:</Heading>

         
            <Button
              colorScheme="facebook"
              leftIcon={<HiOutlinePlus fontSize={"x-large"} />}
              bg={"#5E72E4"}
            >
              Add Staff
            </Button>
          </Flex>
          {/* Table Box */}
          <TableContainer m={[5, 10, 15]}>
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

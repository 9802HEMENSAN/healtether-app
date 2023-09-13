import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Navbar from "../navbar/index";
import { Box, Button, Flex, Heading, Select } from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { FaFileImport } from "react-icons/fa";
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

const AllPatients = () => {
  return (
    <div >
      <div   style={{ position : "sticky", top : "0" }} >
        <Navbar />
      </div>
      <div style={{ display: "flex", backgroundColor: "#F7FAFC" }}>
        <AdminSidebar />

        <Box fontFamily={"Open Sans"} p={15} width={"70%"} position={"relative"} ml={"20%"} >
          {/* Top side */}
          <Flex 
           m={[1, 10, 15]}
            align="left"
            flexDirection={["column","column","column","row"]}
            justifyContent={"space-between"}
            alignItems={["center","center","flex-start"]}
            flexWrap={"wrap"}
            gap={6}
          >
            <Heading fontSize={[20, 23, 25]}>All Patients</Heading>

            <Select w={["10rem","25rem","30rem"]} size={["md", "md", "lg"]}>
              <option value="Dr.Arjun Krishna">Dr.Arjun Krishna</option>
              <option value="Dr.Arjun Krishna">Dr.Arjun Krishna</option>
              <option value="Dr. Arjun Krishna">Dr. Arjun Krishna</option>
            </Select>
            <Button
              colorScheme="facebook"
              leftIcon={<HiOutlinePlus fontSize={"x-large"} />}
              bg={"#5E72E4"}
            >
              Add new Patient
            </Button>
            <Button
              colorScheme="facebook"
              leftIcon={<FaFileImport fontSize={"x-large"} />}
              bg={"#5E72E4"}
            >
              Import Patients
            </Button>
            <Button
              colorScheme="facebook"
              leftIcon={<BiTimeFive color="blue" />}
              bg={"#5E72E4"}
            >
              Add Past Appointment
            </Button>
          </Flex>
          {/* Table Box */}
          <TableContainer m={[5, 10, 15]}>
            <Table size={["sm", "md", "lg"]}>
              <Thead>
                <Tr>
                  <Th>NAME</Th>
                  <Th>CODE</Th>
                  <Th>CONTACT NUMBER</Th>
                  <Th>ACTION</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Test Patient - 1 29 Y, male</Td>
                  <Td>111111</Td>
                  <Td>1111111111</Td>
                  <Td> 
                  <RiWhatsappFill fontSize={"x-large"} color="green" />
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

export default AllPatients;

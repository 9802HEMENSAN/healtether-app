import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Navbar from "../navbar/index";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Heading,
  InputGroup,
  InputLeftAddon,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RiWhatsappFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { Input } from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <Box minHeight="100vh" fontFamily={"Open Sans, sans-serif;"} position={"relative"} m={["10%","0%"]}>
      <div   style={{ position : "sticky", top : "0" }} >
        <Navbar />
      </div>
      <div style={{ display: "flex" }}>
   
        <AdminSidebar />
 
        {/* <h1>Dashboard</h1> */}
        <Box fontFamily={"Open Sans"} p={5} width={"100%"}  m={5} position={"relative"} ml={["1%","20%"]} >
          <Flex direction={["column","row"]}  gap={5} justifyContent={"space-between"}>
            <Flex flexDirection={"column"} align={"start"}>
              <Text fontWeight={"600"} fontSize={["medium", "medium", "2xl"]}>
                👋 Hi, Arjun Krishna
              </Text>
              <Text fontSize={["medium", "medium", "large"]} textAlign={"start"}>
                Mon, Sep 11
              </Text>
              <Text
                fontSize={["small", "medium", "large"]}
              >{`${0} Upcoming | ${0} Completed | ${0} Cancelled`}</Text>
              <Flex justifyContent={"center"} align={"center"}>
                <RiWhatsappFill color="green" />
                <Text fontSize={["medium", "medium", "large"]}>
                  WhatsApp link sent to 0 patients
                </Text>
              </Flex>
            </Flex>
            <Box>
              <Flex gap={[2, 4, 5]} fontFamily={"sans-serif"} flexDirection={["column", "row", "row"]} alignItems={"center"}>
                <Button
                  colorScheme="facebook"
                  leftIcon={<HiOutlinePlus fontSize={"x-large"} />}
                  bg={"#5E72E4"}
                >
                  Add Appoinment
                </Button>
                <ButtonGroup variant="outline" spacing="6">
                  <Button
                    colorScheme="green"
                    leftIcon={<RiWhatsappFill color="green" />}
                  >
                    Send booking Link
                  </Button>
                </ButtonGroup>
              </Flex>
              <Text textAlign={["center", "left"]} fontSize={["small", "medium", "large"]}>
                Press <i>"N"</i> to add appointment
              </Text>
            </Box>
          </Flex>

          {/* Filter Controls */}
          <Divider orientation='horizontal' my={10}/>
   
            <Flex gap={5} mt={10}  flexDirection={["column","row"]}>
              {/* Search Bar */}
              <InputGroup size="lg" >
                <InputLeftAddon children={<FiSearch color="blue" />} />

                <Input
                  type="search"
                  fontSize={["small", "medium", "large"]}
                  placeholder='search Patients '
                />
              </InputGroup>

              <Select size="lg"  >
                <option value="Day">Day</option>
                <option value="Week">Week</option>
                <option value="Month">Month</option>
              </Select>

              <Input 
                placeholder="Select Date and Time"
                size="lg"
                type="datetime-local"
              />

              <Select size="lg"  >
                <option value="All_Clinics">AllClinics</option>
                <option value="Dr.Arjun">Dr.Arjun Krishna's Clinic</option>
                <option value="Month">Month</option>
              </Select>

              <Select size="lg"  >
                <option value="All">All</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </Select>
            </Flex>
        
          {/* Table Container */}
          <Divider orientation='horizontal' my={6}/>
          <Box >
            <Flex alignItems={"start"} flexDirection={"column"} gap={1} mb={1}>
            <Heading fontSize={["2xl", "3xl", "3xl"]}>Cancelled Appointments</Heading>
            <Text fontSize={["small", "medium", "large"]}>Reach out to to them on  WhatsApp for more updates.</Text>

            </Flex>
             
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>PATIENT DETAILS</Th>
                    <Th>CONTACT</Th>
                    <Th>LOCATION</Th>
                    <Th>SLOT</Th>
                    <Th>PAYMENT STATUS</Th>
                    <Th>TYPE</Th>
                    <Th>ACTION</Th>
                  </Tr>
                </Thead>
                <Tbody></Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Dashboard;

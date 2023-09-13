import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Navbar from "../navbar/index";
import { Box, Button, Flex, Heading, Select, Text } from "@chakra-ui/react";
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

const Analytics = () => {
  return (
    <div>
      <div   style={{ position : "sticky", top : "0" }}>
        <Navbar />
      </div>
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <Box
          fontFamily={"Open Sans, sans-serif;"}
          p={5}
          width={"100%"}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
          position={"relative"} 
          ml={["1%","18%"]} 
          m={5}
        >
          {/*  */}

          <Flex justifyContent={"space-evenly"} gap={"0.5px"} flexDirection={["column", "row"]} flexWrap={["wrap", "wrap","nowrap"]}>
            <Flex direction={"column"}   align="start" lineHeight={1.5}>
              <Heading fontSize={["0.6rem","0.8rem","0.8rem"]}>Revenue</Heading>
              <Text fontSize={["0.6rem","0.8rem","0.8rem"]} fontWeight={"600"} color="#8898aa">
                01 SEP 2023 - 12 SEP 2023
              </Text>
              <Flex gap={"1px"}>
                <Text
                  fontSize={["0.4rem","0.4rem","0.8rem"]}
                  color="#5e72e4
"    
                >
                  INCREASE YOUR REVENUE THROUGH
                </Text>
                <Text
                 fontSize={["0.4rem","0.4rem","0.8rem"]}
                  color="#ff4500
"
                >
                  MANAGE PAYMENT
                </Text>
              </Flex>
            </Flex>
            <Flex  gap={5} my={5} width={"70%"} flexDirection={["column", "row"]}>
              <Select size={["sm", "md", "md" ]} mx={3}>
                <option value="Dr.Arjun Krishna">Dr.Arjun Krishna</option>
                <option value="Dr.Arjun Krishna">Dr.Arjun Krishna</option>
                <option value="Dr.Arjun Krishna">Dr.Arjun Krishna</option>
              </Select>
              <Button  size="md" p={10} fontSize={["sm", "md", "md"]}>
                THIS MONTH
              </Button>
              <Button  size="md" p={10} fontSize={["sm", "md", "md"]}>
                 WEEK
              </Button>
              <Button  size="md" p={10} fontSize={["sm", "md", "md"]}>
                TODAY
              </Button>
              <Button  size="md" p={10} fontSize={["sm", "md", "md"]}>
                LAST MONTH
              </Button>
            </Flex>
          </Flex>
          {/* Revenue Box */}
          <Flex
            flexDirection={["column", "row"]}
            justifyContent={"space-around"}
            gap={10}
            h={"auto"}
            p={10}
          >
            <Flex flexDirection={"column"} align={"start"}>
              <Heading
                fontWeight={"600"}
                color="green.500"
                fontSize={["2xl", "3xl", "3xl"]}
              >
                Rs. 0
              </Heading>
              <Text color="#525f7f" fontSize={["small", "medium", "large"]}>
                Total Revenue
              </Text>
            </Flex>
            <Flex flexDirection={"column"} align={"start"}>
              <Heading
                fontWeight={"600"}
                color="blue.500"
                fontSize={["2xl", "3xl", "3xl"]}
              >
                Rs. 0
              </Heading>
              <Text color="#525f7f" fontSize={["small", "medium", "large"]}>
                Consultation Revenue
              </Text>
            </Flex>
            <Flex flexDirection={"column"} align={"start"}>
              <Heading
                fontWeight={"600"}
                color="orange.500"
                fontSize={["xl", "2xl", "3xl"]}
              >
                Rs. 0
              </Heading>
              <Text color="#525f7f" fontSize={["small", "medium", "large"]}>
                Procedure Revenue
              </Text>
            </Flex>
          </Flex>

          {/* Table Box */}
             <Heading  textAlign="start"  fontSize={["1rem", "1.2rem", "1.3rem"]}>Total Amount: Rs. 0</Heading>
          <TableContainer m={[5, 10, 15]}>
            <Table size={["sm", "md", "lg"]}>
              <Thead>
                <Tr>
                  <Th>DATE</Th>
                  <Th>AMOUNT</Th>
                  <Th>QUANTITY</Th>
                  <Th>PATIENT</Th>
                  <Th>PAYMENT MODE</Th>
                  <Th>BILL FOR</Th>
                </Tr>
              </Thead>
              <Tbody  >
                <Tr>
                  {/* <Td></Td> */}
              No entries for selected dates!
                  
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </div>
  );
};

export default Analytics;

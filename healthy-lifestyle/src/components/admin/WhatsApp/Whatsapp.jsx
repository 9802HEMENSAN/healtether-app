import React from "react";
import AdminSidebar from "../AdminSidebar";
import Navbar from "../navbar/index";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { BsFillPersonPlusFill } from "react-icons/bs";
const Whatsapp = () => {
  return (
    <Box>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <Flex direction={["column", "row"]}>
          {/* Left Box */}
          <Box flex={1} width="30rem" my={10} >
            <Flex alignItems={"center"} justifyContent={"center"} gap={1}>
              <Image
                src={
                  "https://app.paperplane.health/static/media/icon.8ff77fac8f638fa9c2a0.jpg"
                }
                width={"3rem"}
                borderRadius={"50%"}
              />
              <Box alignContent={"start"}>
                <Heading fontSize={"2xl"} color="#5E72E4">
                  Dr. Arjun Krishna 's Chat
                </Heading>
                <Text fontSize={"sm"}>
                  All messages will be sent from your clinic
                </Text>
              </Box>
            </Flex>
            {/* Search Bar */}
            <Flex justifyContent={"center"} gap={2} my={4}>
              <InputGroup w={300} size="lg">
                <InputLeftAddon children={<FiSearch color="blue" />} />

                <Input
                  type="search"
                  placeholder="Search by Name or Phone no."
                />
              </InputGroup>

              <BsFillPersonPlusFill fontSize={"40px"} color="#5E72E4" />
            </Flex>
            <Divider />
            <Flex flexWrap={"wrap"} gap={1} justifyContent={"center"}>
              <Button colorScheme="teal" borderRadius={30} variant="outline">
                Last 24 hours
              </Button>
              <Button colorScheme="teal" borderRadius={30} variant="outline">
                Last Week
              </Button>
              <Button colorScheme="teal" borderRadius={30} variant="outline">
                Last Month
              </Button>
              <Button colorScheme="teal" borderRadius={30} variant="outline">
                Last 60 Days
              </Button>
            </Flex>
            {/* Profile Support */}
            <Box my={50}>
              <Flex
                gap={2}
                justifyContent={"start"}
                m={2}
                
                bg={"#F3F3F3"}
              >
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                  fontSize={"2xl"}
                  bg={"blue"}
                  p={2}
                  height={"50px"}
                  width={"50px"}
                  color="white"
                  borderRadius={"50%"}
                >
                  P
                </Flex>
                <Flex direction={"column"}  align={"start"}>
                  <Flex gap={2}   justifyContent={"space-between"} w={300}>
                    <Text fontWeight={"bold"}>Paperplane Support</Text>
                    <Text >{new Date().toLocaleDateString()}</Text>
                  </Flex>
                  <Text>Hey Dr. Arjun Krishna...</Text>
                </Flex>
              </Flex>
            </Box>
          </Box>

          {/* Right Box */}
          <Box flex={2} bg={"gray"} width="50rem">
            <Image
              w={"100%"}
              height={"100%"}
              alt="whatsapp"
              objectFit={"contain"}
              src="https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"
            />
          </Box>
        </Flex>
      </div>
    </Box>
  );
};

export default Whatsapp;

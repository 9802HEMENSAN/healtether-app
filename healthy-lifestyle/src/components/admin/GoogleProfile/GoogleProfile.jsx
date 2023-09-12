import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Navbar from "../navbar/index";
import { Box, Button, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
const GoogleProfile = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex" }}  >
        <AdminSidebar />
        <Flex   
          w="100%" 
          direction={"column"}
          align="start"
          fontFamily={"Open Sans, sans-serif;"}
        >
          <Heading fontWeight={700} mx={5} mt={10} fontSize={["20px"]}>
            Business Profile
          </Heading>
          <Box
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            p={10}
            m={5}
 
            w="90%"
          >
            <Heading textAlign={"left"} color="blue.500" fontWeight={700} fontSize={["20px"]}>
              No Location
            </Heading>

            <Flex direction={"column"} justifyContent={"center"} align={"center"}>
              <Image w={"35%"} h={"300px"} src="https://i.pinimg.com/originals/7c/89/90/7c89904c65970d2581ce4b5a392f7712.gif" />
              <Center p={8}>
                <Button
                  w={"full"}
                  maxW={"md"}
                  variant={"outline"}
                  leftIcon={<FcGoogle />}
                >
                  <Center>
                    <Text color="blue.500">Link Your Google Business Account</Text>
                  </Center>
                </Button>
              </Center>
            </Flex>
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default GoogleProfile;

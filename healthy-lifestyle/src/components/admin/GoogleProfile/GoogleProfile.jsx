import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Navbar from "../navbar/index";
import { Box, Button, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
const GoogleProfile = () => {
  return (
    <div>
      <div   style={{ position : "sticky", top : "0" }} >
        <Navbar />
      </div>
      <div style={{ display: "flex" }}  >
        <AdminSidebar />
        <Flex   
          w={"100%"}
          direction={"column"}
          align="start"
          fontFamily={"Open Sans, sans-serif;"}
          position={"relative"}
          ml={["0%", "10%","18%"]}
        >
          <Heading fontWeight={700} mx={5} mt={10} fontSize={[12,14,16]}>
            Business Profile
          </Heading>
          <Box
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            p={[5,8,10]}
            m={5}
 
            w="90%"
          >
            <Heading textAlign={"left"} color="blue.500" fontWeight={700} fontSize={["20px"]}>
              No Location
            </Heading>

            <Flex direction={"column"} justifyContent={"center"} align={"center"}>
              <Image src="https://i.pinimg.com/originals/7c/89/90/7c89904c65970d2581ce4b5a392f7712.gif" />
              <Center p={[4,6,8]}>
                <Button
                  w={"full"}
                  maxW={["sm","md", "lg"]}
                  variant={"outline"}
                  leftIcon={<FcGoogle />}
                >
                  <Center>
                    <Text color="blue.500" fontSize={[12,14,16]}>Link Your Google Business Account</Text>
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

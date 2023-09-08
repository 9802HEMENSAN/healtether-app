"use client";

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  FormHelperText,
  FormErrorMessage,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");

  const handleSubmit = (e) => {
    alert("Make a SignUp here");
  };

  return (
    <Center  minH={"100vh"}> 
    <Box>
      <Flex justifyContent={"center"}  p={3}>
        <Image
          width="15%"
          src="https://healtether.netlify.app/assets/newlogo-bce991c9.png"
        ></Image>
      </Flex>
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Image
            width={"70%"}
            alt={"Login Image"}
            objectFit={"cover"}
            src={"https://healtether.netlify.app/assets/signlogo-0ecf338d.png"}
          />
        </Flex>
        <Flex
          flex={1}
          align={"center"}
          justify={"center"}
          color={"blue.900"}
        >
          <Stack  w={"full"} maxW={"md"} fontSize={[16, 18]}>
            <Heading fontSize={"xl"} textAlign={"left"}>
              Sign Up{" "}
            </Heading>
            <Text fontSize={"lg"} textAlign={"left"}>
              Welcome to our clinic family!
            </Text>
            <Text fontSize={"lg"} textAlign={"left"}>
              Your health and well-being are our top priorities.
            </Text>
            <FormControl id="email" my={1}>
              <Input
                fontSize={[16, 18]}
                type="email"
                isRequired
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="phone" my={1}>
              <Input
                fontSize={[16, 18]}
                type="phone"
                isRequired
                placeholder="Enter your Phone Number"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" my={1}>
              <Input
                fontSize={[16, 18]}
                type="password"
                minLength={6}
                isRequired
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id="confirm-password" my={1}>
              <Input
                fontSize={[16, 18]}
                type="password"
                minLength={6}
                isRequired
                placeholder="Enter Confirm Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.500"}>Forgot password?</Text>
              </Stack>
              <Flex>
                <Text>A have an account ?</Text>
                <Link to={"/signup"}>
                  <Text color="linkedin.500">Sign up</Text>
                </Link>
              </Flex>

              <Button
                colorScheme={"blue"}
                variant={"solid"}
                onClick={() => handleSubmit()}
              >
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </Box>
    </Center>
  );
}

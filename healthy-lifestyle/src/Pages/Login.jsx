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
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate=useNavigate("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      alert('Make a Login Logic here ! Click okay to go to DashBoard')
      navigate("/admin/dashboard")
  }

  return (
    <Box minH={"100vh"}>
      <Flex justifyContent={"start"} pl={20} pt={10}>
        <Image
          width="20%"
          src="https://healtether.netlify.app/assets/newlogo-bce991c9.png"
        ></Image>
      </Flex>
      <Stack direction={{ base: "column", md: "row" }}  >
        <Flex flex={1} align={"center"} justify={"center"}>
          <Image
            width={"70%"}
            alt={"Login Image"}
            objectFit={"cover"}
            src={"https://healtether.netlify.app/assets/new1-f04eeefd.jpg"}
          />
        </Flex>
        <Flex
          p={8}
          flex={1}
          align={"center"}
          justify={"center"}
          color={"blue.900"}
        >
          <Stack spacing={4} w={"full"} maxW={"md"} fontSize={[16,18]}>
            <Heading fontSize={"4xl"} textAlign={"left"}>
              Sign in{" "}
            </Heading>
            <Text fontSize={"lg"} textAlign={"left"}>
              Login with your Phone number or Email
            </Text>
            <FormControl id="email" isInvalid={email === ""}>
              <FormLabel fontSize={[16,18]} >Email address</FormLabel>
              <Input fontSize={[16,18]}
                type="email"
                isRequired
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {!email && (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="password" isInvalid={password === ""} >
              <FormLabel fontSize={[16,18]} >Password</FormLabel>
              <Input
              fontSize={[16,18]}
                type="password"
                isRequired
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {!password && (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              )}
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
                <Text>Don’t have an account ?</Text>
                <Link to={"/signup"}> 
                   <Text color="linkedin.500">Sign up</Text>             
                </Link>
              </Flex>

              <Button colorScheme={"blue"} variant={"solid"} 
              onClick={()=> handleSubmit()}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
}

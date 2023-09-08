"use client";

import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import logo1 from "../assets/healtether_logo.png";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"800"} fontSize={{ base: "16px", md: "18px" }} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      as="footer"
      bg={useColorModeValue("teal.500", "teal.500")}
      color={useColorModeValue("white", "white")} 
    >
      <Container as={Stack} maxW={"6xl"} py={5}>
     <Image w={{sm : 100, md : 200}} src={logo1}  ml={[0,0,-20]}/>
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "2fr 1fr 1fr" }}
          spacing={12}
          ml={[0,0,-20]}
        >
          <Stack spacing={6}>
            <Box  fontSize={[16,20]} >
              <Text  textAlign="start" >
                Join us on this transformative journey as we redefine healthcare
                together. HealTether is here to meet all your healthcare needs,
                providing convenient, accessible, and high-quality care at your
                fingertips.
              </Text>
            </Box>
          </Stack>
          <Stack align={"flex-start"} fontSize={[16,18]}>
            <ListHeader fontWeight={"bold"}>Useful Links</ListHeader>
            <Box as="a" href={"#"}>
              About us
            </Box>
            <Box as="a" href={"#"}>
              Cancellation Policy
            </Box>
            <Box as="a" href={"#"}>
              Terms and Conditions
            </Box>
            <Box as="a" href={"#"}>
              Privacy Policy
            </Box>
          </Stack>
          <Stack align={"flex-start"}  fontSize={[16,18]}>
            <ListHeader >Contact Us</ListHeader>
            <Box as="a" href={"#"}>
              No.12(2) Veerazhagamman Street
            </Box>
            <Box as="a" href={"#"}>
              Bodinayakanur
            </Box>
            <Box as="a" href={"#"}>
              Theni Tamil Nadu 625513
            </Box>
            <Box as="a" href={"#"}>
              Contact
            </Box>
            <Box as="a" href={"#"}>
              <strong>Phone:</strong> +91-9080857909
            </Box>
            <Box as="a" href={"#"}>
              <strong>Email :</strong> hello@healtether.com
            </Box>
          </Stack>
        </SimpleGrid>
        <Text  fontSize={[14,18]}  m={6}>
          Copyright 2023 Healtehter communication Pvt. Ltd All rights Reserved
        </Text>
      </Container>
    </Box>
  );
}

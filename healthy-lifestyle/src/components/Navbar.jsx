import React from "react";

import Style from "./Navbar.module.css";

import { useDisclosure } from "@chakra-ui/react";

import { useState } from "react";

import {
  HStack,
  Box,
  Text,
  Image,
  Button,
  IconButton,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { NavDrawer } from "./NavDrawer";
import { HamburgerIcon } from "@chakra-ui/icons";

import { useRef } from "react";
import logo1 from "../assets/national_logo.jpeg";
import logo2 from "../assets/healtether_logo.png";

const Navbar_options = [
  { text: "Home" },
  { text: "Buy Now Pay Later" },
  { text: "Videos" },
  { text: "Blogs" },
  { text: "ABHA" },
  { text: "About Us" }
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { current } = useRef([]);

  const Active_Link = (e, index) => {
    current.forEach((el, i) => {
      if (index === i) {
        el.classList.add(Style.active);
      } else {
        el.classList.remove(Style.active);
      }
    });
  };

  return (
    <Box
      zIndex={"3"}
      minW="280px"
      mb="20px"
      border="gray.200"
      position={"sticky"}
      top="0"
      bg="white"
      color="black"
      as="nav"
      id="nav-menu"
      p="2"
    >
      <HStack
        m="auto"
        w={{ base: "95%", "587px": "90%", "1120px": "80%" }}
        justify="space-between"
      >
     

        <Image _hover={{ cursor: "pointer" }} w={["100px","170px"]} m={[2,5]} src={logo1}></Image>

        <Image _hover={{ cursor: "pointer" }} w={["100px","150px"]} m={[2,5]} src={logo2}></Image>

        <IconButton
          size={["sm", "md"]}
          mr="5px"
          display={{ base: "block", "836px": "none" }}
          bg="white"
          border="1px solid black"
          onClick={onOpen}
          variant="none"
          icon={<HamburgerIcon />}
        ></IconButton>

        <HStack
          display={{ base: "none", "836px": "flex" }}
          w={{ base: "450px", "md": "950px" }}
          justify="space-between"
          fontSize={"bold"}
        >
          {Navbar_options.map((el, i) => {
            return (
              <ScrollLink
                key={Math.random()}
                to={el.id}
                smooth={true}
                duration={300}
              >
                <Text
                  className={i === 0 ? Style.active : ""}
                  ref={(el) => (current[i] = el)}
                  onClick={(e) => Active_Link(e, i)}
                  _hover={{
                    cursor: "pointer",
                    color: "rgb(0, 255, 162)",
                    borderBottom: "2px solid",
                    borderColor: "rgb(0, 255, 162)",
                  }}
                  px="2"
                  py="1"
                  fontSize = {[10,12,17]}
                  fontWeight={600}
                >
                  {el.text}
                </Text>
              </ScrollLink>
            );
          })}

          <Button
            color="white"
            bgGradient="linear(to-r, #03BF9C, #95aa95)"
            _hover={{
              bgGradient: "linear(to-r, #03BF9C, #95aa95)",
            }}
            fontWeight="medium"
            rounded="full"
            fontSize="sm"
            px={4}
            py={2}
            textAlign="center"
            mr={{ base: 3, md: 0 }}
          >
            Download App
          </Button>
          <Button
            color="green.700"
            bg="white"
            borderColor="green.300"
            _hover={{ bg: "teal.600", color: "white" }}
            fontWeight="medium"
            rounded="full"
            fontSize="sm"
            border="0.5px solid teal"
            px={4}
            py={2}
            textAlign="center"
            mr={{ base: 3, md: 0 }}
          >
            Login
          </Button>
        </HStack>
      </HStack>

      <NavDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

export default Navbar;

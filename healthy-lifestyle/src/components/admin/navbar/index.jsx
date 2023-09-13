import { Flex, Spacer, Stack, Text, Box } from "@chakra-ui/layout";
import React from "react";
import Actions from "./actions";
import {
  Avatar,
  Button,
  Collapse,
  Icon,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Search from "./search";
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { RiMenu2Line, RiWhatsappFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
// import { Box, Flex, Text } from "@chakra-ui/react";
import { FaClipboard } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { AiFillInfoCircle, AiOutlineLineChart } from "react-icons/ai";
import { SiGoogleforms } from "react-icons/si";
import { FcSearch } from "react-icons/fc";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import "../AdminSidebar/AdminSidebar.css";
 
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box display={["none", "block"]}>
        <Flex
          position="sticky"
          top="0px"
          width={"99%"}
          layerStyle="card"
          h="4.5rem"
          roundedBottom={[, , "2xl"]}
          alignItems="center"
          p={5}
        >
          <Stack
            direction="row"
            w="full"
            alignItems="center"
            spacing={[0, , 8]}
          >
            <Image
              src="https://healtether.netlify.app/assets/newlogo-bce991c9.png"
              height="90px"
              width={["200px", "230", "250px"]}
              mt={3}
            ></Image>

            <Spacer display={{ md: "none" }} />

            <Search display={["none", , "initial"]} />
            <Spacer />
            <Actions />
          </Stack>
        </Flex>
      </Box>

 
      {/* small screen navbars */}
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"20px"}
        color={"green.400"}
        width={"100%"}
         
      >
        <Flex justifyContent={"space-around"} alignItems={"center"} gap={5}>
          <Image
            _hover={{ cursor: "pointer" }}
            w={["100px", "170px"]}
            objectFit={"contain"}
            src={"https://healtether.netlify.app/assets/logo2-1bd69b55.jpeg"}
          ></Image>

          <Link to="/">
            <Image
              alignContent={"center"}
              objectFit={"contain"}
              _hover={{ cursor: "pointer" }}
              w={["130px", "170px"]}
              src={"https://healtether.netlify.app/assets/newlogo-bce991c9.png"}
            ></Image>
          </Link>
          <Box
            ref={btnRef}
            onClick={onOpen}
            display={["block", "none"]}
            ml={[, , "auto"]}
            cursor={"pointer"}
          >
            <HamburgerIcon fontSize={"32px"} />
          </Box>
        </Flex>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <AdminSidebar />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;

const AdminSidebar = () => {
  return (
    <>
      <Box className="sidebar">
        <Link to="/admin/dashboard">
          <Flex className="sidebar-link">
            <MdSpaceDashboard fontSize={"x-large"} color="blue" />
            <Text fontSize={[14, 16, 18]}>Dashboard</Text>
          </Flex>
        </Link>
        <Link to="/admin/chat">
          <Flex className="sidebar-link">
            <RiWhatsappFill fontSize={"x-large"} color="green" />
            <Text fontSize={[14, 16, 18]}>WhatsApp</Text>
          </Flex>
        </Link>
        {/* <Link to="/admin/time"> */}
        <Link bg="red" to="/admin/time">
          <Flex className="sidebar-link">
            <BiTimeFive fontSize={"x-large"} color="orange" />

            <Text fontSize={[14, 16, 18]}>Timings</Text>
          </Flex>
        </Link>
        {/*  */}
        <Link to="/admin/allPatients">
          <Flex className="sidebar-link">
            <FaClipboard fontSize={"x-large"} color="red" />

            <Text fontSize={[14, 16, 18]}>All Patients</Text>
          </Flex>
        </Link>

        <Link to="/admin/staff">
          <Flex className="sidebar-link">
            <FaUserNurse fontSize={"x-large"} color="purple" />
            <Text fontSize={[14, 16, 18]}>Staff</Text>
          </Flex>
        </Link>
        <Link to="/admin/marketing">
          <Flex className="sidebar-link">
            <HiSpeakerphone fontSize={"x-large"} color="blue" />
            <Text fontSize={[14, 16, 18]}>Marketing</Text>
          </Flex>
        </Link>
        <Link to="/admin/analytics">
          <Flex className="sidebar-link">
            <AiOutlineLineChart fontSize={"x-large"} color="green" />
            <Text fontSize={[14, 16, 18]}>Analytics</Text>
          </Flex>
        </Link>
        <Link to="/admin/revenue">
          <Flex className="sidebar-link">
            <BsCreditCard2FrontFill fontSize={"x-large"} color="teal" />
            <Text fontSize={[14, 16, 18]}>Revenue</Text>
          </Flex>
        </Link>
        <Link to="/admin/customize-form">
          <Flex className="sidebar-link">
            <SiGoogleforms fontSize={"x-large"} color="purple" />
            <Text fontSize={[14, 16, 18]}>Customise Form</Text>
          </Flex>
        </Link>
        <Link to="/admin/google-profile">
          <Flex className="sidebar-link">
            <FcSearch fontSize={"x-large"} color="pink" />
            <Text fontSize={[14, 16, 18]}>Google-profile</Text>
          </Flex>
        </Link>
      </Box>
    </>
  );
};

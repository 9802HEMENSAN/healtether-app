"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link, Link as RouterLink } from "react-router-dom";
import logo1 from "../assets/national_logo.jpeg";
import logo2 from "../assets/healtether_logo.png";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        justifyContent={"space-around"}
      >
        <Flex  justifyContent={"center"} alignItems={"center"}>
          
            <Image
              _hover={{ cursor: "pointer" }}
              w={["100px", "170px"]}
              objectFit={"contain"}
              src={logo1}
            ></Image>
        
  
            <RouterLink to="/">
              <Image
                alignContent={"center"}
                objectFit={"contain"}
                _hover={{ cursor: "pointer" }}
                w={["130px", "170px"]}
                src={logo2}
              ></Image>
            </RouterLink>
  
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
       
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Flex gap={6}  justifyContent={"flex-end"} alignItems="center">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              color="white"
              bgGradient="linear(to-r, #03BF9C, #95aa95)"
              _hover={{
                bgGradient: "linear(to-r, #03BF9C, #95aa95)",
              }}
              fontWeight="medium"
              rounded="full"
              fontSize="sm"
              textAlign="center"
              mr={{ base: 3, md: 0 }}
            >
              Download App
            </Button>
            <RouterLink to={"/login"}> 
            <Button
              display={{ base: "none", md: "inline-flex" }}
              color="green.700"
              bg="white"
              borderColor="green.300"
              _hover={{ bg: "teal.600", color: "white" }}
              fontWeight="medium"
              rounded="full"
              fontSize="sm"
              border="0.5px solid teal"
              textAlign="center"
              mr={{ base: 3, md: 0 }}
            >
              Login
            </Button>
            </RouterLink>
          </Flex>
        </Stack>
      <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("teal.500", "green");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack
      direction={"row"}
      spacing={4}
      align={"center"}
      justify={"space-between"}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={["sm", "md", "xl"]}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
               
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("green.50", "green.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "green.400" }}
            fontWeight={500}
            fontSize={"xl"}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Flex direction={"column"} gap={8} alignContent={"center"}>
        <Button
          display={{ base: "block", md: "none" }}
          color="white"
          bgGradient="linear(to-r, #03BF9C, #95aa95)"
          _hover={{
            bgGradient: "linear(to-r, #03BF9C, #95aa95)",
          }}
          fontWeight="medium"
          rounded="full"
          fontSize="sm"
          textAlign="center"
          mr={{ base: 3, md: 0 }}
        >
          Download App
        </Button>
        <Link to={"/admin/dashboard"}> 
        <Button
          display={{ base: "block", md: "none" }}
          color="green.700"
          bg="white"
          borderColor="green.300"
          _hover={{ bg: "teal.600", color: "white" }}
          fontWeight="medium"
          rounded="full"
          fontSize="sm"
          border="0.5px solid teal"
          textAlign="center"
          mr={{ base: 3, md: 0 }}
        >
          Login
        </Button>
        </Link>
      </Flex>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          fontSize={"md"}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                as="a"
                key={child.label}
                py={2}
                fontSize={"md"}
                href={child.href}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Buy Now Pay Later",
    href: "/",
  },
  {
    label: "Videos",
    href: "/",
  },
  {
    label: "Blogs",
    href: "/",
  },
  {
    label: "ABHA",
    href: "/",
  },
  {
    label: "About Us",
    children: [
      {
        label: "Team",
        href: "/",
      },
      {
        label: "Services",
        href: "/",
      },
    ],
  },
];

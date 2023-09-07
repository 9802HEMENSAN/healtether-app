import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import logo1 from "../assets/national_logo.jpeg";
import logo2 from "../assets/healtether_logo.png";
import { Link as ScrollLink } from "react-scroll";

const Navbar_options = [
  { text: "Home" },
  { text: "Buy Now Pay Later" },
  { text: "Videos" },
  { text: "Blogs" },
  { text: "ABHA" },
  { text: "About Us" },
];

export function NavDrawer({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        display={{ base: "block", "836px": "none" }}
      >
        <DrawerOverlay display={{ base: "block", "836px": "none" }} />
        <DrawerContent
          display={{ base: "block", "836px": "none" }}
          bg="white"
          color="black"
        >
          <DrawerCloseButton _hover={{ background: "rgb(7, 40, 66);" }} />
          <DrawerHeader>
            <Image borderRadius="10px"  ></Image>
          </DrawerHeader>

          <DrawerBody>

            <Stack spacing="20px">
              {Navbar_options.map((el) => {
                return (
                  <ScrollLink
                    key={Math.random()}
                    smooth={true}
                    duration={300}
                  >
                    <Text
                      _hover={{
                        cursor: "pointer",
                        color: "purple.300",
                        borderBottom: "2px solid",
                        borderColor: "purple.400",
                      }}
                      px="2"
                      py="1"
                      fontWeight={600}
                      fontSize={20}
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
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

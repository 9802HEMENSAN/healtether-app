"use client";

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function MainBody() {
  return (
    <Stack direction={{ base: "column", md: "row" }} fontFamily={"Open Sans"}
    m={{ base : 5 , md : 3 }} >
      <Flex   flex={1.5} align="center" justify="center"   >
        <Stack   w={"full"} maxW={"lg"}>
          <Heading
            as={"h3"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight={"200"}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "40%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
            >
              Make your clinic Smarter, with HealTether
            </Text>
            <br />{" "}
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              bgGradient="linear(to-l, #98fb98, #95aa95)"
              _hover={{ bgGradient: "linear(to-r, #98fb98, #95aa95)" }}
              rounded="full"
              my={3}
              mx={5}
              color="white"
              fontSize={{ base: "xl", sm: "lg", md: "2xl" }}
              fontWeight="semibold"
            >
              Start 15-days trial now
            </Button>
            <Button
              border="1px"
              borderColor="green.600"
              rounded="full"
              my={3}
              mx={5}
              fontSize="2xl"
              fontWeight="semibold"
              _hover={{ shadow: "md", bg: "gray.100" }}
            >
              Book a demo
            </Button>
          </Stack>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Takes less than 60s ⚡
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1} align="center" justify="center">
        <Image
          alt={"healtether Image"}
          objectFit={"cover"}
          w={{ base: 300, md: 400, lg: 400 }}
          src={"https://healtether.netlify.app/assets/new1-f04eeefd.jpg"}
        />
      </Flex>
    </Stack>
  );
}

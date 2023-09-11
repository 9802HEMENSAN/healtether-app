import { Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Actions from "./actions";
import { Image } from "@chakra-ui/react";
import Search from "./search";

const Navbar = () => {
  return (
    <Flex
      position={"sticky"}
      top={0}
      width={"86%"}
      layerStyle="card"
      h="4.5rem"
      roundedBottom={[, , "2xl"]}
      alignItems="center"
      p={5}
    >
      <Stack direction="row" w="full" alignItems="center" spacing={[0, , 8]}>
        <Image
          src="https://healtether.netlify.app/assets/newlogo-bce991c9.png"
          height="90px"
          width="260px"
          mt={3}
        ></Image>

        <Spacer display={{ md: "none" }} />
        <Text
          textStyle="default"
          fontSize="xl"
          fontWeight="semibold"
          fontFamily="cursive"
          display={{ md: "none" }}
        >
          HealTether
        </Text>
        <Search display={["none", , "initial"]} />
        <Spacer />
        <Actions />
      </Stack>
    </Flex>
  );
};

export default Navbar;

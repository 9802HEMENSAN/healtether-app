import { IconButton, IconButtonProps } from "@chakra-ui/button";
import { Box, Stack, StackProps } from "@chakra-ui/layout";
import React from "react";
import Notifications from "./notifications";
import Profile from "./profile";
 
import { CgMenuRightAlt, CgMenuMotion } from "react-icons/cg";
import Icon from "@chakra-ui/icon";
 
import { SlideFade } from "@chakra-ui/transition";
const Actions = () => {
 
  return (
    <>
      <ActionsList display={["none", , "flex"]} />
      <Box pos="absolute" insetX="5" top="5rem" zIndex="overlay">
        <SlideFade  offsetY="90px">
          <ActionsList
            p={5}
            justify="center"
            rounded="3xl"
            shadow="lg"
            layerStyle="neutral"
            justifyContent="space-between"
            display={["flex", , "none"]}
          />
        </SlideFade>
      </Box>
    </>
  );
};

const ActionsList = (props ) => {
  return (
    <Stack direction="row" alignItems="center" spacing={[2, , 6]} {...props}>
      <Notifications />
      <Profile />
    </Stack>
  );
};

export default Actions;

const ActionsButton = (props ) => {
  const { isOpen, ...rest } = props;
  const icon = isOpen ? CgMenuMotion : CgMenuRightAlt;
  return (
    <IconButton
      display={{ md: "none" }}
      colorScheme="brand"
      variant="ghost"
      fontSize="2xl"
      aria-label="Toggle Actions"
      icon={<Icon as={icon} />}
      transition="all .4s ease-in-out"
      {...rest}
    />
  );
};

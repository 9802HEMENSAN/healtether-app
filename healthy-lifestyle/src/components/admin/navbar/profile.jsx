import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const Profile = () => {
  return (
    <HStack alignItems="center"    >
      <Avatar
        name="healthter"
        src="https://app.paperplane.health/static/media/icon.8ff77fac8f638fa9c2a0.jpg"
        size="sm"
        zIndex={100}
      >
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Icon as={IoIosArrowDown} />
    </HStack>
  );
};

export default Profile;

import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Navbar from "../navbar/index";
import React, { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Input,
  Button,
  Text,
  Grid,
  GridItem,
  InputGroup,
  InputRightAddon,
  Heading,
  Select,
  Center,
  Stack,
} from "@chakra-ui/react";
import TimeRange from "react-time-range";
import moment from "moment";
import { FcGoogle } from "react-icons/fc";

const Time = () => {
  const [startTime, setStartTime] = useState(moment());
  const [endTime, setEndTime] = useState(moment());

  const [isCreatingSlots, setIsCreatingSlots] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  const [selectedTimes, setSelectedTimes] = useState({
    Monday: { start: null, end: null },
    Tuesday: { start: null, end: null },
    Wednesday: { start: null, end: null },
    Thursday: { start: null, end: null },
    Friday: { start: null, end: null },
    Saturday: { start: null, end: null },
    Sunday: { start: null, end: null },
  });

  const [interval, setInterval] = useState(15);
  const [emergencySlots, setEmergencySlots] = useState(0);

  const handleIntervalChange = (e) => {
    const newInterval = parseInt(e.target.value, 10);
    if (!isNaN(newInterval)) {
      setInterval(newInterval);
    }
  };

  const handleEmergencySlotsChange = (e) => {
    const newEmergencySlots = parseInt(e.target.value, 10);
    if (!isNaN(newEmergencySlots)) {
      setEmergencySlots(newEmergencySlots);
    }
  };

  const handleTimeChange = (selectedTime) => {
    setStartTime(selectedTime.startTime);
    setEndTime(selectedTime.endTime);
  };

  const handleToggle = (day) => {
    setIsCreatingSlots((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  const handleBookSlot = (day) => {
    const { start, end } = selectedTimes[day];
    if (start && end) {
      // Perform booking action for the selected day with start and end times
      console.log(
        `Booked slot for ${day} from ${start.toLocaleTimeString()} to ${end.toLocaleTimeString()}`
      );
    }
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      <div   style={{ position : "sticky", top : "0" }}>
        <Navbar />
      </div>
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <Box p={4} fontFamily={"Open Sans"} width={"100%"} position={"relative"} ml={["0%","20%"]} >
          <Stack spacing={2} m={[2,5,10]}>
            <Flex gap={[2,2,4]}  align={"center"} flexDirection={["column", "row", "row"]} >
              <Text fontSize={[16, 16, 18]}>Showing your timings for:</Text>
              <Select w={300}>
                <option value="Dr.Arjun Krishna">Dr.Arjun Krishna</option>
                <option value="Dr.Arjun Krishna">Dr.Arjun Krishna</option>
              </Select>
            </Flex>
            <Flex alignContent={"center"} align={"center"} flexDirection={["column", "row", "row"]}>
              <Center  >
                <Button
                  w={"full"}
                  maxW={"md"}
                  variant={"outline"}
                  leftIcon={<FcGoogle />}
                >
                  <Center>
                    <Text color="blue.500">Calender Sync</Text>
                  </Center>
                </Button>
              </Center>
              <Text>
                Sync your paperplane account to your Google Calendar to get
                appointment notifcations and calendar view.
              </Text>
            </Flex>
            <Button w={"full"} maxW={"md"} variant={"outline"}>
              <Center>
                <Text color="blue.500">Cancel Slot</Text>
              </Center>
            </Button>
          </Stack>
          <Flex flexDirection="row">
            {/* Interval Input */}
            <Box mr={4}>
              <Text fontSize={[14, 16, 18]}>Interval:</Text>
              <InputGroup size="md">
                <Input
                  type="number"
                  value={interval}
                  onChange={handleIntervalChange}
                />
                <InputRightAddon children="minutes" />
              </InputGroup>
            </Box>

            {/* Emergency Slots Input */}
            <Box>
              <Text fontSize={[14, 16, 18]}>Emergency Slots/Day:</Text>
              <InputGroup size="md">
                <Input
                  type="number"
                  value={emergencySlots}
                  onChange={handleEmergencySlotsChange}
                />
                <InputRightAddon children="slots/day" />
              </InputGroup>
            </Box>
          </Flex>
          <Flex align="center" justify="space-between">
            <Text fontWeight="bold" fontSize={[14, 16, 18]}>
              Days:
            </Text>
          </Flex>

          <Flex flexDirection={"column"} gap={5}>
            {days.map((day) => (
              <Flex key={day} flexDirection={["column","row"]} gap={5} minHeight={100}>
                <Heading fontWeight="bold" fontSize={["sm", "md", "lg"]}>
                  {day}
                </Heading>
                <Flex mt={2} alignItems="center">
                  <FormControl display="flex" alignItems="center">
                    <FormLabel
                      htmlFor={`toggle-${day}`}
                      mb={0}
                      fontWeight={`semibold`}
                      fontSize={["sm", "md", "lg"]}
                    >
                      Enable Slot Creation
                    </FormLabel>
                    <Switch
                      id={`toggle-${day}`}
                      isChecked={isCreatingSlots[day]}
                      onChange={() => handleToggle(day)}
                    />
                  </FormControl>

                  {isCreatingSlots[day] && (
                    <Flex alignItems="center" ml={4}>
                      <Flex
                       flexDirection={["column","row"]} 
                       gap={2}
                      >
                        <TimeRange
                          startMoment={startTime}
                          endMoment={endTime}
                          onChange={handleTimeChange}
                        />
                      </Flex>

                      <Button
                        ml={4}
                        colorScheme="blue"
                        p={5}
                        onClick={() => handleBookSlot(day)}
                      >
                        Book Slot
                      </Button>
                    </Flex>
                  )}
                </Flex>
                <Box mt={2}>
                  {/* Display available slots for the selected day */}
                  {/* You can fetch and display the available slots here */}
                </Box>
              </Flex>
            ))}
          </Flex>
        </Box>
      </div>
    </div>
  );
};

export default Time;

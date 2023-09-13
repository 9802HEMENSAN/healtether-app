import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import Navbar from "../navbar/index";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi";
import { FcShare } from "react-icons/fc";

const Data = [
  {
    "images":
      "https://s3.ap-south-1.amazonaws.com/paperplane-s3/pushed_posters/64fb112b8f1eb0f389ad9cfa?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUSXZZ7HZK47LXEVL%2F20230911%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230911T103451Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=54c60803f37fa64f610bbb600e2de3d615122a98c0681bbab486662bffbd300d",
  },
  {
    "images":
      "https://s3.ap-south-1.amazonaws.com/paperplane-s3/pushed_posters/64f83d018f1eb0f389ad844f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUSXZZ7HZK47LXEVL%2F20230911%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230911T103451Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a337a2730d5f5a9e4f4a94d8e6ef77621f23a81d77bfdd120ca98282c5a9c3ff",
  },
  {
    "images":
      "https://s3.ap-south-1.amazonaws.com/paperplane-s3/pushed_posters/64f70fe58f1eb0f389ad6e5a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUSXZZ7HZK47LXEVL%2F20230911%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230911T103451Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=369313e9d8c2b727eee94e690f9480378822323e6123ed29b324196e8d1f5809",
  },
  {
    "images":
      "https://s3.ap-south-1.amazonaws.com/paperplane-s3/pushed_posters/64e62e01858185c40982b0bc?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUSXZZ7HZK47LXEVL%2F20230911%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230911T103451Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8c597165faabd72197786715ac0390460956348456e3994c7374d8b3c613f441",
  },
  {
    "images":
      "https://s3.ap-south-1.amazonaws.com/paperplane-s3/pushed_posters/64ac66a9590ee8964eb112c5?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUSXZZ7HZK47LXEVL%2F20230911%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230911T103451Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9d6b921475218bf3f5b3c1b19ea1416a2f801c16ce21d555bf0afedc4551ea70",
  },
  {
    "images":
      "https://s3.ap-south-1.amazonaws.com/paperplane-s3/pushed_posters/649d31f734fc1540b88087c7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUSXZZ7HZK47LXEVL%2F20230911%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230911T103451Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7dd9288984197d817bb3055852b1dbbfe419c719bdbbe6a0bf035cdb8003bf90",
  }
];
const Marketting = () => {
  return (
    <div>
      <div  style={{ position : "sticky", top : "0" }}>
        <Navbar />
      </div>
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <Box fontFamily={"Open Sans"} p={5} width={"100%"} position={"relative"} ml={["1%","18%"]}  >
          {/* Top side */}
          <Flex
            m={[5, 10, 15]}
            align="left"
            flexDirection={["column", "column", "row"]}
            justifyContent={"space-between"}
            gap={6}
            color="#32325d"
            fontFamily={"Open Sans, sans-serif;"}
            lineHeight={"24px"}
            fontWeight={400}
          >
            <Box align={"start"} w="50%">
              <Heading fontSize={["1rem","1.1rem", "1.3rem"]}>Marketing Posters</Heading>
              <Text fontSize={["1rem","1.1rem", "1.3rem"]} >
                Personally curated marketing content for your medical practice.
                Share these posters on your facebook page or broadcast them to
                your entire patient database with the click of a button.
              </Text>
            </Box>

            <Button
              leftIcon={<HiOutlinePlus fontSize={"x-large"} />}
              color={"#5E72E4"}
            >
              Add Posters
            </Button>
          </Flex>

          {/* Banners */}
          <Grid
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={14}
          >
            {Data?.map((item) => {
              return (
                <GridItem key={Date.now() + Math.random}>
                  <Image src={item.images}   />
                  <Box  p="4" borderRadius="lg"> 
                    <ButtonGroup  borderRadius = {5} borderColor="blue.500" borderWidth="2px" variant="outline" spacing="6" width="100px">
                      <Button leftIcon={<FcShare color="green" />}>
                        Share
                      </Button>
                    </ButtonGroup>
                    </Box>

                  {/* FcShare */}
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Marketting;

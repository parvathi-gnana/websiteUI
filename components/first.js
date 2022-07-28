import React,{useEffect} from "react";
import {
  Text,
  HStack,
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  Box,
  Button,
  Image,
  AspectRatio,
  Pressable,
  IconButton,
  Card,
  Icon,
  Input,
  Divider,
  Flex,
  Stack,
  ScrollView,
  Menu,
  HamburgerIcon,
  View,
  Badge,
  Avatar,
  Shadow,
} from "native-base";

import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import secondSlide from "./secondSlide";
import * as Font from "expo-font";

const First=()=> {



  return (
  <>
  <Stack width={["100%", "100%", "100%", "100%"]}   display={["none", "none", "true", "true"]} >
          <Image
            paddingTop={["500","500", "500","750"]}
            size={["full", "full"]}

            resizeMethod={"cover"}
            ratio={{
              base: 2 / 3,
              md: 16 / 9,
            }}
            source={require("../assets/hero_image_updated (1).png")}
          />
        </Stack>
        <Stack width={["100%", "100%", "100%", "100%"]} >
          <Image
            display={["true", "true", "none", "none"]}
            height={["730","650","",""]}
            size={["500", "760"]}
            resizeMethod={"cover"}
            source={require("../assets/mobile2.png")}
          />
        </Stack>

        <Image
          w={["10", "20", "30", "40", "40"]}
          h={["12.5","12.5","4","12.5"]}
          marginLeft={["4", "20", "100", "40"]}
          paddingTop={["10", "20", "41", "150"]}
          mt={["4", "8", "8", ""]}
          source={require("../assets/logo_white.png")}
          alt="logo"
          position={"absolute"}
        />

<Stack
          direction={"row"}
          w={["10", "20", "", "40"]}
          marginLeft={["100", "400", "500", "500"]}
        
          fontSize={["xs", "sm", "md", "15px"]}
          position="absolute"
          mt={["4", "8", "10", "12"]}
          space={["","","5","1/3"]}
          display={["none", "none", "true", "true"]}
          fontFamily="PoppinsMedium"
        >
          <HStack  > <Text color={"white"}  >How it works</Text></HStack>
          <Text color={"white"}>Features</Text>
          <Text color={"white"} >Pricing</Text>
          <Text color={"white"}>Contact</Text>
        </Stack>

        <Box
          display={["true", "true", "none", "none"]}
          mt={["4", "50", "", ""]}
          ml={["", "150", "", ""]}
          style={{ left: 320 }}
          position={"absolute"}
        >
          <Menu
            closeOnSelect={false}
            mr={"25"}
            placement={"left bottom"}
            onOpen={() => console.log("opened")}
            onClose={() => console.log("closed")}
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps}>
                  <Foundation name="indent-more" size={24} color="white" />
                </Pressable>
              );
            }}
          >
            <Menu.Item>How it work</Menu.Item>
            <Menu.Item>Features</Menu.Item>
            <Menu.Item>Pricing</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu>
        </Box>

          {/* web view */}
          <Stack
          display={["none", "none", "true", "true"]}
          direction="column"
          w={["150", "200", "","645"]}
          marginLeft={["100", "20", "140", "182"]}
          paddingTop={["20", "200", "150", "230"]}
          position="absolute"
        >
          <Text
            fontFamily="PoppinsSemiBold"
            color="white"
            fontSize={["md", "lg", "2xl", "60", "66px"]}
          >
            The Simple Way
          </Text>
          <Text
             fontFamily="PoppinsSemiBold"
            color="white"
            fontSize={["md", "lg", "2xl", "60", "66px"]}
          >
            to Start Real Estate{" "}
          </Text>
          <Text
             fontFamily="PoppinsSemiBold"
            color="white"
            fontSize={["md", "lg", "2xl", "60", "66px"]}
          >
            Investing
          </Text>
        </Stack>

        {/* upto here */}
        {/* mbl view */}
        <Stack
          display={["true", "true", "none", "none"]}
          direction="column"
          w={["260", "280", "350", "585"]}
          marginLeft={["100", "150", "150", "180"]}
          marginTop={["160", "150", "220", "230"]}
          position="absolute"
        >
          <Text
            fontWeight="semibold"
            color="white"
            fontSize={["30", "35", "4xl", "67"]}
          >
            The Simple Way
          </Text>
          <Text
            ml={["-5"]}
            fontWeight="semibold"
            color="white"
            fontSize={["30", "35", "4xl", "67"]}
          >
            to Start Real Estate{" "}
          </Text>
          <Text
            ml={["31"]}
            fontWeight="semibold"
            color="white"
            fontSize={["30", "35", "4xl", "67"]}
          >
            Investing
          </Text>
        </Stack>
        {/* upto here */}

        <Stack
          direction={"row"}
          w={["310", "350", "0", "700"]}
          marginLeft={["30", "100", "150", "200"]}
          color="white"
          fontSize={["md", "sm", "md", "lg"]}
          position="absolute"
          paddingTop={["420", "290", "390", "590"]}
          justifyItems={"baseline"}
          mt={["190", "300", "0", ""]}
        >
          <Button
            borderRadius="25"
            borderWidth={["2"]}
            borderStyle={"solid"}
            _text={{ color: "#ffffff" }}
            variant="outline"
            borderColor="white"
            size={["130", "130", "130", "200"]}
            h={["35", "50"]}
            fontSize={["sm", "md", "md", "lg"]}
            fontWeight={["md", "sm", "md", "lg"]}
            position="absolute"
            // mt={["150","20","-70",""]}
            // ml={["","","-50",""]}
          >
            Start Free Trial
          </Button>

          <Text ml={["163", "180", "180", "250"]} mt={["1", "4", "3", "3"]}>
            <AntDesign name="play" size={45} color="white" />
          </Text>

          <Text
            color="white"
            fontSize={["15", "sm", "md", "lg"]}
            ml={["15", "25", "30", "50"]}
            mt={["1", "4", "2", "2"]}
          >
            Watch Video
          </Text>
        </Stack>

        <secondSlide/>

        </>  
        )
  
};


export default First;

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
  Hidden,
} from "native-base";

import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import * as Font from "expo-font";

const FirstWeb=()=> {



  return (
  <>
  <View flex="1" flexGrow={1}>
  <Hidden only={["base", "sm", "md"]} >
  <Stack width={["100%", "100%", "100%", "100%"]}    >
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
          marginLeft={["100", "400", "500", "625"]}
        
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

       

          {/* web view */}
          <Stack
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
         </Stack>
        </Hidden>

</View>
        </>  
        )
  
};


export default FirstWeb;
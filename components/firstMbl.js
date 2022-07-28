import React, { useEffect } from 'react';
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
} from 'native-base';
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';


const Firstmbl = () => {
  return (
    <>
    <View Flex="1" >
      <Hidden from={"lg"}  till={"xl"}>
      <Stack width={["100%", "100%", "100%", "100%"]} >
       
          <Image
            height={["800","700","",""]}
            size={["800", "760"]}
            resizeMethod={"cover"} 
           
           
            source={require("../assets/mobile2.png")}
          />
         
          <Image
          w={["10", "20",  "40", "40"]}
          h={["12.5","12.5","4","12.5"]}
          marginLeft={["4", "20", "100", "40"]}
          paddingTop={["10", "20", "41", "150"]}
          mt={["10", "8", "8", ""]}
          source={require("../assets/logo_white.png")}
          alt="logo"
          position={"absolute"}
        />
        
        <Box
          mt={["10", "50", "", ""]}
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

        <Stack
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

<View position="absolute">
        <Stack
          direction={"row"}
          w={["310", "350", "0", "700"]}
          marginLeft={["30", "100", "150", "200"]}
          color="white"
          fontSize={["md", "sm", "md", "lg"]}
          position="absolute"
          paddingTop={["550", "325", "390", "590"]}
          justifyItems={"baseline"}
          mt={["190", "300", "0", ""]}
        >
        <View>
        
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
          </View>

          <View ml={["163", "180", "180", "250"]} mt={["-1", "0", "3", "3"]}>
            <AntDesign name="play" size={45} color="white" />
          </View>

          <Text
            color="white"
            fontSize={["15", "sm", "md", "lg"]}
            ml={["15", "25", "30", "50"]}
            mt={["1", "4", "2", "2"]}
          >
            Watch Video
          </Text>
        </Stack>
        </View>
        </Stack>
      </Hidden>
      </View>
    </>
  );
};

export default Firstmbl;

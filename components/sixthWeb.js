import React from "react";
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
  Container
} from "native-base";
import { StyleSheet, } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const SixthWeb = () => {
  return (
    <>
    <Container flex="1" flexGrow={1} >
    <Hidden from="base" till="lg">
      <Stack width={["100%", "100%", "100%", "100%"]} mt={["-127","50","50",""]} flex="1">
        <Image
          source={require("../assets/get-started_get-in-touch_bg.png")}
          w={["100%", "100%", "100%", "100%"]}
          h={["670", "700", "900", "920"]}
          marginTop={["250", "100", "15", "470"]}
        />
        <Card
          w={["325", "470", "600", "940"]}
          h={["335", "350", "350", "370"]}
          mt={["280", "130", "90", "550"]}
          ml={295}
          mr={295}
          alignSelf={"center"}
          borderRadius={["30", "10", "30", "50"]}
          position="absolute"
          backgroundColor={["none", "none", "none", "none"]}
          borderColor="#FFFFFF"
          borderWidth={"3px"}

        >
          <LinearGradient
            colors={["#7D2BE9", "#AD75F8"]}
            start={{ x: 1, y: 0 }}
            // style={{
            //   flex: 1,
            //   height: "100%",
            //   width: "100%",
            //   flexDirection: "column",
            //  overflow:"hidden",

            // }}
            style={styles.card}

          >
            {/* <Card

                  w={["305", "435", "570", "905"]}
                  h={["318", "320", "320", "335"]}
                  borderRadius={["10", "10", "20", "40"]}

                  
                 
                > */}
            <Heading
              color={"white"}
              alignSelf={"center"}
              style={styles.text}
              fontSize={60}
              mt={["100", "100", "50", "10"]}
            >
              Let's Get Started
            </Heading>
           
           
            <Text
              alignSelf={"center"}
              fontWeight={"medium"}
              color="#ffc266"
              fontSize={["22", "22", "40", "30"]}
            >
              with a free 7-day trail
            </Text>

            <Button
              mt={["200", "180", "210", "190"]}
              ml={["-130", "2", "-220", "-225"]}
              position="absolute"
              color="warmGray.50"
              variant="outline"
              width={["125", "190"]}
              height={["63"]}
              borderColor="#fff"
              borderRadius={10}
              borderWidth={2}
              _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "warmGray.50",
                letterSpacing: "lg",
              }}
            >
              <HStack>
                <Text mt={"2"}>
                  <AntDesign name="apple1" size={36} color="white" />
                </Text>
                <VStack>
                  <Text
                    fontSize={["10", "14"]}
                    color="white"
                    ml={2}
                    lineHeight="3"
                    mt={2}
                  >
                    Download on the
                  </Text>
                  <Text
                    color="white"
                    ml={3}
                    fontSize={["15", "22"]}
                    fontWeight={"semibold"}
                  >
                    App Store
                  </Text>
                </VStack>
              </HStack>
            </Button>
            <Button
              mt={["34", "6", "25", "30"]}
              ml={["145", "210", "230", "225"]}
              variant={"outline"}
              borderRadius={10}
              width={["130", "190"]}
              height={["63"]}
              borderWidth={2}
              borderColor={"white"}
            >
              <HStack mt="1">
                <Entypo name="google-play" size={35} color="white" />
                <VStack>
                  <Text
                    fontSize={["10", "14"]}
                    fontWeight="semibold"
                    mt={3}
                    color="white"
                    lineHeight="3"
                  >
                    ANDROID APP ON
                  </Text>
                  <Text color="white" fontSize={["14", "22"]}>
                    Google Play
                  </Text>
                </VStack>
              </HStack>
            </Button>
            {/* </Card> */}
          </LinearGradient>
        </Card>


        <Stack
          position={"absolute"}
          direction={"row"}
          flex={2}
          mt={["530", "500", "500", "1000"]}
          ml={["auto", "auto", "", ""]}
         
        >
          <VStack space={"-1"} >
            <Text
              mt={["150", "0", "12", "50"]}
              fontSize={["40", "40", "40", "60"]}
             
              color={"#7D2BE9"}
              ml={["85", "137", "20", "200"]}
            >
              Get in touch
            </Text>
            <Text
              fontSize={["40", "40", "40", "60"]}
              color={"#7D2BE9"}
              textAlign="center"
              ml={["71", "50", "15", "100"]}
              mt={["","","","-5"]}
            >
              with us!
            </Text>
            <HStack
              mt={["80", "", "", ""]}
              ml={["51", "", "28", "200"]}
              alignItems="baseline"

            >
              <AntDesign name="mail" size={17} mt={20} color={"purple"} />
              <Text
                ml={4}
                mt={0}
                fontSize={["18"]}
                color={"#9A55DD"}
              >
                info@shadow.properties
              </Text>
            </HStack>

           

            <Text
              ml={["91", "130", "65", "230"]}
              mt={["2", "","","2"]}
              fontSize={["15", "18"]}
              color="#988AB4"
            >
              Feel free to check our answers to
            </Text>
            <Text
              ml={["100", "155", "65", "230"]}
              mt={["1", "2"]}
              underline={[true, "none"]}
              fontSize={["15", "18"]}
              color={"#9A55DD"}
            >
              Frequently Asked Questions
            </Text>
          </VStack>
          <VStack >
            <HStack
              space={"25"}
              mt={["20", "", "1", "2"]}
              ml={["", "", "60", "180"]}
             
            >
              {/* <Input
                      placeholder="Name"
                      w={["", "", "150", "300"]}
                      mt={60}
                     
                      color={"#9A55DD"}
                      numberOfLines={1}
                      fontSize={"18"}
                      h={["42"]}
                      borderRadius={10}
                      borderWidth={2}
                      shadow={"9"}
                      borderColor={"purple.200"}
                    /> */}


              <Input
                bg={"purple.100"}
                placeholder="Name"

                w={["", "", "150", "300"]}
                h={["42"]}
                mt={60}
                borderRadius={10}
                borderWidth={2}
                shadow={"9"}
                borderColor={"purple.200"}
              />

              <Input
                bg={"purple.100"}
                placeholder="Email"
                w={["", "", "150", "300"]}
                h={["42"]}
                mt={60}
                borderRadius={10}
                borderWidth={2}
                borderColor={"purple.200"}
              />
            </HStack>
            <Input
              ml={["", "", "50", "180"]}
              bg={"purple.100"}
              placeholder="Message"
              w={["", "", "350", "630"]}
              h={["", "", "75", "160"]}
              pr={10}
              mt={["", "", "8", "10"]}
              p={4}
              borderRadius={15}
              borderWidth={2}
              borderColor={"purple.100"}
            />

            <Text
              borderRadius={50}
              borderWidth={3}
              borderColor={"purple.600"}
              p={2}
              w={180}
              ml={["", "", "135", "180"]}
              fontSize={16}
              textAlign={"center"}
              bold
              mt={["25"]}
              alignContent={"center"}
              color={"purple.600"}
            >
              Send Message
            </Text>
          </VStack>

        

        
          <Divider
            mt={["", "", "320", "400"]}
            ml={["", "", "30", "180"]}
            width={["", "", "750", "1190"]}
            position={"absolute"}
            thickness="2"
            display={["none", "none", "true", "true"]}
          />
         

          <HStack
            position={"absolute"}
            mt={["", "", "350", "480"]}
            mb="20"
          >
            <Text
              ml={["", "", "50", "180"]}
              color="#988AB4"
              fontSize={["", "", "15", "18"]}
              fontWeight={"normal"}
              w={["", "", "400", ""]}
              mb="5"
            >
              copyright @2020 ShadowProperties.All rights reserved
            </Text>

            <Text
              color="#988AB4"
              ml={["", "", "150", "530"]}
              fontWeight={"normal"}
              fontSize={"18"}
            >
              Terms
            </Text>

            <Stack>
              <Divider
                orientation="vertical"
                thickness={"2"}
                fontWeight="bold"
                color="#988AB4"
                ml={["2"]}
                height="25"
              />
            </Stack>

            <Text
              ml={"2"}
              color="#988AB4"
              fontWeight={"normal"}
              fontSize={"18"}
            >
              privacy
            </Text>

            <Stack>
              <Divider
                orientation="vertical"
                thickness={"3"}
                fontWeight="bold"
                color="#988AB4"
                ml={["2"]}
                height="25"
              />
            </Stack>

            <Text
              ml={"2"}
              color="#988AB4"
              fontWeight={"normal"}
              fontSize={"18"}
            >
              FAQs
            </Text>
          </HStack>

        

         
          
        </Stack>
      </Stack>
      </Hidden>
      </Container>

    </>
  )
}

export default SixthWeb;



const styles = StyleSheet.create({

  card: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
    fontFamily:"Poppins-Medium"
  },
  text: {
    fontFamily:"Poppins-Medium"
  }

});



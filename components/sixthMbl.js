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
} from "native-base";
import { StyleSheet, Dimensions } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";



const deviceHeight = Math.round(Dimensions.get("window").height);
const deviceWidth = Math.round(Dimensions.get("window").width)

const SixthMbl = () => {

    return (
        <>
            <View flex="1">
                <Hidden only={['lg', 'xl']}>
                    <Stack width={["100%", "100%", "100%", "100%"]} mt={["100", "170", "50", ""]} flex="1">
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
                            borderRadius={["30", "30", "30", "50"]}
                            position="absolute"
                            backgroundColor={["white", "white", "none", "none"]}
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
                                    fontWeight={"bold"}
                                    fontSize={40}
                                    mt={["30", "5", "10", "10"]}
                                >
                                    Let's
                                </Heading>
                                <Heading
                                    color={"white"}
                                    alignSelf={"center"}
                                    fontWeight={"bold"}
                                    fontSize={40}
                                    mt={["1", "1", "2", "2"]}
                                >
                                    Get Started
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
                                    ml={["-130", "-190", "-220", "-225"]}
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

                        {/* last page section */}

                        <Stack
                            position={"absolute"}
                            direction={"row"}
                            flex={2}
                            mt={["530", "500", "500", "1000"]}


                        >
                            <View alignItems={"center"}>
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
                                        mt={["", "", "", "-5"]}
                                    >
                                        with us!
                                    </Text>


                                    {/* mobile */}


                                    <Stack
                                        direction={"row"}
                                        ml={["90", "150", "", ""]}
                                        mt={["365", "370", "", ""]}

                                    >
                                        <View borderColor={"purple"}  mt={["-59", "-55"]}  ml={["79", "85"]} position="absolute" borderRadius="full" size="50" alignSelf={"center"} borderWidth={"1"}>
                                            <Center m="auto">
                                                <AntDesign name="mail" size={17} color={"purple"} />
                                            </Center>
                                        </View>

                                        <Text
                                            ml={["5", "5"]}
                                            fontSize={["15"]}
                                            fontWeight="semibold"
                                            color={"#9A55DD"}
                                            mt={["","10"]}
                                        >
                                            info@shadow.properties
                                        </Text>
                                    </Stack>



                                    <Text
                                        ml={["91", "130", "65", "230"]}
                                        mt={["2", "", "", "2"]}
                                        fontSize={["15", "18"]}
                                        color="#988AB4"
                                    >
                                        Feel free to check our answers to
                                    </Text>
                                    <Text
                                        ml={["100", "155", "65", "230"]}
                                        mt={["1", "1"]}
                                        underline={[true, "none"]}
                                        fontSize={["15", "18"]}
                                        color={"#9A55DD"}
                                    >
                                        Frequently Asked Questions
                                    </Text>

                                    <Divider
                                        mt={["720", "625"]}
                                        ml={["70", "50", "", "150"]}
                                        position={"absolute"}
                                        thickness="2"
                                        w={["270", "430", "", ""]}
                                    />

                                    <Text
                                        ml={["90", "150", "", ""]}
                                        mt={["730", "630", "", ""]}
                                        color="#988AB4"
                                        position={"absolute"}
                                        fontSize={"14"}
                                        w={["250", "", "", ""]}
                                    >
                                        copyright @2020 ShadowProperties.
                                    </Text>
                                    <Text
                                        ml={["135", "200", "", ""]}
                                        mt={["750", "655", "", ""]}
                                        color="#988AB4"
                                        position={"absolute"}
                                        fontSize={"14"}
                                    >
                                        All rights reserved
                                    </Text>

                                    <HStack
                                        mt={["770", "685", "", ""]}
                                        ml={["-5", "45", "", ""]}
                                        position="absolute"
                                    >
                                        <Stack
                                            direction={"row"}
                                            ml="129"
                                            position={"absolute"}
                                            space="2"
                                            fontWeight={"semibold"}
                                        >
                                            <Text color="#988AB4">Terms</Text>

                                            <Stack>
                                                <Divider
                                                    orientation="vertical"
                                                    thickness={"2"}
                                                    fontWeight="bold"
                                                    color="#988AB4"
                                                />
                                            </Stack>

                                            <Text ml={"2"} color="#988AB4">
                                                privacy
                                            </Text>

                                            <Stack>
                                                <Divider
                                                    orientation="vertical"
                                                    thickness={"2"}
                                                    fontWeight="bold"
                                                    color="#988AB4"
                                                />
                                            </Stack>

                                            <Text ml={"2"} color="#988AB4">
                                                FAQs
                                            </Text>
                                        </Stack>
                                    </HStack>

                                </VStack>




                                <VStack
                                    position="absolute"
                                    ml={["20", "140"]}
                                >
                                    <VStack mt={["235", "90"]}>


                                        <Input
                                            placeholder="Name|"
                                            borderRadius={10}
                                            borderWidth={2}
                                            w={250}
                                            shadow={"9"}
                                            color={"#9A55DD"}
                                            borderColor={"purple.200"}
                                            mt={55} />

                                        <Input
                                            bg={"purple.100"}
                                            placeholder="Email"
                                            w={250}
                                            mt={15}
                                            borderRadius={10}
                                            borderWidth={2}
                                            borderColor={"purple.200"}
                                        />

                                    </VStack>
                                    <Input
                                        bg={"purple.100"}
                                        placeholder="Message"
                                        w={250}
                                        h={120}
                                        pr={10}
                                        mt={5}
                                        p={4}
                                        borderRadius={15}
                                        borderWidth={2}
                                        borderColor={"purple.100"}
                                    />

                                    <View borderRadius={50}
                                        borderWidth={2}
                                        borderColor={"purple.600"}
                                        w={250}
                                        h={10}

                                        mt="5">
                                        <Text

                                            fontSize={16}
                                            textAlign={"center"}
                                            bold
                                            m="auto"
                                            alignContent={"center"}
                                            color={"purple.600"}
                                        >
                                            Send Message
                                        </Text>
                                    </View>
                                </VStack>





                                {/* mobile  */}


                            </View>
                        </Stack>
                    </Stack>
                </Hidden>
            </View>

        </>
    )
}

export default SixthMbl;



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
        fontFamily: "Poppins-Medium"
    },
    text: {
        fontFamily: "Poppins-Medium"
    }

});



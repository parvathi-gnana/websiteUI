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
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from 'react-native';

const FifthMbl = () => {
    return (
        <>
            <View flex="1" >
                <Hidden only={['lg', 'xl']}>
                    <Stack
                        width={["100%", "100%", "100%", "100%"]}
                        mt={["-210", "0", "200", ""]}


                    >


                        <Image
                            resizeMode="cover"

                            source={require("../assets/price_bg.png")}
                            width={["100%", "100%", "100%", "100%"]}
                            h={["750", "700", "650", "750"]}
                            position="absolute"
                            marginTop={["300", "50", "200", "520"]}
                        />

                        <Text
                            marginTop={["370", "100", "230", "1400"]}
                            fontSize={"3xl"}
                            fontWeight={"bold"}
                            color="purple.700"
                            position="absolute"
                            alignSelf={"center"}
                        >
                            Choose a plan


                        </Text>




                        <View>
                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                nestedScrollEnable={false}
                                horizontal={true}

                            >

                                <View mt={["500", "30"]}>
                                    <Card
                                        borderRadius={20}
                                        w={["72"]}
                                        h={["", "450", "490", ""]}
                                        bg={"white"}
                                        mt={["", "200", "300", ""]}
                                        ml={["38", "100"]}
                                    >
                                        <HStack>
                                            <Heading
                                                mt={2}
                                                ml={6}
                                                fontWeight={"bold"}
                                                color="purple.600"
                                                fontSize={25}
                                            >
                                                $99
                                            </Heading>
                                            <Text mt={3.5} ml={2} color="#999999" fontSize={15}>
                                                (Monthly)
                                            </Text>
                                        </HStack>
                                        <Text
                                            lineHeight={33}
                                            mt={5}
                                            ml={6}
                                            color="#999999"
                                            fontSize={15}
                                        >
                                            {` ✓ 1 User\n✓ 100 Properties/day\n✓ Driving Routes\n✓ 1 Credit = $1.00\n✓ 4*6 Mail = $0.75\n✓ Smart Search = $0.10\n✓ 5 Free Credits\n✓ E-mail Support`}
                                        </Text>
                                        <View mt="10" >
                                        <LinearGradient colors={["#7D2BE9", "#BA47F3"]}
                                            start={[1, 0]}
                                            end={[0, 1]}
                                            style={styles.card}
                                            >
                                            {/* <Button
                                                mt={35}
                                                ml={6}
                                                mr={6}
                                                variant={"outline"}
                                                borderRadius={30}
                                                borderColor={"purple.600"}
                                                colorScheme="purple"
                                            > */}
                                                <Text color={"white"} margin="auto">Buy License for Solo</Text>
                                            
                                        </LinearGradient>
                                        </View>
                                    </Card>
                                </View>
                                <View>


                                    <View mt={["500", "30"]}>
                                        <Card
                                            borderRadius={20}
                                            w={72}
                                            h={["", "450", "490", ""]}
                                            bg={"white"}
                                            mt={["", "200", "300", ""]}
                                            ml={38}
                                            mr={10}

                                        >
                                            <HStack>
                                                <Heading
                                                    mt={2}
                                                    ml={6}
                                                    fontWeight={"bold"}
                                                    color="purple.600"
                                                    fontSize={25}
                                                >
                                                    $299
                                                </Heading>
                                                <Text mt={3.5} ml={2} color="#999999" fontSize={15}>
                                                    (Monthly)
                                                </Text>
                                            </HStack>
                                            <Text
                                                lineHeight={33}
                                                mt={5}
                                                ml={6}
                                                color="#999999"
                                                fontSize={15}
                                            >
                                                {` ✓ 5 User\n✓ 300 Properties/day\n✓ Live DrivingRoutes\n✓ 1 Credit = $1.00\n✓ 4*6 Mail =    $0.75\n✓ Smart Search = $0.10\n✓ 10 Free Credits\n✓ Live Chat Support`}
                                            </Text>
                                            {/* <Button
                                                mt={35}
                                                ml={6}
                                                mr={6}
                                                variant={"outline"}
                                                borderRadius={30}
                                                borderColor={"purple.600"}
                                                colorScheme="purple"
                                            >
                                                <Text color={"purple.600"}>Buy License for Team</Text>
                                            </Button> */}

<View mt="10" >
                                        <LinearGradient colors={["#7D2BE9", "#BA47F3"]}
                                            start={[1, 0]}
                                            end={[0, 1]}
                                            style={styles.card}
                                            >
                                            {/* <Button
                                                mt={35}
                                                ml={6}
                                                mr={6}
                                                variant={"outline"}
                                                borderRadius={30}
                                                borderColor={"purple.600"}
                                                colorScheme="purple"
                                            > */}
                                                <Text color={"white"} margin="auto">Buy License for Solo</Text>
                                            
                                        </LinearGradient>
                                        </View>


                                        </Card>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </Stack>
                </Hidden>
            </View>

        </>
    )
}

export default FifthMbl;
const styles = StyleSheet.create({
    card: {
      
        width: 225,
        height: 40,
          
                      
        borderRadius: 30,
        flexDirection: 'Column',
        mt:35,
       
        mr:6,
        ml: 6,
        color: 'white',
        alignSelf: 'center',
    },
});
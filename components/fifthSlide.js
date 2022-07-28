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
} from "native-base";
import { LinearGradient } from "react-native-svg";
import { StyleSheet } from 'react-native';

const FifthSlide =() => {
    return(
        <>
             <Stack
              width={["100%", "100%", "100%", "100%"]}
              mt={["850", "", "200", ""]}
              style={{flex:1}}
              
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
                display={["true", "true", "true", "none"]}
              >
                Choose a plan
                <br />
               
              </Text>

              {/* Web View */}

              <HStack
                mt={["720"]}
                position={"absolute"}
                display={["none", "none", "none", "true"]}
              >
                {/* Card-1 */}
                <Card
                  borderRadius={20}
                  w={380}
                  h="563"
                  bg={"white"}
                  alignSelf="flex-start"
                  ml={320}
                  mt="-85"
                >
                  <Heading
                    mt={6}
                    ml={6}
                    fontWeight={"bold"}
                    color="purple.600"
                    fontSize={20}
                  >
                    Solo
                  </Heading>
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
                    ✓ 1 User<br></br>✓ 100 Properties/day<br></br>✓ Driving
                    Routes
                    <br></br>✓1 Credit = $1.00<br></br>✓ 4*6 Mail = $0.75
                    <br></br>✓ Smart Search = $0.10<br></br>✓ 5 Free Credits
                    <br></br>✓ E-mail Support
                  </Text>
                 
                 
                  <Button
                    mt={35}
                    ml={6}
                    mr={6}
                    variant={"outline"}
                    borderRadius={30}
                    borderColor={"purple.600"}
                    colorScheme="purple"
                  >
                     
                    <Text color={"purple.600"}>Buy License for Solo</Text>
                   
                  </Button>
                 
                </Card>

                {/* Card-2 */}
                <Card borderRadius={20} w={380} h="563" bg={"white"} mt="-85" ml={95}>

                  <Heading
                    mt={6}
                    ml={6}
                    
                    
                    fontWeight={"bold"}
                    color="purple.600"
                    fontSize={20}
                  >
                    Team
                  </Heading>
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
                    ✓ 5 User<br></br>✓ 300 Properties/day<br></br>✓ Live Driving
                    Routes<br></br>✓ 1 Credit = $1.00<br></br>✓ 4*6 Mail = $0.75
                    <br></br>✓ Smart Search = $0.10<br></br>✓ 10 Free Credits
                    <br></br>✓ Live Chat Support
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

<Pressable>
        {({ isFocused }) => {
          return (
            <View >
              {isFocused ? (
                <View mt="9" ml="6">
                  <LinearGradient
                    colors={['#AD75F8', '#7D2BE9']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0.8, y: 0.5 }}
                    style={styles.card}>
                    <Text color={'white'} alignSelf="center" m="auto">
                      Buy License for Team
                    </Text>
                  </LinearGradient>
                </View>
              ) : (
                <View
                  mt={35}
                  ml={6}
                  mr={6}
                  borderWidth="2"
                  width="270"
                  height="39"
                  alignSelf="center"
                  borderRadius={30}
                  borderColor={'purple.600'}
                  colorScheme="purple">
                  <Text color={'purple.600'} m="auto">
                    Buy License for Team
                  </Text>
                </View>
              )}
            </View>
          );
        }}
      </Pressable>
               
                </Card>
              </HStack>

              {/* Mobile View */}

              <ScrollView
                showsHorizontalScrollIndicator={false}
                nestedScrollEnable={false}
                horizontal={true}
               mt={["","-500","-500",""]}

              >
                {/* Card-1 */}
                <View mt={"500"}>
                <Card
                  borderRadius={20}
                  w={["72"]}
                  h={["","450","490",""]}
                  bg={"white"}
                  mt={["", "200","300",""]}
                  ml={["38", "100"]}
                  display={["true", "true", "true", "none"]}
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
                    ✓ 1 User<br></br>✓ 100 Properties/day<br></br>✓ Driving
                    Routes
                    <br></br>✓ 1 Credit = $1.00<br></br>✓ 4*6 Mail = $0.75
                    <br></br>✓ Smart Search = $0.10<br></br>✓ 5 Free Credits
                    <br></br>✓ E-mail Support
                  </Text>
                  <Button
                    mt={35}
                    ml={6}
                    mr={6}
                    variant={"outline"}
                    borderRadius={30}
                    borderColor={"purple.600"}
                    colorScheme="purple"
                  >
                    <Text color={"purple.600"}>Buy License for Solo</Text>
                  </Button>
                </Card>
                </View>
                <View>

                {/* Card-2 */}
                <View mt="500">
                <Card
                  borderRadius={20}
                  w={72}
                  h={["","450","490",""]}
                  bg={"white"}
                  mt={["", "200","300",""]}
                  ml={38}
                  mr={10}
                  display={["true", "true", "true", "none"]}
                 
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
                    ✓ 5 User<br></br>✓ 300 Properties/day<br></br>✓ Live Driving
                    Routes<br></br>✓ 1 Credit = $1.00<br></br>✓ 4*6 Mail = $0.75
                    <br></br>✓ Smart Search = $0.10<br></br>✓ 10 Free Credits
                    <br></br>✓ Live Chat Support
                  </Text>
                  <Button
                    mt={35}
                    ml={6}
                    mr={6}
                    variant={"outline"}
                    borderRadius={30}
                    borderColor={"purple.600"}
                    colorScheme="purple"
                  >
                    <Text color={"purple.600"}>Buy License for Team</Text>
                  </Button>


                </Card>
                </View>
                </View>
              </ScrollView>
            </Stack>
        </>
    )
}

export default FifthSlide;
    ;
    const styles = StyleSheet.create({
      card: {
        width: 270,
        height: 40,
        borderRadius: 30,
        flexDirection: 'Column',
    
        ml: 6,
        color: 'white',
        alignSelf: 'center',
      },
    });

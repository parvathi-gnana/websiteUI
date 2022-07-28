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
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const SecondWeb = () => {



  return (
    <>
    <View flex="1" flexGrow={2} >
    <Hidden only={["base", "sm", "md"]}>
      <Stack width={["100%", "100%", "100%", "100%"]} mt={["500", "135", "150", "0"]}  >


        <Image
          resizeMode="cover"
          source={require("../assets/Mask Group 1.png")}
          h={["1500", "1700", "1950", "2000"]}
          mt={["0", "-130", "-155", "0"]}
          width={["100%", "100%", "100%", "100%"]}
          position="absolute"
        />

        <Text
          mt={["20", "45", "-25", "50"]}
          fontSize={["md", "lg", "35", "36px"]}
          fontFamily="PoppinsSemiBold"
          color="#7D2BE9"
          position="absolute"
          alignSelf={"center"}
        >
          How ShadowProperties App Works
        </Text>



       

       

        <View
          ml={5}
          w={'730'}
          h="200"
          borderRadius={35}
          mt={['', '', '-50', '160']}
          bg="#FFFFFF4D"
          borderWidth="4"
          borderColor="#FFFFFF"
          alignSelf={'center'}
          position="absolute">
          <View m="auto">
            <LinearGradient
              colors={['#AD75F8', '#7D2BE9']}
              start={[0, 0.5]}
              end={[0.5, 0]}
              style={styles.card1}>
              <Pressable>
                {({ isHovered }) => {
                  return (
                    <View style={{ position: 'absolute' }}>
                      {isHovered ? (
                        <View mt="-79.5" ml="0.1" >
                          <LinearGradient
                            colors={['#FFD777', '#FFBB15']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.card}>
                            <Badge
                              colorScheme="black"
                              alignSelf="Center"
                              borderColor="#FFFFFF80"
                              borderWidth="2"
                              borderRadius="8"
                              width="50"
                              mt="12"
                              bg="#F3B233">
                              <AntDesign
                                name="eyeo"
                                size={28}
                                color="#FFFFFF80"
                              />
                            </Badge>
                            <Text
                             fontFamily='HelveticaNeueLTStdBd'
                              fontSize={'14px'}
                              alignSelf="Center"
                              color={'#7B5800'}
                              mt={'5'}>
                              Accurate Driving
                            </Text>
                            <Text
                              mx="auto"
                              alignSelf="Center"
                              fontSize={'14'}
                              fontFamily='HelveticaNeueLTStdMd'
                              fontWeight={"normal"}
                              color={'#7B5800'}
                              mt="1">
                              It has survived
                            </Text>
                            <Text
                              mx="auto"
                              mt={'0'}
                              alignSelf="Center"
                              fontSize={'14'}
                              fontFamily='HelveticaNeueLTStdMd'
                              fontWeight={"normal"}
                              color={'#7B5800'}>
                              not only five centuries
                            </Text>
                            <Text
                              alignSelf="Center"
                              mt={'2'}
                              fontSize={'14'}
                              fontFamily='HelveticaNeueLTStdMd'
                              fontWeight={"normal"}
                              color={'#7B5800'}>
                              Learn More{' '}
                              <AntDesign
                                name="caretright"
                                size={10}
                                color={'#7B5800'}
                              />
                            </Text>
                          </LinearGradient>
                        </View>
                      ) : (
                        <View ml="50">
                          <Badge
                            colorScheme="black"
                            alignSelf="Center"
                            borderColor="#FFFFFF80"
                            borderWidth="2"
                            borderRadius="8"
                            width="50"
                            mt="3"
                            bg="#8339FF">
                            <AntDesign name="eyeo" size={28} color="#FFFFFF80" />
                          </Badge>
                          <Text
                           fontFamily=' HelveticaNeueLTStdBd'
                            fontSize={'14'}
                            
                            alignSelf="Center"
                            color={'#FFFFFF'}
                            mt={'5'}>
                            Accurate Driving
                          </Text>
                          <Text
                            mx="auto"
                            alignSelf="Center"
                            fontSize={'14px'}
                            color={'#FFFFFF'}
                            fontFamily='HelveticaNeueLTStdMd'
                            fontWeight={"normal"}
                            mt="1">
                            It has survived
                          </Text>
                          <Text
                            mx="auto"
                            mt={'0'}
                            alignSelf="Center"
                            fontSize={'14'}
                            fontFamily='HelveticaNeueLTStdMd'
                            fontWeight={"normal"}
                            color={'#FFFFFF'}>
                            not only five centuries
                          </Text>
                          <Text
                            alignSelf="Center"
                            mt={'1'}
                            fontSize={'14'}
                            fontFamily='HelveticaNeueLTStdMd'
                            fontWeight={"normal"}
                            color={'#FFFFFF'}>
                            Learn More{' '}
                            <AntDesign
                              name="caretright"
                              size={10}
                              color={'#FFFFFF'}
                            />
                          </Text>
                        </View>
                      )}
                    </View>
                  );
                }}
              </Pressable>

              <Pressable>
                {({ isHovered }) => {
                  return (
                    <View style={{ position: 'absolute' }} ml="270">
                      {isHovered ? (
                        <View mt="-79.5" ml="-51">
                          <LinearGradient
                            colors={['#FFD777', '#FFBB15']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.card3}>
                            <Badge
                              colorScheme="black"
                              alignSelf="Center"
                              borderColor="#FFFFFF80"
                              borderWidth="2"
                              borderRadius="8"
                              width="50"
                              mt="16"
                              bg="#F3B233">
                              <Ionicons
                                name="md-search-outline"
                                size={28}
                                color="#FFFFFF80"
                              />
                            </Badge>

                            <Text
                              mx="auto"
                              alignSelf="Center"
                              fontSize={'14'}
                              fontFamily='HelveticaNeueLTStdMd'
                              fontWeight={"normal"}
                              color={'#7B5800'}
                              mt="8">
                              Find Property Owners
                            </Text>
                            <Text
                              mx="auto"
                              mt={'0'}
                              alignSelf="Center"
                              fontSize={'14'}
                              fontFamily='HelveticaNeueLTStdMd'
                              fontWeight={"normal"}
                              color={'#7B5800'}>
                              & Emails/Phones
                            </Text>
                            <Text
                              alignSelf="Center"
                              mt={'0'}
                              fontSize={'14'}
                              fontFamily='HelveticaNeueLTStdMd'
                              fontWeight={"normal"}
                              color={'#7B5800'}>
                              of the Owner

                            </Text>
                          </LinearGradient>
                        </View>
                      ) : (
                        <View>
                          <Badge
                            colorScheme="black"
                            alignSelf="Center"
                            borderColor="#FFFFFF80"
                            borderWidth="2"
                            borderRadius="8"
                            width="50"
                            mt="4"
                            bg="#8339FF">
                            <Ionicons
                              name="md-search-outline"
                              size={28}
                              color="#FFFFFF80"
                            />
                          </Badge>

                          <Text
                            mx="auto"
                            alignSelf="Center"
                            fontSize={'14'}
                            color={'#FFFFFF'}
                            fontFamily='HelveticaNeueLTStdMd'
                            fontWeight={"normal"}
                            mt="5">
                            Find Property Owners
                          </Text>
                          <Text
                            mx="auto"
                            mt={'0'}
                            alignSelf="Center"
                            fontSize={'14'}
                            fontFamily='HelveticaNeueLTStdMd'
                            fontWeight={"normal"}
                            color={'#FFFFFF'}>
                            & Emails/Phones
                          </Text>
                          <Text
                            alignSelf="Center"
                            mt={'0'}
                            fontSize={'14'}
                            fontFamily='HelveticaNeueLTStdMd'
                            fontWeight={"normal"}
                            color={'#FFFFFF'}>
                            of the Owner

                          </Text>
                        </View>
                      )}
                    </View>
                  );
                }}
              </Pressable>

              <Pressable>
                {({ isHovered }) => {
                  return (
                    <View style={{ position: 'absolute' }} ml="490">
                      {isHovered ? (
                        <View mt="-79.5" ml="-25">
                          <LinearGradient
                            colors={['#FFD777', '#FFBB15']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.card4}>
                            <Badge
                              colorScheme="black"
                              alignSelf="Center"
                              borderColor="#FFFFFF80"
                              borderWidth="2"
                              borderRadius="8"
                              width="50"
                              mt="16"
                              bg="#F3B233">
                              <AntDesign
                                name="menufold"
                                size={28}
                                color="#FFFFFF80"
                              />
                            </Badge>

                            <Text
                              mx="auto"
                              alignSelf="Center"
                              fontSize={'14'}
                              color={'#7B5800'}
                              fontFamily='HelveticaNeueLTStdMd'
                              fontWeight={"normal"}
                              mt="8">
                              Detailed Property
                            </Text>
                            <Text
                              mx="auto"
                              mt={'0'}
                              alignSelf="Center"
                              fontSize={'14'}
                              fontFamily='HelveticaNeueLTStdMd'
                              fontWeight={"normal"}
                              color={'#7B5800'}>
                              Listing & CRM
                            </Text>
                            <Text
                              alignSelf="Center"
                              mt={'0'}
                              fontSize={'14'}
                              fontFamily='HelveticaNeueLTStdMd'
                              fontWeight={"normal"}
                              color={'#7B5800'}>
                              for Contacts

                            </Text>
                          </LinearGradient>
                        </View>
                      ) : (
                        <View>
                          <Badge
                            colorScheme="black"
                            alignSelf="Center"
                            borderColor="#FFFFFF80"
                            borderWidth="2"
                            borderRadius="8"
                            width="50"
                            mt="3"
                            bg="#8339FF">
                            <AntDesign
                              name="menufold"
                              size={28}
                              color="#FFFFFF80"
                            />
                          </Badge>

                          <Text
                            mx="auto"
                            alignSelf="Center"
                            fontSize={'14'}
                            color={'#FFFFFF'}
                            fontFamily='HelveticaNeueLTStdMd'
                            fontWeight={"normal"}
                            mt="6">
                            Detailed Property
                          </Text>
                          <Text
                            mx="auto"
                            mt={'0'}
                            alignSelf="Center"
                            fontSize={'12'}
                            fontFamily="HelveticaNeueLTStdMd"
                            fontWeight={"normal"}
                            color={'#FFFFFF'}>
                            Listing & CRM
                          </Text>
                          <Text
                            alignSelf="Center"
                            mt={'0'}
                            fontSize={'14'}
                            fontWeight={"normal"}
                            color={'#FFFFFF'}>
                            for Contacts
                           
                          </Text>
                        </View>
                      )}
                    </View>
                  );
                }}
              </Pressable>
            </LinearGradient>
          </View>
        </View>



       
        <HStack mt="450" ml="300">
        
          <Image source={require("../assets/mobile.png")} h="560" w="320" />
          <Image source={require("../assets/mobile.png")} h="560" w="320" />
          <Image source={require("../assets/mobile.png")} h="560" w="320" />
        </HStack>






        <Image
          mt={["2", "3", "5", "35"]}
          ml={["1", "2", "3", "20"]}
          source={require("../assets/phone_with_background1.png")}
          w={1350}
          h={768}
        />

       

        <Text
          position={"absolute"}
          color={"white"}
          ml={["100", "120", "220", "245"]}
          mt={["30", "50", "100", "1200"]}
          fontSize={["20", "20", "25", "44px"]}
          fontFamily="PoppinsSemiBold"
        >
          The only app you would
        </Text>
        <Text
          position={"absolute"}
          color={"white"}
          ml={["100", "120", "220", "245"]}
          mt={["30", "50", "100", "1250"]}
          fontSize={["20", "20", "25", "44px"]}
          fontFamily="PoppinsSemiBold"
        >
          need as a relator
        </Text>

        <Text
          position={"absolute"}
          ml={["100", "120", "220", "245"]}
          mt={["30", "120", "150", "1350"]}
          fontSize={["10", "10", "10", "16"]}
          lineHeight={20}
          color={"white"}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </Text>

        <Text
          position={"absolute"}
          ml={["100", "120", "220", "245"]}
          mt={["30", "120", "150", "1380"]}
          fontSize={["10", "10", "10", "16"]}
          lineHeight={20}
          color={"white"}
        >
          industry. Lorem Ipsum has been the industry's standard dummy
          text
        </Text>

        <Text
          position={"absolute"}
          ml={["100", "120", "220", "245"]}
          mt={["30", "120", "150", "1410"]}
          fontSize={["10", "10", "10", "16"]}
          lineHeight={20}
          color={"white"}
        >
          ever science the 1500s, when an unknown printer took a galley of
          type
        </Text>

        <Text
          position={"absolute"}
          ml={["100", "120", "220", "245"]}
          mt={["30", "120", "150", "1440"]}
          fontSize={["10", "10", "10", "16"]}
          lineHeight={20}
          color={"white"}
        >
          and scrambled it to make a type specimen book.
        </Text>



        <Button
          ml={["45", "70", "150", "240"]}
          mt={["1270", "1350", "500", "1500"]}
          position="absolute"
          color="warmGray.50"
          variant="outline"
          borderColor="#fff"
          borderRadius={10}
          width={["140", "180", "200", "170"]}
          h={["55", "60", "70", "66"]}
          borderWidth={2}
          alignSelf={Center}
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
                fontSize={12}
                color="white"
                ml={1}
                lineHeight="3"
                mt={2}
              >
                Download on the
              </Text>
              <Text
                color="white"
                ml={1}
                fontSize="20"
                fontWeight={"semibold"}
              >
                App Store
              </Text>
            </VStack>
          </HStack>
        </Button>
        <Button
          ml={["193", "280", "425", "473"]}
          mt={["1270", "1350", "500", "1500"]}
          variant={"outline"}
          position={"absolute"}
          borderRadius={10}
          width={["140", "180", "200", "170"]}
          h={["55", "60", "70", "66"]}
          borderWidth={2}
          borderColor={"white"}
        >
          <HStack mt="1">
            <Entypo name="google-play" size={48} color="white" />
            <VStack mt={"1"}>
              <Text
                fontSize={["8", "8"]}
                fontWeight="semibold"
                mt={3}
                color="white"
                ml={1}
                lineHeight="3"
              >
                ANDROID APP ON
              </Text>
              <Text
                color="white"
                ml={1}
                fontSize={["15", "20"]}
                fontWeight="semibold"
              >
                Google Play
              </Text>
            </VStack>
          </HStack>
        </Button>

      </Stack>
      </Hidden>
      </View>
    </>
  )
}

export default SecondWeb;



const styles = StyleSheet.create({

 
  card: {
    width: 235,
    height: 250,
    borderBottomRightRadius: 0,
    borderRadius: 15,
    flexDirection: 'Column',
    position: 'absolute',
  },
  card1: {
    borderRadius: 25,
    alignSelf: 'center',
    height: 170,
    width: 700,

    flexDirection: 'column',
  },
  card3: {
    width: 235,
    height: 250,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'Column',
    position: 'absolute',
  },
  card4: {
    width: 235,
    height: 250,
    borderBottomLeftRadius: 0,
    borderRadius: 15,
    flexDirection: 'Column',
    position: 'absolute',
  },
});

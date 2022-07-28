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
  Hidden,
  Shadow,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const FourthMbl =() => {
    return(
        <>
        <View Flex="1">
         <Hidden from={"lg"}  till={"xl"} >
            <Stack width={["100%","100%","100%","100%"]} mt={["-270","210","",""]}  >
         
             
            <Image
              source={require("../assets/what_we_offer_bg.png")}
              h={["1000", "1000", "1150", "1750"]}
              width={["100%", "100%", "100%", "100%"]}
              position="absolute"
              mt={["500","250","","0"]}
              
            />

             <Text
              mt={["525","300","50","30"]}
              fontSize={"36px"}
              fontFamily="PoppinsSemiBold"
              color="purple.700"
              position="absolute"
              alignSelf={"center"}
            >
              What We Offer
            </Text>
            
           
             <ScrollView
              showsHorizontalScrollIndicator={false}
              nestedScrollEnable={false}
              horizontal={true}
              mt={["600","390","150",""]}
            >
             <Box>
             <Card 
               w="320"
                  h="350"
                  ml={7}
                  mt={"8"}
                  mb="3"
                  borderRadius={10}
                  bg="purple.100"
                 >

                <Heading ml={5} mt={12} color="#6D549F" fontSize={"24px"} fontFamily="HelveticaNeueLTStdBd">
                    Pin Properties
                  </Heading>
                    <Text
                    mt={2}
                    ml={5}
                    color="#988AB4"
                    fontFamily={"HelveticaNeueLTStdMd"}
                    fontSize={"15px"}
                    fontStyle="bold"
                    width={"260"}
                    textAlign="justify"
                  >
                  Pin the property you are interested in while you are on your route to finding properties. After signing up for ShadowProperties App, you can pin a property on the app when you reach the location. Pinning the properties helps you to the next steps.
                  </Text>
                  </Card>
                     <Card
                  position={"absolute"}
                  bg={"#8339FF"}
                  h="12"
                  w="12"
                  ml="160"
                  borderRadius={16}
                  borderColor={"#8339FF80"}
                  borderWidth={12}
                >
                  <Image
                    h="7"
                    w="7"
                  
                    ml={["-3","-3"]}
                    mt={["-3.5","-3.5"]}
                    source={require("../assets/pin_properties.png")}
                    position={"absolute"}
                  />
                </Card>
              </Box>

              <Box>
                <Card
                  w="320"
                  h="350"
                  ml={7}
                  mt={"8"}
                  mb="3"
                  borderRadius={10}
                  bg="purple.100"
                 
                >
                  <Heading ml={5} mt={12} color="#6D549F" fontSize={"24px"} fontFamily="HelveticaNeueLTStdBd">
                    Bulk Add Properties
                  </Heading>
                  <Text
                    mt={2}
                    ml={5}
                    color="#988AB4"
                              fontFamily={"HelveticaNeueLTStdMd"}
                              fontSize={"15px"}
                              fontStyle="bold"
                              width={"260"}
                              textAlign="justify"
                  >
                  Select by drawing a line around the area you choose on the map while using the app. Whatever properties are listed in the area are shown and you can just add those properties to your list for further proceedings. You can bulk add the properties.
                  </Text>
                </Card>
                <Card
                  position={"absolute"}
                  bg={"#8339FF"}
                  h="12"
                  w="12"
                  ml="160"
                  mt={"0"}
                  borderRadius={16}
                  borderColor={"#8339FF80"}
                  borderWidth={12}
                >
                  <Image
                    alignSelf={"center"}
                    h="8"
                    w="8"
                    ml={["-1","-1"]}
                    mt={["-3.5","-3.5"]}
                    source={require("../assets/bulk_add.png")}
                    position={"absolute"}
                  />
                </Card>
              </Box>

<Box>
                <Card
                  w="320"
                  h="350"
                  ml={7}
                  mt={"8"}
                  mb="3"
                  borderRadius={10}
                  bg="purple.100"
                >
                  <Heading ml={5} mt={12} color="#6D549F" fontSize={"24px"} fontFamily="HelveticaNeueLTStdBd">
                    Parcel Lookup
                  </Heading>
                  <Text
                    mt={2}
                    ml={5}
                    color="#988AB4"
                    fontFamily={"HelveticaNeueLTStdMd"}
                    fontSize={"15px"}
                    fontStyle="bold"
                    width={"260"}
                    textAlign="justify"
                  >
                  Every detail of a property is displayed when you pick a property. Get all parcel details of any property from the county, including structure, deeds, taxes, assessments, and valuations.
                  </Text>
                </Card>
                <Card
                  position={"absolute"}
                  bg={"#8339FF"}
                  h="12"
                  w="12"
                  ml="160"
                  mt={"0"}
                  borderRadius={16}
                  borderColor={"#8339FF80"}
                  borderWidth={12}
                >
                  <Image
                    alignSelf={"center"}
                    h="8"
                    w="8"
                    mt={"-4"}
                    ml={"2"}
                    source={require("../assets/parcel_lookup.png")}
                    position={"absolute"}
                  />
                </Card>
             
              </Box>

{/* Card-4 */}
              <Box>
                <Card
                  w="320"
                  h="350"
                  ml={7}
                  mt={"8"}
                  mb="3"
                  borderRadius={10}
                  bg="purple.100"
                >
                  <Heading ml={5} mt={12} color="#6D549F" fontSize={"24px"} fontFamily="HelveticaNeueLTStdBd">
                    Owner Lookup
                  </Heading>
                  <Text
                    mt={2}
                    ml={5}
                    color="#988AB4"
                    fontFamily={"HelveticaNeueLTStdMd"}
                    fontSize={"15px"}
                    fontStyle="bold"
                    width={"260"}
                    textAlign="justify"
                  >
                   For contacting a property owner’s details for a property you like, look no further than ShadowProperties. Signup for smooth sailing of your real estate business. Get a property's owner's name and postal address for sending postcards and interacting with a deal.
                  </Text>
                </Card>

                <Card
                  position={"absolute"}
                  bg={"#8339FF"}
                  h="12"
                  w="12"
                  ml="160"
                  mt={"0"}
                  borderRadius={16}
                  borderColor={"#8339FF80"}
                  borderWidth={12}
                >
                  <Image
                    alignSelf={"center"}
                    h="8"
                    w="8"
                    mt={"-4"}
                    ml={"-1"}
                    source={require("../assets/owner_lookup.png")}
                    position={"absolute"}
                  />
                </Card>
              </Box>

              {/* Card-5 */}
              <Box>
                <Card
                  w="320"
                  h="350"
                  ml={7}
                  mt={"8"}
                  mb="3"
                  mr={"9"}
                  borderRadius={10}
                  bg="purple.100"
                >
                  <Heading ml={5} mt={12} color="#6D549F" fontSize={"24px"} fontFamily="HelveticaNeueLTStdBd">
                    Smart Search
                  </Heading>
                  <Text
                    mt={2}
                    ml={5}
                    color="#988AB4"
                    fontFamily={"HelveticaNeueLTStdMd"}
                    fontSize={"15px"}
                    fontStyle="bold"
                    width={"260"}
                    textAlign="justify"
                  >
                    Access further prime information about the owner such as phone number, email address for early hold of the property you choose to not miss. Get the benefits from the customised smart search at your finger tips and interact further.
                  </Text>
                </Card>
                <Card
                  position={"absolute"}
                  bg={"#8339FF"}
                  h="12"
                  w="12"
                  ml="160"
                  mt={"0"}
                  borderRadius={16}
                  borderColor={"#8339FF80"}
                  borderWidth={12}
                >
                  <Image
                    alignSelf={"center"}
                    h="8"
                    w="8"
                    mt={"-4"}
                    ml={"1"}
                    source={require("../assets/smart_search.png")}
                    position={"absolute"}
                  />
                </Card>
              </Box>

              {/* Card-6 */}
              <Box>
                <Card
                  w="320"
                  h="350"
                  ml={7}
                  mt={"8"}
                  mb="3"
                  mr={"8"}
                  borderRadius={10}
                  bg="purple.100"
                >
                  <Heading ml={5} mt={12} color="#6D549F" fontSize={"24px"} fontFamily="HelveticaNeueLTStdBd">
                    Automated Mails
                  </Heading>
                  <Text
                    mt={2}
                    ml={5}
                    color="#988AB4"
                    fontFamily={"HelveticaNeueLTStdMd"}
                    fontSize={"15px"}
                    fontStyle="bold"
                    width={"260"}
                    textAlign="justify"
                  >
                   This is the most exclusive and exemplerily beneficial feature for any realtor as you do not have to particularly manually schedule your emails to your prospects. You can configure automated periodic follow-ups to ensure a response.
                  </Text>
                </Card>
                <Card
                  position={"absolute"}
                  bg={"#8339FF"}
                  h="12"
                  w="12"
                  ml="160"
                  mt={"0"}
                  borderRadius={16}
                  borderColor={"#8339FF80"}
                  borderWidth={12}
                >
                  <Image
                    alignSelf={"center"}
                    h="8"
                    w="8"
                    mt={"-4"}
                    ml={"1"}
                    source={require("../assets/automated_mails.png")}
                    position={"absolute"}
                  />
                </Card>
              </Box>

            </ScrollView>

 <ScrollView
              showsHorizontalScrollIndicator={false}
              nestedScrollEnable={false}
              horizontal={true}
              mt={23}
            >
              <HStack>
              <Box>
                <Card
                  w="320"
                  h="350"
                  ml={7}
                  mt={"8"}
                  mb="3"
                  mr={"8"}
                  borderRadius={10}
                  bg="purple.100"
                >
                  <Heading ml={5} mt={12} color="#6D549F" fontSize={"24px"} fontFamily="HelveticaNeueLTStdBd">
                    Automated E-Mails
                  </Heading>
                  <Text
                    mt={2}
                    ml={5}
                    color="#988AB4"
                    fontFamily={"HelveticaNeueLTStdMd"}
                    fontSize={"15px"}
                    fontStyle="bold"
                    width={"260"}
                    textAlign="justify"
                  >
                 This is the most exclusive and exemplerily beneficial feature for any realtor as you do not have to particularly manually schedule your emails to your prospects. You can configure automated periodic follow-ups to ensure a response.
                  </Text>
                </Card>
                <Card
                  position={"absolute"}
                  bg={"#8339FF"}
                  h="12"
                  w="12"
                  ml="160"
                  mt={"0"}
                  borderRadius={16}
                  borderColor={"#8339FF80"}
                  borderWidth={12}
                >
                  <Image
                    alignSelf={"center"}
                    h="8"
                    w="8"
                    mt={"-4"}
                    ml={"1"}
                    source={require("../assets/automated_mails.png")}
                    position={"absolute"}
                  />
                </Card>
              </Box>

              {/* Card-8 */}
              <Box>
                <Card
                  w="320"
                  h="350"
                  ml={7}
                  mt={"8"}
                  mb="3"
                  mr={"8"}
                  borderRadius={10}
                  bg="purple.100"
                >
                  <Heading ml={5} mt={12} color="#6D549F" fontSize={"24px"} fontFamily="HelveticaNeueLTStdBd">
                    Live Driving Monitor
                  </Heading>
                  <Text
                    mt={2}
                    ml={5}
                    color="#988AB4"
                    fontFamily={"HelveticaNeueLTStdMd"}
                    fontSize={"15px"}
                    fontStyle="bold"
                    width={"260"}
                    textAlign="justify"
                  >
                   Being the USP of all our services offered at ShadowProperties, experience how our exclusive  live tracking can improve your real estate with in no time. Monitor your team members driving and distance in real-time as they drive around and find properties for you.
                  </Text>
                </Card>
                <Card
                  position={"absolute"}
                  bg={"#8339FF"}
                  h="12"
                  w="12"
                  ml="160"
                  mt={"0"}
                  borderRadius={16}
                  borderColor={"#8339FF80"}
                  borderWidth={12}
                >
                  <Image
                    alignSelf={"center"}
                    h="8"
                    w="8"
                    mt={"-4"}
                    ml={"1"}
                    source={require("../assets/live_driving.png")}
                    position={"absolute"}
                  />
                </Card>
              </Box>

              {/* Card-9 */}
              <Box>
                <Card
                  w="320"
                  h="350"
                  ml={7}
                  mt={"8"}
                  mb="3"
                  mr={"8"}
                  borderRadius={10}
                  bg="purple.100"
                >
                  <Heading ml={5} mt={12} color="#6D549F" fontSize={"24px"} fontFamily="HelveticaNeueLTStdBd">
                    Driving Routes
                  </Heading>
                  <Text
                    mt={2}
                    ml={5}
                    color="#988AB4"
                    fontFamily={"HelveticaNeueLTStdMd"}
                    fontSize={"15px"}
                    fontStyle="bold"
                    width={"260"}
                    textAlign="justify"
                  >
                   Fret not about losing or missing a property you liked, every route you had been through is saved. All the driving routes are saved for keeping track of driving route, distance and the properties added while driving.
                  </Text>
                </Card>
                <Card
                  position={"absolute"}
                  bg={"#8339FF"}
                  h="12"
                  w="12"
                  ml="160"
                  mt={"0"}
                  borderRadius={16}
                  borderColor={"#8339FF80"}
                  borderWidth={12}
                >
                  <Image
                    alignSelf={"center"}
                    h="8"
                    w="8"
                    mt={"-4"}
                    ml={"1"}
                    source={require("../assets/driving_routes.png")}
                    position={"absolute"}
                  />
                </Card>
              </Box>
              {/* Card-10 */}
              <Box>
                <Card
                  w="320"
                  h="350"
                  ml={7}
                  mt={"8"}
                  mb="3"
                  mr={"8"}
                  borderRadius={10}
                  bg="purple.100"
                >
                  <Heading ml={5} mt={12} color="#6D549F" fontSize={"24px"} fontFamily="HelveticaNeueLTStdBd">
                    User Roles
                  </Heading>
                  <Text
                    mt={2}
                    ml={5}
                    color="#988AB4"
                    fontFamily={"HelveticaNeueLTStdMd"}
                    fontSize={"15px"}
                    fontStyle="bold"
                    width={"260"}
                    textAlign="justify"
                  >
                   Manage your purpose with ShadowProperties under three user roles namely Owner, Admin and User. These three user roles with different access controls to manage your team according to your business hierarchy.
                  </Text>
                </Card>
                <Card
                  position={"absolute"}
                  bg={"#8339FF"}
                  h="12"
                  w="12"
                  ml="160"
                  mt={"0"}
                  borderRadius={16}
                  borderColor={"#8339FF80"}
                  borderWidth={12}
                >
                  <Image
                    alignSelf={"center"}
                    h="8"
                    w="8"
                    mt={"-4"}
                    ml={"1"}
                    source={require("../assets/driving_routes.png")}
                    position={"absolute"}
                  />
                </Card>
              </Box>

              {/* Card-11 */}
              <Box>
                <Card
                  w="320"
                  h="350"
                  ml={7}
                  mt={"8"}
                  mb="3"
                  mr={"8"}
                  borderRadius={10}
                  bg="purple.100"
                >
                  <Heading ml={5} mt={12} color="#6D549F" fontSize={"24px"} fontFamily="HelveticaNeueLTStdBd">
                    Pipelines
                  </Heading>
                  <Text
                    mt={2}
                    ml={5}
                    color="#988AB4"
                              fontFamily={"HelveticaNeueLTStdMd"}
                              fontSize={"15px"}
                              fontStyle="bold"
                              width={"260"}
                              textAlign="justify"
                  >
                  What do you mean by Pipelines in an app? Pipelines help you to categorize your every move in your real estate journey. Save every step you take from pinning a property to closing the deal. You can categorize your steps under customized named listicles. Keep track of your properties based on the negotiation status, add/remove pipelines and move property cards to the suitable pipeline.
                  </Text>
                </Card>
                <Card
                  position={"absolute"}
                  bg={"#8339FF"}
                  h="12"
                  w="12"
                  ml="160"
                  mt={"0"}
                  borderRadius={16}
                  borderColor={"#8339FF80"}
                  borderWidth={12}
                >
                  <Image
                    alignSelf={"center"}
                    h="8"
                    w="8"
                    mt={"-4"}
                    ml={"1"}
                    source={require("../assets/pipelines.png")}
                    position={"absolute"}
                  />
                </Card>
              </Box>

              {/* Card-12 */}
              <Box>
                <Card
                  w="320"
                  h="345"
                  ml={7}
                  mt={"8"}
                  mb="3"
                  mr={"8"}
                  borderRadius={10}
                  bg="purple.100"
                >
                  <Heading ml={5} mt={12} color="#6D549F" fontSize={"24px"} fontFamily="HelveticaNeueLTStdBd">
                    Analytics
                  </Heading>
                  <Text
                    mt={2}
                    ml={5}
                    color="#988AB4"
                    fontFamily={"HelveticaNeueLTStdMd"}
                    fontSize={"15px"}
                    fontStyle="bold"
                    width={"260"}
                    textAlign="justify"
                  >
                   Analytics will help you understand your business performance during the course of time. ShadowProperties provides you the periodical comprehensive analytics to make you aware of your day-to-day performance, ergo supports you while taking complicated business decisions.
                  </Text>
                </Card>
                <Card
               position={"absolute"}
                  bg={"#8339FF"}
                  h="12"
                  w="12"
                  ml="160"
                  mt={"0"}
                  borderRadius={16}
                  borderColor={"#8339FF80"}
                  borderWidth={12}
                >
                  <Image
                    alignSelf={"center"}
                    h="8"
                    w="8"
                    mt={"-4"}
                    ml={"1"}
                    source={require("../assets/analytics.png")}
                    position={"absolute"}
                  />
                </Card>
              </Box>
              </HStack>
            </ScrollView>


           
          </Stack>
           </Hidden>
          </View>
        </>
    )
}

export default FourthMbl;


// import React from "react";
// import {
//   Text,
//   HStack,
//   Center,
//   Heading,
//   NativeBaseProvider,
//   VStack,
//   Box,
//   Button,
//   Image,
//   AspectRatio,
//   Pressable,
//   IconButton,
//   Card,
//   Icon,
//   Input,
//   Divider,
//   Flex,
//   Stack,
//   ScrollView,
//   Menu,
//   HamburgerIcon,
//   View,
//   Badge,
//   Avatar,
//   Shadow,
// } from "native-base";
// import { Entypo } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";

// const ThirdSlide =() => {
//     return(
//         <>
            
//             <Stack width={["100%", "100%", "100%", "100%"]} position="absolute">
//               <Image
//                 mt={["2", "3", "5", "10"]}
//                 ml={["1", "2", "3", "20"]}
//                 source={require("../assets/phone_with_background1.png")}
//                 w={1350}
//                 h={768}
//                 display={["none", "none", "none", "true"]}
//               />

//               {/* {/ Mobile /} */}
              
//               <Card
//                 backgroundColor={"purple.600"}
//                 w={["340", "500", "700", "1125"]}
//                 h={["435", "520", "500", "640"]}
//                 ml={["4", "7", "3", "4"]}
//                 mr={["4", "5", "3", "4"]}
//                 alignSelf="center"
//                 mt={["130", "100", "150", "5"]}
//                 mb={["20", "0", "20", ""]}
//                 borderRadius={["25", "25", "25", "35"]}
//                 display={["true", "true", "true", "none"]}
//               >
//                 <Text
//                   display={["true", "true", "true", "none"]}
//                   position={"absolute"}
//                   color={"white"}
//                   mt={["25", "50", "5", "150"]}
//                   fontSize={["28", "30", "35", "30"]}
//                   fontWeight={["bold", "bold", "bold", "bold"]}
//                   ml={["", "65", "150", ""]}
//                 >
//                   The only app you would
//                 </Text>
//                 <Text
//                   alignSelf={"center"}
//                   position={"absolute"}
//                   color={"white"}
//                   display={["true", "true", "true", "none"]}
//                   mt={["60", "85 ", "60", "150"]}
//                   fontSize={["28", "30", "35", "30"]}
//                   fontWeight={["bold", "bold", "bold", "bold"]}
//                 >
//                   need as relator
//                 </Text>

//                 <Text
//                   alignSelf={"center"}
//                   position={"absolute"}
//                   display={["true", "true", "true", "none"]}
//                   mt={["90", "120", "100", "250"]}
//                   fontSize={["14", "18", "25", "10"]}
//                   lineHeight={25}
//                   color={"white"}
//                 >
//                   <br></br>Lorem Ipsum is simply dummy text of the prin-
//                   <br></br>ting and typesetting industry. Lorem Ipsum has
//                   <br></br>been the industry's standard dummy text ever
//                   <br></br>science the 1500s, when an unknown printer took
//                   <br></br>a galley of type and scrambled it to make a type
//                 </Text>
//                 <Text
//                   alignSelf={"center"}
//                   position={"absolute"}
//                   color={"white"}
//                   display={["true", "true", "true", "none"]}
//                   mt={["239", "270", "250", "150"]}
//                   fontSize={["14", "18", "25", "10"]}
//                   lineHeight={25}
//                 >
//                   specimen book.
//                 </Text>
//               </Card>

//               {/* {/ Web /} */}
             
//               <Text
//                 position={"absolute"}
//                 display={["none", "none", "none", "true"]}
//                 color={"white"}
//                 ml={["100", "120", "220", "245"]}
//                 mt={["30", "50", "100", "220"]}
//                 fontSize={["20", "20", "25", "44px"]}
//                 fontFamily="PoppinsSemiBold"
//               >
//                 The only app you would
//               </Text>
//               <Text
//                 position={"absolute"}
//                 display={["none", "none", "none", "true"]}
//                 color={"white"}
//                 ml={["100", "120", "220", "245"]}
//                 mt={["30", "50", "100", "270"]}
//                 fontSize={["20", "20", "25", "44px"]}
//                 fontFamily="PoppinsSemiBold"
//               >
//                 need as a relator
//               </Text>
              
//               <Text
//                 position={"absolute"}
//                 display={["none", "none", "none", "true"]}
//                 ml={["100", "120", "220", "245"]}
//                 mt={["30", "120", "150", "360"]}
//                 fontSize={["10", "10", "10", "16"]}
//                 lineHeight={20}
//                 color={"white"}
//               >
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//               </Text>

//               <Text
//                 position={"absolute"}
//                 display={["none", "none", "none", "true"]}
//                 ml={["100", "120", "220", "245"]}
//                 mt={["30", "120", "150", "390"]}
//                 fontSize={["10", "10", "10", "16"]}
//                 lineHeight={20}
//                 color={"white"}
//               >
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text
//               </Text>

//               <Text
//                 position={"absolute"}
//                 display={["none", "none", "none", "true"]}
//                 ml={["100", "120", "220", "245"]}
//                 mt={["30", "120", "150", "420"]}
//                 fontSize={["10", "10", "10", "16"]}
//                 lineHeight={20}
//                 color={"white"}
//               >
//                 ever science the 1500s, when an unknown printer took a galley of
//                 type
//               </Text>

//               <Text
//                 position={"absolute"}
//                 display={["none", "none", "none", "true"]}
//                 ml={["100", "120", "220", "245"]}
//                 mt={["30", "120", "150", "450"]}
//                 fontSize={["10", "10", "10", "16"]}
//                 lineHeight={20}
//                 color={"white"}
//               >
//                 and scrambled it to make a type specimen book.
//               </Text>

             
              
//               <Button
//                 ml={["45", "70", "150", "240"]}
//                 mt={["450", "450", "500", "525"]}
//                 position="absolute"
//                 color="warmGray.50"
//                 variant="outline"
//                 borderColor="#fff"
//                 borderRadius={10}
//                 width={["140", "180", "200", "170"]}
//                 h={["55", "60", "70", "66"]}
//                 borderWidth={3}
//                 alignSelf={Center}
//                 _text={{
//                   fontSize: "md",
//                   fontWeight: "medium",
//                   color: "warmGray.50",
//                   letterSpacing: "lg",
//                 }}
//               >
//                 <HStack>
//                   <Text mt={"2"}>
//                     <AntDesign name="apple1" size={36} color="white" />
//                   </Text>
//                   <VStack>
//                     <Text
//                       fontSize={12}
//                       color="white"
//                       ml={1}
//                       lineHeight="3"
//                       mt={2}
//                     >
//                       Download on the
//                     </Text>
//                     <Text
//                       color="white"
//                       ml={1}
//                       fontSize="20"
//                       fontWeight={"semibold"}
//                     >
//                       App Store
//                     </Text>
//                   </VStack>
//                 </HStack>
//               </Button>
//               <Button
//                 ml={["193", "280", "425", "473"]}
//                 mt={["450", "450", "500", "525"]}
//                 variant={"outline"}
//                 position={"absolute"}
//                 borderRadius={10}
//                 width={["140", "180", "200", "170"]}
//                 h={["55", "60", "70", "66"]}
//                 borderWidth={3}
//                 borderColor={"white"}
//               >
//                 <HStack mt="1">
//                   <Entypo name="google-play" size={48} color="white" />
//                   <VStack mt={"1"}>
//                     <Text
//                       fontSize={["8", "8"]}
//                       fontWeight="semibold"
//                       mt={3}
//                       color="white"
//                       ml={1}
//                       lineHeight="3"
//                     >
//                       ANDROID APP ON
//                     </Text>
//                     <Text
//                       color="white"
//                       ml={1}
//                       fontSize={["15", "20"]}
//                       fontWeight="semibold"
//                     >
//                       Google Play
//                     </Text>
//                   </VStack>
//                 </HStack>
//               </Button>
//             </Stack>
         

//         </>
//     )
// }

// export default ThirdSlide;
//     ;


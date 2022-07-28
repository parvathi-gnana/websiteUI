import { React, useEffect, useState } from "react";
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

// import First from "./components/first";
import SecondSlide from "./components/secondSlide";
// import FourthSlide from "./components/fourthSliderename";

import FifthSlide from "./components/fifthSlide";
import SixthSlide from "./components/sixthSlide";
import Firstmbl from "./components/firstMbl";
import FirstWeb from "./components/firstWeb";
import SecondMbl from "./components/SecondMbl";
import SecondWeb from "./components/SecondWeb";
import FourthMbl from "./components/fourthSlide";
import FifthMbl from "./components/fifthMbl";
import SixthMbl from "./components/sixthMbl";
import TestSecondMbl from "./components/test";
import FifthWeb from "./components/fifthWeb";
import SixthWeb from "./components/sixthWeb";
import * as Font from "expo-font";

import { useFonts } from 'expo-font';
import FourthWeb from "./components/fourthWeb";



const App = () => {

  useEffect(() => {
    Font.loadAsync({
      PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
      // HelveticaNeueLTStdMd: require("./assets/fonts/HelveticaNeueLTStd-Md.otf"),
      HelveticaNeueLTStdBd: require("./assets/fonts/HelveticaNeueLTStd-Bd.otf"),

    })
  }, [])


  const [loaded] = useFonts({
    HelveticaNeueLTStdMd: require("./assets/fonts/HelveticaNeueLTStd-Md.otf"),
  });

  if (!loaded) {
    return null;
  }



  return (
    <NativeBaseProvider>
        <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnable={false}
                vertical={true}
               >
                

      {/* <First /> */}
      {/* <SecondSlide />
      <FourthSlide />
      <FourthWeb/>
      <FifthSlide />
      <SixthSlide /> */}
      {/* <Firstmbl/>
      <SecondMbl/>
      <FourthMbl/>
      <FifthMbl/>
      <SixthMbl/> */}
      <FirstWeb/>
      <SecondWeb/>
      <FourthWeb/>
      <FifthWeb/>
      <SixthWeb/>
  
      </ScrollView>
    </NativeBaseProvider>
  )
};

export default App;

import * as React from 'react';
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
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const SecondMbl = () => {
  return (
    <>
      <View flex="1">
        <Hidden only={['md','lg', 'Xl']} >
          <Stack
            width={['100%', '100%', '100%', '100%']}
            mt={['100', '-300', '150', '']}>
            <Image
              resizeMode="cover"
              source={require('../assets/Mask Group 1.png')}
              h={['1300', '1700', '1950', '2000']}
              mt={['0', '-130', '-155', '0']}
              width={['100%', '100%', '100%', '100%']}
              position="absolute"
            />

            <Text
              mt={['10', '-50', '60', '78']}
              fontSize={['25', '30', '2xl', '4xl']}
              fontWeight={'bold'}
              color="#7D2BE9"
              position="absolute"
              alignSelf={'center'}>
              How Shadow Properties
            </Text>
            <Text
              mt={['70', '0', '60', '78']}
              fontSize={['25', '30', '2xl', '4xl']}
              fontWeight={'bold'}
              color="purple.700"
              position="absolute"
              alignSelf={'center'}>
              App Works
            </Text>

            <View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                nestedScrollEnable={false}
                horizontal={true}
                h="400">
                <View ml="60" mt={["150","125"]} >
                  <Card
                    w={['260', '380', '300', '300']}
                    h={['145', '230', '230', '230']}
                    borderRadius={20}>
                    <Card
                      w={['245', '360', '270', '270']}
                      h={['130', '210', '200', '200']}
                      borderRadius={20}
                      bg={'purple.600'}
                      mt={["-2","-2"]}
                      alignSelf="center">
                      <Badge
                        colorScheme="black"
                        alignSelf="center"
                        borderColor="#FFFFFF80"
                        borderWidth="2"
                        borderRadius="8"
                        bg="#8339FF"
                        width={['12', '50', '50', '50']}
                        mt={['-1', '5', '', '']}>
                        <AntDesign
                          name="eyeo"
                          size={28}
                          color="#FFFFFF80"
                          style={{ alignSelf: 'center' }}
                        />
                      </Badge>
                      <Text
                        alignSelf={'center'}
                        fontWeight={'bold'}
                        color={'white'}
                        mt={['2', '6', '6', '6']}
                        fontSize={['12', '18', '', '']}>
                        Accurate Driving
                      </Text>
                      <Text
                        fontSize={['12', '18', '', '']}
                        alignSelf={'center'}
                        color={'white'}>
                        It has survived
                      </Text>
                      <Text
                        fontSize={['12', '18', '', '']}
                        alignSelf={'center'}
                        color={'white'}>
                        not only five centuries
                      </Text>
                      <Text
                        fontSize={['12', '18', '', '']}
                        alignSelf={'center'}
                        color={'white'}>
                        Learn More{' '}
                        <AntDesign name="caretright" size={12} color="white" />
                      </Text>
                    </Card>
                  </Card>
                </View>

                <View mt={["150","125"]}>
                  <Card
                    w={['260', '380', '300', '300']}
                    h={['145', '230', '230', '230']}
                    borderRadius={20}
                    ml={["5","10"]}
                    position="relative">
                       
                    <Card
                      w={['245', '360', '270', '270']}
                      h={['130', '210', '200', '200']}
                      borderRadius={20}
                      bg={'purple.600'}
                      mt={["-2","-2"]}
                      alignSelf="center">
                      <Badge
                        mt={['', '5', '', '']}
                        colorScheme="black"
                        alignSelf="center"
                        borderColor="#FFFFFF80"
                        borderWidth="2"
                        borderRadius="8"
                        bg="#8339FF"
                        width={['12', '50', '50', '50']}>
                        <Ionicons
                          name="md-search-outline"
                          size={28}
                          color="#FFFFFF80"
                        />
                      </Badge>
                      <Text
                        mx="auto"
                        alignSelf="Center"
                        color={'white'}
                        mt={['4', '8', '8', '8']}
                        fontSize={['', '18', '', '']}>
                        Find Property Owners
                      </Text>
                      <Text
                        mx="auto"
                        alignSelf="Center"
                        color={'white'}
                        fontSize={['', '18', '', '']}>
                        & Emails/Phones of the Owner
                      </Text>
                    </Card>
                  </Card>
                </View>
                <View mt={["150","125"]}>
                  <Card
                    w={['260', '380', '300', '300']}
                    h={['145', '230', '230', '230']}
                    ml={["5","10"]}
                    borderRadius={20}>
                    <Card
                      w={['245', '360', '270', '270']}
                      h={['130', '210', '200', '200']}
                      borderRadius={20}
                      bg={'purple.600'}
                      mt={["-2","-2"]}
                      alignSelf="center">
                      <Badge
                        colorScheme="black"
                        alignSelf="Center"
                        borderColor="#FFFFFF80"
                        borderWidth="2"
                        bg="#8339FF"
                        borderRadius="8"
                        width="50"
                        mt={['', '5', '', '']}>
                        <AntDesign
                          name="menufold"
                          size={28}
                          color="#FFFFFF80"
                        />
                      </Badge>
                      <Text
                        mx="auto"
                        alignSelf="Center"
                        color={'#FFFFFF'}
                        mt={['2', '8', '8', '8']}
                        fontSize={['', '18', '', '']}>
                        Detailed Property
                      </Text>
                      <Text
                        mx="auto"
                        alignSelf="Center"
                        color={'#FFFFFF'}
                        fontSize={['', '18', '', '']}>
                        {' '}
                        Listing & CRM{' '}
                      </Text>
                      <Text
                        mx="auto"
                        alignSelf="Center"
                        color={'#FFFFFF'}
                        fontSize={['', '18', '', '']}>
                        
                        for Contacts
                      </Text>
                    </Card>
                  </Card>
                </View>
              </ScrollView>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              nestedScrollEnable={true}
              horizontal={true}
              
              mt={['-25', '10', '-2', '400']}
              ml={['5', '10', '2', '265']} >
              <Image source={require('../assets/mobile.png')} h="560" w="320" />
              <Image source={require('../assets/mobile.png')} h="560" w="320" />
              <Image source={require('../assets/mobile.png')} h="560" w="320" />
            </ScrollView>
          </Stack>


          <Card
            backgroundColor={'purple.600'}
           style={{position:"absolute"}}
            w={['340', '500', '700', '1125']}
            h={['435', '520', '500', '640']}
         mt={["550",'750','','']}
            alignSelf="center"
            borderRadius={['25', '25', '25', '35']}>
            <Text
              position={'absolute'}
              color={'white'}
              mt={['25', '50', '5', '150']}
              fontSize={['28', '30', '35', '30']}
              fontWeight={['bold', 'bold', 'bold', 'bold']}
              ml={['', '65', '150', '']}>
              The only app you would
            </Text>
            <Text
              alignSelf={'center'}
              position={'absolute'}
              color={'white'}
              mt={['60', '85 ', '60', '150']}
              fontSize={['28', '30', '35', '30']}
              fontWeight={['bold', 'bold', 'bold', 'bold']}>
              need as relator
            </Text>
                <Text
              alignSelf={'center'}
              position={'absolute'}
              mt={['90', '120', '100', '250']}
              fontSize={['14', '18', '25', '10']}
              lineHeight={25}
              color={'white'}>
              {`\nLorem Ipsum is simply dummy text of the prin\nting and typesetting industry. Lorem Ipsum has\nbeen the industry's standard dummy text ever\nscience the 1500s, when an unknown printer took\n a galley of type and scrambled it to make a type`}
            </Text>
              <Text
              alignSelf={'center'}
              position={'absolute'}
              color={'white'}
              mt={['239', '270', '250', '150']}
              fontSize={['14', '18', '25', '10']}
              lineHeight={25}>
              specimen book.
            </Text>
         
            </Card>
<Button
position="absolute"
          width={['140', '180', '200', '170']}
            h={['55', '60', '70', '66']}
           ml={['45', '70', '150', '240']}
            mt={['1000', '1100', '500', '500']}
            color="warmGray.50"
             variant="outline"
            borderColor="#fff"
            borderRadius={10}
             borderWidth={2}
             _text={{
              fontSize: 'md',
              fontWeight: 'medium',
              color: 'warmGray.50',
              letterSpacing: 'lg',
            }}
              >
              <HStack>
              <View mt={'2'}>
                <AntDesign name="apple1" size={36} color="white" />
              </View>
              <VStack>
                <Text
                  fontSize={12}
                  color="white"
                  ml={1}
                  mt={1}>
                  Download on the
                </Text>
                <Text
                  color="white"
                  ml={1}
                  fontSize={["20","18"]}
                  fontWeight={'semibold'}>
                  App Store
                </Text>
              </VStack>
              </HStack>
          </Button>

           <Button
            ml={['193', '280', '425', '473']}
            mt={['1000', '1100', '500', '1500']}
            variant={'outline'}
            position={'absolute'}
            borderRadius={10}
            width={['140', '180', '200', '170']}
            h={['55', '60', '70', '66']}
            borderWidth={2}
            borderColor={'white'}>
            <HStack mt="1">
              <Entypo name="google-play" size={48} color="white" />
              <VStack mt={'1'}>
                <Text
                  fontSize={['8', '8']}
                  fontWeight="semibold"
                  mt={1.5}
                  color="white"
                  ml={1}>
                  ANDROID APP ON
                </Text>
                <Text
                  color="white"
                  ml={1}
                  fontSize={['15', '18']}
                  fontWeight="semibold">
                  Google Play
                </Text>
              </VStack>
            </HStack>
          </Button>

        </Hidden>
      </View>
    </>
  );
};

export default SecondMbl;

import React from 'react';
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
} from 'native-base';
import { LinearGradient } from 'react-native-svg';
import { StyleSheet } from 'react-native';

const FifthWeb = () => {
  return (
    <>
      <View flex="1" flexGrow={1} >
        <Hidden from="base" till="lg">
          <Stack
            width={['100%', '100%', '100%', '100%']}
            mt={['0', '', '200', '-750']}
            style={{ flex: 1 }}>
            <Image
              resizeMode="cover"
              source={require('../assets/price_bg.png')}
              width={['100%', '100%', '100%', '100%']}
              h={['750', '700', '650', '750']}
              position="absolute"
              marginTop={['85', '50', '200', '520']}
            />

            <HStack mt={700} ml={400}>
              <View marginTop={['2000', '500', '0', '0']} marginLeft={90}>
                <Card borderRadius={20} bg={'white'} width={300}>
                  <HStack>
                    <Heading
                      mt={2}
                      ml={6}
                      fontWeight={'bold'}
                      color="purple.600"
                      fontSize={25}>
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
                    fontSize={15}>
                    {` ✓ 1 User\n✓ 100 Properties/day\n✓ Driving Routes \n✓ 1 Credit = $1.00\n✓ 4*6 Mail = $0.75\n✓ Smart Search = $0.10\n✓ 5 Free Credits\n✓ E-mail Support`}
                  </Text>
                  <Button
                    variant={'outline'}
                    borderRadius={30}
                    borderColor={'purple.600'}
                    colorScheme="purple"
                    mt={35}
                    ml={6}
                    mr={6}>
                    <Text color={'purple.600'}>Buy License for Solo</Text>
                  </Button>
                </Card>
              </View>







              <View marginTop={['2000', '500', '0', '0']} marginLeft={90}>
                <Card borderRadius={20} bg={'white'} width={300}>
                  <HStack>
                    <Heading
                      mt={2}
                      ml={6}
                      fontWeight={'bold'}
                      color="purple.600"
                      fontSize={25}>
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
                    fontSize={15}>
                    {` ✓ 1 User\n✓ 100 Properties/day\n✓ Driving Routes \n✓ 1 Credit = $1.00\n✓ 4*6 Mail = $0.75\n✓ Smart Search = $0.10\n✓ 5 Free Credits\n✓ E-mail Support`}
                  </Text>
                  <Button
                    variant={'outline'}
                    borderRadius={30}
                    borderColor={'purple.600'}
                    colorScheme="purple"
                    mt={35}
                    ml={6}
                    mr={6}>
                    <Text color={'purple.600'}>Buy License for Solo</Text>
                  </Button>
                </Card>
              </View>

              {/* <Pressable>
                {({ isHovered }) => {
                  return (
                    <View style={{ position: 'absolute' }}>
                      {isHovered ? (
                        <View>
                          <Card
                            borderRadius={20}
                            w={380}
                            h="563"
                            bg={'white'}
                            shadow="5">
                            <Heading
                              mt={6}
                              ml={6}
                              fontWeight={'bold'}
                              color="purple.600"
                              fontSize={20}>
                              Solo
                            </Heading>
                            <HStack>
                              <Heading
                                mt={2}
                                ml={6}
                                fontWeight={'bold'}
                                color="purple.600"
                                fontSize={25}>
                                $99
                              </Heading>
                              <Text
                                mt={3.5}
                                ml={2}
                                color="#999999"
                                fontSize={15}>
                                (Monthly)
                              </Text>
                            </HStack>
                            <Text
                              lineHeight={33}
                              mt={5}
                              ml={6}
                              color="#999999"
                              fontSize={15}>
                              ✓ 1 User<br></br>✓ 100 Properties/day<br></br>✓
                              Driving Routes
                              <br></br>✓1 Credit = $1.00<br></br>✓ 4*6 Mail =
                              $0.75
                              <br></br>✓ Smart Search = $0.10<br></br>✓ 5 Free
                              Credits
                              <br></br>✓ E-mail Support
                            </Text>

                            <Pressable>
                              <LinearGradient
                                colors={['#7D2BE9', '#BA47F3']}
                                start={[1, 0]}
                                end={[0, 1]}
                                style={styles.card1}>
                                <Text m="auto" color={'white'}>
                                  Buy License for Solo
                                </Text>
                              </LinearGradient>
                            </Pressable>
                          </Card>
                        </View>
                      ) : (
                        <View style={{ position: 'absolute' }}>
                          <Card
                            borderRadius={20}
                            w={380}
                            h="563"
                            bg={'white'}
                            shadow="1">
                            <Heading
                              mt={6}
                              ml={6}
                              fontWeight={'bold'}
                              color="purple.600"
                              fontSize={20}>
                              Solo
                            </Heading>
                            <HStack>
                              <Heading
                                mt={2}
                                ml={6}
                                fontWeight={'bold'}
                                color="purple.600"
                                fontSize={25}>
                                $99
                              </Heading>
                              <Text
                                mt={3.5}
                                ml={2}
                                color="#999999"
                                fontSize={15}>
                                (Monthly)
                              </Text>
                            </HStack>
                            <Text
                              lineHeight={33}
                              mt={5}
                              ml={6}
                              color="#999999"
                              fontSize={15}>
                              ✓ 1 User<br></br>✓ 100 Properties/day<br></br>✓
                              Driving Routes
                              <br></br>✓1 Credit = $1.00<br></br>✓ 4*6 Mail =
                              $0.75
                              <br></br>✓ Smart Search = $0.10<br></br>✓ 5 Free
                              Credits
                              <br></br>✓ E-mail Support
                            </Text>

                            <Button
                              mt={35}
                              ml={6}
                              mr={6}
                              variant={'outline'}
                              borderRadius={30}
                              borderColor={'purple.600'}
                              colorScheme="purple">
                              <Text color={'purple.600'}>
                                Buy License for team
                              </Text>
                            </Button>
                          </Card>
                        </View>
                      )}
                    </View>
                  );
                }}
              </Pressable> */}



            </HStack>
          </Stack>
        </Hidden>
      </View>
    </>
  );
};

export default FifthWeb;

const styles = StyleSheet.create({
  card1: {
    marginTop: 35,
    width: 300,
    height: 40,
    mt: -20,
position:"absolute",
    borderRadius:30,
    flexDirection: 'Column',

    color: 'white',
    alignSelf: 'center',
  },
});

import { Box, Card, CardItem, Body, Center, Container, Flex, HStack, Icon, IconButton, Spacer, StatusBar, Text, SearchIcon, HamburgerIcon, WarningIcon, Pressable, VStack, Avatar, Button, ScrollView } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';


export const ScreenFirts = () => {

    const data = [{
        id: "1",
        fullName: "Visa Debit Card",
        number: "****5658",
        valor: "$18,234",
        icon: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
        id: "2",
        fullName: "Visa Signature Card",
        number: "****5658",
        valor: "$5,234",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }
    ];

    const renderItem = ({
        item,
        index
    }) => <Box>
            <Pressable onPress={() => console.log("You touched me")} _dark={{
                bg: "muted.50"
            }} _light={{
                bg: "white"
            }}>
                <Box pl="4" pr="5" py="2" bg={"muted.50"}>
                    <HStack alignItems="center" space={3}>
                        <Avatar size="48px" source={{
                            uri: item.icon
                        }} />
                        <VStack>
                            <Text color="coolGray.800" _dark={{
                                color: "warmGray.50"
                            }} bold>
                                {item.fullName}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                {item.number}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Text fontSize="xs" bold color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }} alignSelf="flex-start">
                            {item.valor}
                        </Text>
                    </HStack>
                </Box>
            </Pressable>
        </Box>;

    return (
        <Box>
            <ScrollView>

                <Flex direction='row'
                // h={40} w={20} mt={6}
                >
                    <Center
                        size={16}
                        // bg="primary.400"
                        rounded="xl"
                        _text={{
                            color: "black"
                        }}
                    >
                        <HamburgerIcon />
                    </Center>
                    <Spacer />
                    <Center
                        size={16}
                        // bg="secondary.400"
                        rounded="xl"
                        _text={{
                            color: "black"
                        }}
                    >
                        <WarningIcon />
                    </Center>
                </Flex>

                <Text fontSize="3xl" bold style={{ alignItems: 'flex-start', marginLeft: 20 }}>Card Controls</Text>

                <Center>
                    <Box w="90%"
                        bg={"muted.50"}
                        style={{ borderRadius: 20, padding: 20, marginTop: 15 }}
                    >
                        {/* <Text>
                        kjsahdfkljhasldkjfhkasjhdfsdfasdfsdfasdfasdfgdfgsdfgsdfg
                        sdgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfg
                    </Text> */}
                        <SwipeListView data={data}
                            renderItem={renderItem}
                            // renderHiddenItem={renderHiddenItem} 
                            rightOpenValue={-130}
                            previewRowKey={"0"}
                            previewOpenValue={-40}
                            previewOpenDelay={3000}
                        // onRowDidOpen={onRowDidOpen} 
                        />

                        <Box>
                            <Pressable onPress={() => console.log("You touched me")} _dark={{
                                bg: "muted.50"
                            }} _light={{
                                bg: "white"
                            }}>
                                <Box pl="4" pr="5" py="2" bg={"muted.50"}>
                                    <HStack alignItems="center" space={3}>
                                        <Avatar size="48px" source={{
                                            uri: "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png"
                                        }} />
                                        <VStack>
                                            <Text color="coolGray.800" _dark={{
                                                color: "warmGray.50"
                                            }} bold>
                                                {"Add New Card"}
                                            </Text>
                                            <Text color="coolGray.600" _dark={{
                                                color: "warmGray.200"
                                            }}>
                                                {"Open A Deposit or account"}
                                            </Text>
                                        </VStack>
                                        <Spacer />
                                        {/* <Text fontSize="xs" color="coolGray.800" _dark={{
                                        color: "warmGray.50"
                                    }} alignSelf="flex-start">
                                        {item.valor}
                                    </Text> */}
                                    </HStack>
                                </Box>
                            </Pressable>
                        </Box>

                    </Box>
                </Center>

                <Text fontSize="3xl" bold style={{ alignItems: 'flex-start', marginLeft: 20, marginTop: 15 }}>Goal</Text>

                <Center>
                    <Box w="90%"
                        bg={"#352c49"}
                        style={{ borderRadius: 20, padding: 20, marginTop: 15, color: 'white' }}
                    >
                        <Box>
                            <Pressable onPress={() => console.log("You touched me")} _dark={{
                                bg: "muted.50"
                            }} _light={{
                                bg: "white"
                            }}>
                                <Box pl="4" pr="5" py="2" bg={"#352c49"}>
                                    <HStack alignItems="center" space={3}>
                                        <Avatar size="48px" source={{
                                            uri: "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png"
                                        }} />
                                        <VStack>
                                            <Text color="white" _dark={{
                                                color: "warmGray.50"
                                            }} bold>
                                                {"Save up for a Goal"}
                                            </Text>
                                            <Text color="white" _dark={{
                                                color: "warmGray.200"
                                            }}>
                                                {"Save money for upcoming expenses"}
                                            </Text>
                                        </VStack>
                                        <Spacer />
                                        {/* <Text fontSize="xs" color="coolGray.800" _dark={{
                                        color: "warmGray.50"
                                    }} alignSelf="flex-start">
                                        {item.valor}
                                    </Text> */}
                                    </HStack>
                                </Box>
                            </Pressable>
                        </Box>
                    </Box>
                </Center>


                <Text fontSize="3xl" bold style={{ alignItems: 'flex-start', marginLeft: 20, marginTop: 15 }}>Credit Score</Text>

                <Center>
                    <Box w="90%"
                        bg={"muted.50"}
                        style={{ borderRadius: 20, padding: 20, marginTop: 15, marginBottom: 15 }}
                    >
                        <Center style={{ margin: 20 }}>
                            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
                                Youre in good shape. Get a loan
                            </Text>
                            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
                                at attractive interest rates.
                            </Text>
                            <Button bg={"#fd3c5a"} style={{ marginTop: 20, borderRadius: 15, width: '100%' }}>
                                <Text color={"white"} bold>Get Credit Card</Text>
                            </Button>
                        </Center>
                    </Box>
                </Center>
            </ScrollView>
        </Box>
    )
}

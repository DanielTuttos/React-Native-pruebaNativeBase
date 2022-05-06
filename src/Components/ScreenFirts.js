import { Box, Card, CardItem, Body, Center, Container, Flex, HStack, Icon, IconButton, Spacer, StatusBar, Text, SearchIcon, HamburgerIcon, WarningIcon } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'


export const ScreenFirts = () => {
    return (
        <Box>
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
                    <Text>
                        kjsahdfkljhasldkjfhkasjhdfsdfasdfsdfasdfasdfgdfgsdfgsdfg
                        sdgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfg
                    </Text>
                </Box>
            </Center>

            <Text fontSize="3xl" bold style={{ alignItems: 'flex-start', marginLeft: 20, marginTop: 15 }}>Goal</Text>

            <Center>
                <Box w="90%"
                    bg={"#352c49"}
                    style={{ borderRadius: 20, padding: 20, marginTop: 15, color: 'white' }}
                >
                    <Text
                        style={{ color: 'white' }}
                    >
                        kjsahdfkljhasldkjfhkasjhdfsdfasdfsdfasdfasdfgdfgsdfgsdfg
                        sdgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfg
                    </Text>
                </Box>
            </Center>


            <Text fontSize="3xl" bold style={{ alignItems: 'flex-start', marginLeft: 20, marginTop: 15 }}>Credit Score</Text>

            <Center>
                <Box w="90%"
                    bg={"muted.50"}
                    style={{ borderRadius: 20, padding: 20, marginTop: 15 }}
                >
                    <Text>
                        kjsahdfkljhasldkjfhkasjhdfsdfasdfsdfasdfasdfgdfgsdfgsdfg
                        sdgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfg
                    </Text>
                </Box>
            </Center>
        </Box>
    )
}

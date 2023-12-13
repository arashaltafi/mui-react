import React from 'react'
import { ChakraProvider, Box, Button, Text, Divider, Input, Flex } from '@chakra-ui/react'
import theme from './Theme'
import { useToast } from '@chakra-ui/react'

const App = () => {

    const toast = useToast()

    const closeAll = () => {
        toast.closeAll()
    }


    return (
        <ChakraProvider theme={theme}>
            <Box h={'100vh'} dir='ltr'>
                <Flex mx={'20px'} pt={'20px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={4}>
                    <Button bgColor={'blue.500'} color={'white'}>
                        <Text color={'secondary.100'} fontSize={"subtitle"}>
                            Hello Blue 500
                        </Text>
                    </Button>

                    <Divider />

                    <Button bgColor={'red.500'} color={'white'}>
                        <Text color={'secondary.100'} fontSize={{
                            mobile: "small",
                            tablet: "large",
                        }}>
                            Hello Red 500
                        </Text>
                    </Button>

                    <Divider />

                    <Input
                        variant={'filled'}
                        bgColor={'gray.100'}
                        color={'black'}
                        fontSize={'xl'}
                        p={8}
                        sx={{ height: '40px', width: '300px' }}
                        type="text"
                        _hover={{ bgColor: 'gray.200' }}
                        placeholder='Enter Your Name ...' />

                    <Divider />

                    <Button
                        onClick={() =>
                            toast({
                                title: 'Account created.',
                                description: "We've created your account for you.",
                                status: 'success',
                                duration: 5000,
                                isClosable: true,
                            })
                        }
                    >
                        Show Toast
                    </Button>

                    <Divider />

                    <Button
                        onClick={() =>
                            toast({
                                position: 'bottom-left',
                                render: () => (
                                    <Box color='white' p={3} bg='blue.500'>
                                        Hello World
                                    </Box>
                                ),
                            })
                        }
                    >
                        Show Toast
                    </Button>

                    <Button onClick={closeAll} type='button' variant='outline'>
                        Close all toasts
                    </Button>

                    <Divider />

                </Flex>
            </Box>
        </ChakraProvider>
    )
}

export default App
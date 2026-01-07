import { Flex, Text, Avatar, Input, Button, Container } from '@chakra-ui/react'
import React from 'react'

export default function Signin() {
    return (
        <Container>
            <Flex justify="space-between" align="center" mb="6">
                <Text fontSize="2xl"
                    fontWeight="bold">
                    Login
                </Text>
                <Avatar.Root colorPalette="darkgrey" >
                    <Avatar.Fallback />
                    <Avatar.Image src="/Image/login.avif" />
                </Avatar.Root>
            </Flex>
            <Input type="tel" placeholder="Phone Number" />
            <Button p="4" bg="orange" width="full" m="2">LOGIN</Button>
        </Container>
    )
}
